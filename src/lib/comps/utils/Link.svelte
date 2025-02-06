<script lang="ts">
	let {
		href = '#',
		color = undefined,
		hover = false,
		class: className = '',
		children,
		...rest
	} = $props<{
		href?: string;
		color?:
			| 'primary'
			| 'secondary'
			| 'accent'
			| 'neutral'
			| 'success'
			| 'info'
			| 'warning'
			| 'error';
		hover?: boolean;
		class?: string;
		children?: () => any;
	}>();

	// Add text color classes along with link styles
	let classes = $derived(
		[
			'link',
			hover ? 'link-hover' : '',
			color
				? [
						`link-${color}`,
						`text-${color}`, // Add explicit text color
						`hover:text-${color}` // Maintain color on hover
					].join(' ')
				: '',
			className
		]
			.filter(Boolean)
			.join(' ')
	);
</script>

<a {href} class={classes} {...rest}>
	{@render children?.()}
</a>
