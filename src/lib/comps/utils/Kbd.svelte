<script lang="ts">
	let {
		size = undefined,
		combination = false,
		class: className = '',
		children,
		...rest
	} = $props<{
		size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
		combination?: boolean;
		class?: string;
		children?: () => any;
	}>();

	let classes = $derived(['kbd', size ? `kbd-${size}` : '', className].filter(Boolean).join(' '));
</script>

<kbd class={classes} {...rest}>
	{@render children?.()}
</kbd>
{#if combination}
	+
{/if}
