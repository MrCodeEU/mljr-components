<script lang="ts">
	// Keep-alive constant for Tailwind purge - DO NOT REMOVE
	const _ = [
		'btn-neutral btn-primary btn-secondary btn-accent btn-info btn-success btn-warning btn-error',
		'btn-outline btn-soft btn-ghost btn-link',
		'btn-xs btn-sm btn-md btn-lg btn-xl',
		'btn-wide btn-block btn-square btn-circle',
		'btn-active btn-disabled'
	].join(' ');

	let {
		color = undefined,
		style = undefined,
		size = undefined,
		shadowSize = 'lg',
		modifier = undefined,
		active = false,
		disabled = false,
		loading = false,
		type = 'button' as 'button' | 'submit' | 'reset' | undefined,
		class: className = '',
		onclick = undefined,
		children,
		...rest
	} = $props<{
		color?:
			| 'neutral'
			| 'primary'
			| 'secondary'
			| 'accent'
			| 'info'
			| 'success'
			| 'warning'
			| 'error';
		style?: 'outline' | 'soft' | 'ghost' | 'link' | 'dash';
		size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
		modifier?: 'wide' | 'block' | 'square' | 'circle';
		shadowSize?: 'sm' | 'md' | 'lg';
		active?: boolean;
		disabled?: boolean;
		loading?: boolean;
		type?: 'button' | 'submit' | 'reset';
		class?: string;
		onclick?: (e: MouseEvent) => void;
		children?: () => any;
	}>();

	let classes = $derived(
		[
			'btn',
			'clay',
			modifier !== 'square' ? 'clay-rounded-lg' : '',
			`clay-${shadowSize}`,
			color ? `btn-${color}` : '',
			style ? `btn-${style}` : '',
			style === 'link' ? 'text-gray-500' : '',
			size ? `btn-${size}` : '',
			modifier ? `btn-${modifier}` : '',
			active ? 'btn-active' : '',
			disabled ? 'btn-disabled' : '',
			className
		]
			.filter(Boolean)
			.join(' ')
	);
</script>

<button {type} class={classes} {disabled} {onclick} {...rest}>
	{#if loading}
		<span class="loading loading-spinner"></span>
	{/if}
	{@render children?.()}
</button>
