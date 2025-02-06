<script lang="ts">
	import type { Icon } from 'lucide-svelte';

	let {
		title = '',
		value = '',
		description = '',
		icon = undefined,
		iconColor = undefined,
		valueColor = undefined,
		descriptionColor = undefined,
		centered = false,
		class: className = '',
		children,
		...rest
	} = $props<{
		title?: string;
		value?: string | number;
		description?: string;
		icon?: typeof Icon;
		iconColor?: 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error';
		valueColor?: 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error';
		descriptionColor?:
			| 'primary'
			| 'secondary'
			| 'accent'
			| 'info'
			| 'success'
			| 'warning'
			| 'error';
		centered?: boolean;
		class?: string;
		children?: () => any;
	}>();

	let classes = $derived(
		['stat', centered ? 'place-items-center' : '', className].filter(Boolean).join(' ')
	);

	let iconClasses = $derived(
		['stat-figure', iconColor ? `text-${iconColor}` : ''].filter(Boolean).join(' ')
	);

	let valueClasses = $derived(
		['stat-value', valueColor ? `text-${valueColor}` : ''].filter(Boolean).join(' ')
	);

	let descriptionClasses = $derived(
		['stat-desc', descriptionColor ? `text-${descriptionColor}` : ''].filter(Boolean).join(' ')
	);
</script>

<div class={classes} {...rest}>
	{#if icon}
		<div class={iconClasses}>
			{#if icon}
				{@const Icon = icon}
				<Icon class="inline-block h-8 w-8 stroke-current" />
			{/if}
		</div>
	{/if}
	{#if title}
		<div class="stat-title">{title}</div>
	{/if}
	{#if value}
		<div class={valueClasses}>{value}</div>
	{/if}
	{#if description}
		<div class={descriptionClasses}>{description}</div>
	{/if}
	{#if children}
		<div class="stat-actions">
			{@render children?.()}
		</div>
	{/if}
</div>
