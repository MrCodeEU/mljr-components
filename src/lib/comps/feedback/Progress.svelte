<script lang="ts">
	// Keep-alive constant for Tailwind purge - DO NOT REMOVE
	const _ = [
		'progress-neutral progress-primary progress-secondary progress-accent progress-info progress-success progress-warning progress-error'
	].join(' ');

	let {
		value = undefined,
		max = 100,
		color = undefined,
		width = '100%',
		size = undefined,
		labelPosition = 'right',
		showLabel = false,
		class: className = '',
		...rest
	} = $props<{
		value?: number;
		max?: number;
		color?:
			| 'neutral'
			| 'primary'
			| 'secondary'
			| 'accent'
			| 'info'
			| 'success'
			| 'warning'
			| 'error';
		width?: string;
		size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
		labelPosition?: 'left' | 'right' | 'top' | 'bottom';
		showLabel?: boolean;
		class?: string;
	}>();

	let classes = $derived(
		[
			'progress',
			'clay',
			'clay-rounded-lg',
			'clay-lg',
			color ? `progress-${color}` : '',
			size ? `progress-${size}` : '',
			className
		]
			.filter(Boolean)
			.join(' ')
	);

	let progressValue = $derived(value !== undefined ? Math.round((value / max) * 100) : 0);

	let containerClasses = $derived(
		[
			'inline-flex items-center',
			labelPosition === 'top' || labelPosition === 'bottom' ? 'flex-col gap-1' : 'gap-2'
		]
			.filter(Boolean)
			.join(' ')
	);

	let labelClasses = $derived(
		[
			'text-sm whitespace-nowrap',
			labelPosition === 'top' || labelPosition === 'bottom'
				? 'absolute left-0 transform -translate-x-1/2'
				: '',
			labelPosition === 'top' ? '-top-6' : labelPosition === 'bottom' ? '-bottom-6' : ''
		]
			.filter(Boolean)
			.join(' ')
	);

	let labelStyle = $derived(
		labelPosition === 'top' || labelPosition === 'bottom' ? `left: ${progressValue}%` : ''
	);
</script>

<div class={containerClasses} style={`width: ${width}`}>
	{#if showLabel && labelPosition === 'left'}
		<span class={labelClasses}>{progressValue}%</span>
	{/if}
	<div class="relative flex-1" style={`width: ${width}`}>
		{#if showLabel && (labelPosition === 'top' || labelPosition === 'bottom')}
			<span class={labelClasses} style={labelStyle}>{progressValue}%</span>
		{/if}
		<progress class={classes} style="width: 100%" {value} {max} {...rest}></progress>
	</div>
	{#if showLabel && labelPosition === 'right'}
		<span class={labelClasses}>{progressValue}%</span>
	{/if}
</div>

<style>
	/* custom progress height aka size styles */
	.progress-xs {
		height: 0.25rem;
	}
	.progress-sm {
		height: 0.5rem;
	}
	.progress-md {
		height: 1rem;
	}
	.progress-lg {
		height: 1.5rem;
	}
	.progress-xl {
		height: 2rem;
	}

	.relative {
		position: relative;
		display: inline-block; /* This helps contain the width */
	}

	progress {
		position: relative;
		z-index: 1;
	}

	.flex-1 {
		flex: 1;
	}
</style>
