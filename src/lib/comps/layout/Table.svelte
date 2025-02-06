<script lang="ts">
	// Keep-alive constant for Tailwind purge - DO NOT REMOVE
	const _ = [
		'table',
		'table-zebra table-pin-rows table-pin-cols',
		'table-xs table-sm table-md table-lg table-xl'
	].join(' ');

	let {
		zebra = false,
		pinRows = false,
		pinCols = false,
		size = undefined,
		class: className = '',
		children,
		...rest
	} = $props<{
		zebra?: boolean;
		pinRows?: boolean;
		pinCols?: boolean;
		size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
		class?: string;
		children?: () => any;
	}>();

	let classes = $derived(
		[
			'table',
			zebra ? 'table-zebra' : '',
			pinRows ? 'table-pin-rows' : '',
			pinCols ? 'table-pin-cols' : '',
			size ? `table-${size}` : '',
			className
		]
			.filter(Boolean)
			.join(' ')
	);
</script>

<table class={classes} {...rest}>
	{@render children?.()}
</table>
