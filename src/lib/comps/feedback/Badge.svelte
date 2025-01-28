<script lang="ts">
	// Keep-alive constant for Tailwind purge - DO NOT REMOVE
	const _ = [
		'badge-neutral badge-primary badge-secondary badge-accent badge-info badge-success badge-warning badge-error',
		'badge-outline badge-soft badge-dash badge-ghost',
		'badge-xs badge-sm badge-md badge-lg badge-xl'
	].join(' ');

	let {
		color = undefined,
		style = undefined,
		size = undefined,
		class: className = '',
		children,
		...rest
	} = $props<{
		color?:
			| 'neutral'
			| 'primary'
			| 'secondary'
			| 'accent'
			| 'info'
			| 'success'
			| 'warning'
			| 'error';
		style?: 'outline' | 'soft' | 'dash' | 'ghost';
		size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
		class?: string;
		children?: () => any;
	}>();

	let classes = $derived(
		[
			'badge',
			color ? `badge-${color}` : '',
			style ? `badge-${style}` : '',
			size ? `badge-${size}` : '',
			className
		]
			.filter(Boolean)
			.join(' ')
	);
</script>

<span class={classes} {...rest}>
	{@render children?.()}
</span>
