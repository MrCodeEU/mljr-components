<script lang="ts">
	// Keep-alive constant for Tailwind purge - DO NOT REMOVE
	const _ = [
		'navbar-start navbar-center navbar-end',
		'navbar bg-base-100 bg-base-200 bg-base-300 bg-primary bg-neutral',
		'text-primary-content text-neutral-content'
	].join(' ');

	let {
		background = undefined,
		class: className = '',
		children,
		...rest
	} = $props<{
		background?: 'neutral' | 'base-100' | 'base-200' | 'base-300' | 'primary';
		class?: string;
		children?: () => any;
	}>();

	let classes = $derived(
		[
			'navbar',
			'shadow-sm',
			'clay',
			'clay-lg',
			'clay-rounded-lg',
			'ps-2',
			'pe-8',
			'py-3',
			background ? `bg-${background}` : 'bg-base-100',
			background === 'primary' ? 'text-primary-content' : '',
			background === 'neutral' ? 'text-neutral-content' : '',
			className
		]
			.filter(Boolean)
			.join(' ')
	);
</script>

<div class={classes} {...rest}>
	{@render children?.()}
</div>
