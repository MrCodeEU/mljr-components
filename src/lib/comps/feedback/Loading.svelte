<script lang="ts">
	// Keep-alive constant for Tailwind purge - DO NOT REMOVE
	const _ = [
		'loading-spinner loading-dots loading-ring loading-ball loading-bars loading-infinity',
		'loading-xs loading-sm loading-md loading-lg loading-xl',
		'text-primary text-secondary text-accent text-neutral text-info text-success text-warning text-error'
	].join(' ');

	let {
		style = 'spinner' as const,
		size = undefined,
		color = undefined,
		class: className = '',
		...rest
	} = $props<{
		style?: 'spinner' | 'dots' | 'ring' | 'ball' | 'bars' | 'infinity';
		size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
		color?:
			| 'primary'
			| 'secondary'
			| 'accent'
			| 'neutral'
			| 'info'
			| 'success'
			| 'warning'
			| 'error';
		class?: string;
	}>();

	let classes = $derived(
		[
			'loading',
			`loading-${style}`,
			size ? `loading-${size}` : '',
			color ? `text-${color}` : '',
			className
		]
			.filter(Boolean)
			.join(' ')
	);
</script>

<span class={classes} {...rest}> </span>
