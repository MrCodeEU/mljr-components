<script lang="ts">
	// Keep-alive constant for Tailwind purge - DO NOT REMOVE
	const _ = [
		'alert-info alert-success alert-warning alert-error',
		'alert-outline alert-soft alert-dash',
		'alert-vertical alert-horizontal'
	].join(' ');

	let {
		color = undefined,
		style = undefined,
		direction = undefined,
		shadowSize = 'lg',
		class: className = '',
		children,
		...rest
	} = $props<{
		color?: 'info' | 'success' | 'warning' | 'error';
		style?: 'outline' | 'soft' | 'dash';
		direction?: 'vertical' | 'horizontal';
		shadowSize?: 'sm' | 'md' | 'lg';
		class?: string;
		children?: () => any;
	}>();

	let classes = $derived(
		[
			'clay',
			`clay-${shadowSize}`,
			'clay-rounded-lg',
			'alert',
			color ? `alert-${color}` : '',
			style ? `alert-${style}` : '',
			direction ? `alert-${direction}` : '',
			className
		]
			.filter(Boolean)
			.join(' ')
	);
</script>

<div role="alert" class={classes} {...rest}>
	{@render children?.()}
</div>
