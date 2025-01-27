<script lang="ts">
	type StepColor =
		| 'primary'
		| 'secondary'
		| 'accent'
		| 'info'
		| 'success'
		| 'warning'
		| 'error'
		| 'neutral';

	let {
		color = undefined,
		content = undefined,
		icon = undefined,
		class: className = '',
		children,
		...rest
	} = $props<{
		color?: StepColor;
		content?: string;
		icon?: any;
		class?: string;
		children?: () => any;
	}>();

	let classes = $derived(
		['step', color ? `step-${color}` : '', className].filter(Boolean).join(' ')
	);
</script>

<li class={classes} data-content={content} {...rest}>
	{#if icon}
		<span class="step-icon">
			{#if icon}
				{@const Icon = icon}
				<Icon class="h-4 w-4 shrink-0" />
			{/if}
		</span>
	{/if}
	{@render children?.()}
</li>
