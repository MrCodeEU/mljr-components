<script lang="ts">
	// Keep-alive constant for Tailwind purge - DO NOT REMOVE
	const _ = [
		'collapse collapse-arrow collapse-plus',
		'collapse-open collapse-close',
		'collapse-title collapse-content'
	].join(' ');

	let {
		icon = undefined,
		open = undefined,
		useFocus = true,
		background = 'bg-base-100',
		border = true,
		class: className = '',
		children,
		...rest
	} = $props<{
		icon?: 'arrow' | 'plus';
		open?: boolean;
		useFocus?: boolean;
		background?: string;
		border?: boolean;
		class?: string;
		children?: () => any;
	}>();

	let classes = $derived(
		[
			'collapse',
			'clay', 'clay-lg', 'clay-rounded-lg', 'p-3',
			icon ? `collapse-${icon}` : '',
			open === true ? 'collapse-open' : '',
			open === false ? 'collapse-close' : '',
			background,
			border ? 'border border-base-300' : '',
			className
		]
			.filter(Boolean)
			.join(' ')
	);
</script>

{#if useFocus}
	<div role="button" tabindex="0" class={classes} {...rest}>
		{@render children?.()}
	</div>
{:else}
	<div class={classes} {...rest}>
		<input type="checkbox" checked={open} />
		{@render children?.()}
	</div>
{/if}
