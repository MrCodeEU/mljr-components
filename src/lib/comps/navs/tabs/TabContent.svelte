<script lang="ts">
	import { getContext } from 'svelte';

	// Get parent Tabs context
	type TabsContext = { background: string; border: string };
	const { background: parentBackground, border: parentBorder } = getContext<TabsContext>(
		'tabs'
	) ?? {
		background: 'bg-base-100',
		border: 'border-base-300'
	};

	let {
		name = '',
		aria = '',
		class: className = '',
		background = parentBackground,
		border = parentBorder,
		tabBackground = '',
		contentBackground = '',
		tabBorder = '',
		contentBorder = '',
		shadowSize = 'lg',
		children,
		...rest
	} = $props<{
		name?: string;
		aria?: string;
		class?: string;
		background?: string;
		border?: string;
		tabBackground?: string;
		contentBackground?: string;
		tabBorder?: string;
		contentBorder?: string;
		shadowSize?: 'sm' | 'md' | 'lg';
		children?: () => any;
	}>();

	// Use specific colors if provided, otherwise fall back to global colors
	let tabClasses = $derived(
		[
			'tab',
			'clay',
			'clay-rounded-sm',
			'clay-sm',
			'hover:clay-md',
			'not-focus:text', // Added focus variant with primary color at 10% opacity
			'transition-all',
			tabBackground || background,
			tabBorder || border
		]
			.filter(Boolean)
			.join(' ')
	);

	let contentClasses = $derived(
		[
			'tab-content',
			'clay',
			'clay-rounded-lg',
			`clay-${shadowSize}`,
			contentBackground || background,
			contentBorder || border,
			'p-6',
			className
		]
			.filter(Boolean)
			.join(' ')
	);
</script>

<input type="radio" {name} role="tab" class={tabClasses} aria-label={aria} checked />
<div class={contentClasses} {...rest}>
	{@render children?.()}
</div>
