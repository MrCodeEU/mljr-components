<script lang="ts">
	// Keep-alive constant for Tailwind purge - DO NOT REMOVE
	const _ = [
		'footer-center',
		'footer-horizontal footer-vertical',
		'bg-neutral text-neutral-content',
		'bg-base-100 bg-base-200 bg-base-300 text-base-content',
		'bg-primary text-primary-content',
		'rounded',
		'border-t border-base-300',
		'grid-rows-2',
		'items-center'
	].join(' ');

	let {
		center = false,
		direction = undefined,
		background = undefined,
		rounded = false,
		border = false,
		rows = undefined,
		itemsCenter = false,
		class: className = '',
		children,
		...rest
	} = $props<{
		center?: boolean;
		direction?: 'horizontal' | 'vertical';
		background?: 'neutral' | 'base-100' | 'base-200' | 'base-300' | 'primary';
		rounded?: boolean;
		border?: boolean;
		rows?: number;
		itemsCenter?: boolean;
		class?: string;
		children?: () => any;
	}>();

	let classes = $derived(
		[
			'footer',
			'clay', 'clay-lg', 'clay-rounded-lg',
			'sm:footer-horizontal',
			center ? 'footer-center' : '',
			direction ? `footer-${direction}` : '',
			background ? `bg-${background}` : '',
			background === 'neutral' ? 'text-neutral-content' : '',
			background === 'primary' ? 'text-primary-content' : '',
			background === 'base-100' || background === 'base-200' || background === 'base-300'
				? 'text-base-content'
				: '',
			rounded ? 'rounded' : '',
			border ? 'border-t border-base-300' : '',
			rows ? `grid-rows-${rows}` : '',
			itemsCenter ? 'items-center' : '',
			className
		]
			.filter(Boolean)
			.join(' ')
	);
</script>

<footer class={classes} {...rest}>
	{@render children?.()}
</footer>
