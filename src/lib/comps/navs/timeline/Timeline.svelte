<script lang="ts">
	// Keep-alive constant for Tailwind purge - DO NOT REMOVE
	const _ = [
		'timeline timeline-vertical timeline-horizontal timeline-compact',
		'timeline-snap-icon'
	].join(' ');

	let {
		direction = 'vertical',
		snapIconToStart = false,
		compact = false,
		responsive = false,
		class: className = '',
		children,
		...rest
	} = $props<{
		direction?: 'vertical' | 'horizontal';
		snapIconToStart?: boolean;
		compact?: boolean;
		responsive?: boolean;
		class?: string;
		children?: () => any;
	}>();

	let classes = $derived(
		[
			'timeline',
			'clay',
			'clay-lg',
			'clay-rounded-lg',
			'p-5',
			'w-fit',
			'h-fit',
			direction === 'vertical' ? 'timeline-vertical' : 'timeline-horizontal',
			snapIconToStart ? 'timeline-snap-icon' : '',
			compact ? 'timeline-compact' : '',
			responsive ? 'lg:timeline-horizontal' : '',
			className
		]
			.filter(Boolean)
			.join(' ')
	);
</script>

<ul class={classes} {...rest}>
	{@render children?.()}
</ul>
