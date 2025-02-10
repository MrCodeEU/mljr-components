<script lang="ts">
	let {
		class: className = '',
		maxWidth = false,
		children,
		...rest
	} = $props<{
		class?: string;
		maxWidth?: boolean;
		children?: () => any;
	}>();

	let classes = $derived(
		[
			'breadcrumbs',
			'clay',
			'clay-lg',
			'clay-rounded-lg',
			'px-3',
			'w-fit',
			'text-sm',
			maxWidth ? 'max-w-xs' : '',
			className
		]
			.filter(Boolean)
			.join(' ')
	);
</script>

<div class={classes} {...rest}>
	<ul>
		{@render children?.()}
	</ul>
</div>
