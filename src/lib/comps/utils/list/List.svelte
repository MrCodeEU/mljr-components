<script lang="ts">
	let {
		class: className = '',
		children,
		...rest
	} = $props<{
		class?: string;
		children?: () => any;
	}>();

	let classes = $derived(
		[
			'list',
			'clay',
			'clay-lg',
			'clay-rounded-lg',
			'bg-base-100',
			'rounded-box',
			'shadow-md',
			className
		].join(' ')
	);
</script>

<ul class={classes} {...rest}>
	{@render children?.()}
</ul>
