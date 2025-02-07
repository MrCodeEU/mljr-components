<script lang="ts">
	let {
		position = 'start',
		class: className = '',
		children,
		...rest
	} = $props<{
		position?: 'start' | 'center' | 'end';
		class?: string;
		children?: () => any;
	}>();

	let classes = $derived([`navbar-${position}`,  className].filter(Boolean).join(' '));
</script>

<div class={classes} {...rest}>
	{@render children?.()}
</div>
