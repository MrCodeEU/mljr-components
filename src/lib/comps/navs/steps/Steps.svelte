<script lang="ts">
	// Keep-alive constant for Tailwind purge - DO NOT REMOVE
	const _ = [
		'steps-vertical steps-horizontal',
		'step step-primary step-secondary step-accent step-info',
		'step-success step-warning step-error step-neutral'
	].join(' ');

	let {
		direction = 'horizontal',
		responsive = false,
		class: className = '',
		children,
		...rest
	} = $props<{
		direction?: 'horizontal' | 'vertical';
		responsive?: boolean;
		class?: string;
		children?: () => any;
	}>();

	let classes = $derived(
		[
			'steps',
			'clay',
			'clay-lg',
			'clay-rounded-lg',
			'p-5',
			responsive
				? 'steps-vertical lg:steps-horizontal'
				: direction === 'vertical'
					? 'steps-vertical'
					: '',
			className
		]
			.filter(Boolean)
			.join(' ')
	);
</script>

<ul class={classes} {...rest}>
	{@render children?.()}
</ul>
