<script lang="ts">
	let {
		class: className = '',
		children,
		...rest
	} = $props<{
		class?: string;
		children?: () => any;
	}>();

	let classes = $derived(['dropdown-content', className].filter(Boolean).join(' '));
</script>

<div class={classes} {...rest}>
	{@render children?.()}
</div>
