<script lang="ts">
	// Keep-alive constant for Tailwind purge - DO NOT REMOVE
	const _ = [
		'status-neutral status-primary status-secondary status-accent status-info status-success status-warning status-error',
		'status-xs status-sm status-md status-lg status-xl',
		'animate-ping animate-bounce'
	].join(' ');

	let {
		color = undefined,
		size = undefined,
		animation = undefined,
		label = undefined,
		class: className = '',
		...rest
	} = $props<{
		color?: 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error';
		size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
		animation?: 'ping' | 'bounce';
		label?: string;
		class?: string;
	}>();

	let classes = $derived([
		'status',
		color ? `status-${color}` : '',
		size ? `status-${size}` : '',
		animation ? `animate-${animation}` : '',
		className
	].filter(Boolean).join(' '));
</script>

{#if animation === 'ping'}
	<div class="inline-grid *:[grid-area:1/1]" aria-label={label}>
		<div class="status status-{color} animate-ping"></div>
		<div class={classes} {...rest}></div>
	</div>
{:else}
	<div class={classes} aria-label={label} {...rest}></div>
{/if}
