<script lang="ts">
	let {
		horizontal = 'end',
		vertical = 'top',
		class: className = '',
		children,
		...rest
	} = $props<{
		horizontal?: 'start' | 'center' | 'end';
		vertical?: 'top' | 'middle' | 'bottom';
		class?: string;
		children?: () => any;
	}>();

	let classes = $derived(
		[
			'indicator-item',
			horizontal !== 'end' && `indicator-${horizontal}`,
			vertical !== 'top' && `indicator-${vertical}`,
			className
		]
			.filter(Boolean)
			.join(' ')
	);
</script>

<div class={classes} {...rest}>
	{@render children?.()}
</div>
