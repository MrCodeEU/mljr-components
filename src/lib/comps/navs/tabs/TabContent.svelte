<script lang="ts">
	let {
		name = "",
		aria = "",
		class: className = '',
		background = 'bg-base-100',
		border = 'border-base-300',
		children,
		...rest
	} = $props<{
		name?: string;
		aria?: string;
		class?: string;
		background?: string;
		border?: string;
		children?: () => any;
	}>();

	let classes = $derived(
		['tab-content', background, border , 'p-6', className].filter(Boolean).join(' ')
	);
</script>

<input
type="radio"
name={name}
role="tab"
class="tab"
aria-label={aria}
checked
/>
<div class={classes} {...rest}>
	{@render children?.()}
</div>
