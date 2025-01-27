<script lang="ts">
	let {
		showLine = true,
		class: className = '',
		children,
		...rest
	} = $props<{
		showLine?: boolean;
		class?: string;
		children?: () => any;
	}>();

	let classes = $derived(['', className].filter(Boolean).join(' '));
</script>

<li class={classes} {...rest}>
	{#if showLine}
		<hr />
	{/if}
	{@render children?.()}
	{#if showLine}
		<hr />
	{/if}
</li>
