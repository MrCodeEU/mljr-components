<script lang="ts">
	let {
		drawerId,
		class: className = '',
		children,
		...rest
	} = $props<{
		drawerId: string;
		class?: string;
		children?: () => any;
	}>();

	let classes = $derived(['drawer-side', className].filter(Boolean).join(' '));
</script>

<div class={classes} {...rest}>
	<label for={drawerId} aria-label="close sidebar" class="drawer-overlay"></label>
	{@render children?.()}
</div>
