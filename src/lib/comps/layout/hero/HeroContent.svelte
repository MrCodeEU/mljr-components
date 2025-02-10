<script lang="ts">
	let {
		center = false,
		layout = undefined,
		reverse = false,
		class: className = '',
		children,
		...rest
	} = $props<{
		center?: boolean;
		layout?: 'row' | 'col';
		reverse?: boolean;
		class?: string;
		children?: () => any;
	}>();

	let classes = $derived(
		[
			'hero-content',
			'clay',
			'clay-lg',
			'clay-rounded-lg',
			'p-10',
			center ? 'text-center' : '',
			layout === 'col' ? 'flex-col' : '',
			layout === 'row' && reverse ? 'lg:flex-row-reverse' : layout === 'row' ? 'lg:flex-row' : '',
			className
		]
			.filter(Boolean)
			.join(' ')
	);
</script>

<div class={classes} {...rest}>
	{@render children?.()}
</div>
