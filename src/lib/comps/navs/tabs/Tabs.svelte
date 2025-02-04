<script lang="ts">
	import { setContext } from 'svelte';

	// Keep-alive constant for Tailwind purge - DO NOT REMOVE
	const _ = [
		'tabs-border tabs-box tabs-lift',
		'tabs-xs tabs-sm tabs-md tabs-lg tabs-xl',
		'tabs-top tabs-bottom',
		'tab tab-active tab-disabled'
	].join(' ');

	let {
		style = undefined,
		size = undefined,
		placement = 'top',
		background = 'bg-base-100',
		border = 'border-base-300',
		class: className = '',
		children,
		...rest
	} = $props<{
		style?: 'border' | 'box' | 'lift';
		size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
		placement?: 'top' | 'bottom';
		background?: string;
		border?: string;
		class?: string;
		children?: () => any;
	}>();

	// Set context for child TabContent components
	setContext('tabs', { background, border });

	let classes = $derived(
		[
			'tabs',
			'clay',
            'clay-rounded-lg',
            'p-2',
			style ? `tabs-${style}` : '',
			size ? `tabs-${size}` : '',
			placement !== 'top' ? `tabs-${placement}` : '',
			className
		]
			.filter(Boolean)
			.join(' ')
	);
</script>

<div role="tablist" class={classes} {...rest}>
	{@render children?.()}
</div>