<script lang="ts">
	let {
		direction = 'horizontal',
		responsive = false,
		shadow = false,
		border = false,
		class: className = '',
		children,
		...rest
	} = $props<{
		direction?: 'horizontal' | 'vertical';
		responsive?: boolean;
		shadow?: boolean;
		border?: boolean;
		class?: string;
		children?: () => any;
	}>();

	let classes = $derived([
		'stats',
		direction === 'vertical' && !responsive ? 'stats-vertical' : '',
		responsive ? 'stats-vertical lg:stats-horizontal' : '',
		shadow ? 'shadow' : '',
		border ? 'bg-base-100 border border-base-300' : '',
		className
	].filter(Boolean).join(' '));
</script>

<div class={classes} {...rest}>
	{@render children?.()}
</div>
