<script lang="ts">
	// Keep-alive constant for Tailwind purge - DO NOT REMOVE
	const _ = [
		'text-xs text-sm text-base text-lg text-xl text-2xl text-3xl text-4xl text-5xl',
		'font-normal font-medium font-semibold font-bold'
	].join(' ');

	let {
		size = 'xl',
		weight = 'semibold',
		class: className = '',
		children,
		...rest
	} = $props<{
		size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
		weight?: 'normal' | 'medium' | 'semibold' | 'bold';
		class?: string;
		children?: () => any;
	}>();

	let classes = $derived(
		['card-title', `text-${size}`, `font-${weight}`, className].filter(Boolean).join(' ')
	);
</script>

<h2 class={classes} {...rest}>
	{@render children?.()}
</h2>
