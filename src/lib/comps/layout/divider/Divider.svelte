<script lang="ts">
	// Keep-alive constant for Tailwind purge - DO NOT REMOVE
	const _ = [
		'divider-neutral divider-primary divider-secondary divider-accent',
		'divider-success divider-warning divider-info divider-error',
		'divider-vertical divider-horizontal',
		'divider-start divider-end'
	].join(' ');

	let {
		color = undefined,
		direction = 'vertical',
		placement = undefined,
		class: className = '',
		children,
		...rest
	} = $props<{
		color?:
			| 'neutral'
			| 'primary'
			| 'secondary'
			| 'accent'
			| 'success'
			| 'warning'
			| 'info'
			| 'error';
		direction?: 'vertical' | 'horizontal';
		placement?: 'start' | 'end';
		class?: string;
		children?: () => any;
	}>();

	let classes = $derived(
		[
			'divider',
			color ? `divider-${color}` : '',
			direction === 'horizontal' ? 'divider-horizontal' : '',
			placement ? `divider-${placement}` : '',
			className
		]
			.filter(Boolean)
			.join(' ')
	);
</script>

<div class={classes} {...rest}>
	{@render children?.()}
</div>
