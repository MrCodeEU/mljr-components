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
		class: className = '',
		...rest
	} = $props<{
		value?: number;
		max?: number;
		color?: 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error';
		width?: string;
		class?: string;
        size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
	}>();

	let classes = $derived(
		[
			'progress',
			color ? `progress-${color}` : '',
            size ? `progress-${size}` : '',
			className
		]
			.filter(Boolean)
			.join(' ')
	);
</script>

<progress 
	class={classes} 
	style={`width: ${width}`}
	value={value} 
	{max}
	{...rest}
></progress>

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
</style>