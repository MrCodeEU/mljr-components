<script lang="ts">
	import type { Icon as IconType } from 'lucide-svelte';

	// Keep-alive constant for Tailwind purge - DO NOT REMOVE
	const _ = ['timeline-start timeline-end timeline-middle timeline-box'].join(' ');

	let {
		position = 'middle',
		box = false,
		icon = undefined,
		color = undefined,
		class: className = '',
		children,
		...rest
	} = $props<{
		position?: 'start' | 'middle' | 'end';
		box?: boolean;
		icon?: typeof IconType;
		color?:
			| 'neutral'
			| 'primary'
			| 'secondary'
			| 'accent'
			| 'info'
			| 'success'
			| 'warning'
			| 'error';
		class?: string;
		children?: () => any;
	}>();

	let classes = $derived(
		[
			`timeline-${position}`,
			box ? 'timeline-box' : '',
			position === 'middle' && color ? `text-${color}` : '',
			className
		]
			.filter(Boolean)
			.join(' ')
	);
</script>

<div class={classes} {...rest}>
	{#if position === 'middle' && icon}
		{@const Icon = icon}
		<Icon class="h-5 w-5" />
	{:else}
		{@render children?.()}
	{/if}
</div>
