<script lang="ts">
	// Keep-alive constant for Tailwind purge - DO NOT REMOVE
	const _ = [
		'indicator',
		'indicator-item',
		'indicator-start indicator-center indicator-end',
		'indicator-top indicator-middle indicator-bottom',
		'sm:indicator-middle md:indicator-bottom lg:indicator-center xl:indicator-end'
	].join(' ');

	let {
		class: className = '',
		children,
		...rest
	} = $props<{
		class?: string;
		children?: () => any;
	}>();

	let classes = $derived(['indicator', className].filter(Boolean).join(' '));
</script>

<div class={classes} {...rest}>
	{@render children?.()}
</div>
