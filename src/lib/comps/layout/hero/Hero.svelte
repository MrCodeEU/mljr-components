<script lang="ts">
	// Keep-alive constant for Tailwind purge - DO NOT REMOVE
	const _ = ['hero bg-base-200', 'min-h-screen'].join(' ');

	let {
		background = undefined,
		minHeight = false,
		backgroundImage = undefined,
		class: className = '',
		children,
		...rest
	} = $props<{
		background?: 'neutral' | 'base-100' | 'base-200' | 'base-300' | 'primary';
		minHeight?: boolean;
		backgroundImage?: string;
		class?: string;
		children?: () => any;
	}>();

	let classes = $derived(
		['hero', background ? `bg-${background}` : '', minHeight ? 'min-h-screen' : '', className]
			.filter(Boolean)
			.join(' ')
	);

	let style = $derived(backgroundImage ? `background-image: url(${backgroundImage});` : '');
</script>

<div class={classes} {style} {...rest}>
	{@render children?.()}
</div>
