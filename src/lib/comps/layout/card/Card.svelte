<script lang="ts">
	// Keep-alive constant for Tailwind purge - DO NOT REMOVE
	const _ = [
		'card card-border card-dash',
		'card-xs card-sm card-md card-lg card-xl',
		'card-side image-full',
		'card-title card-body card-actions'
	].join(' ');

	let {
		style = undefined,
		size = undefined,
		modifier = undefined,
		class: className = '',
		background = 'bg-base-100',
		shadowSize = 'lg',
		children,
		...rest
	} = $props<{
		style?: 'border' | 'dash';
		size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
		modifier?: 'side' | 'image-full';
		class?: string;
		background?: string;
		shadowSize?: 'sm' | 'md' | 'lg';
		children?: () => any;
	}>();

	let classes = $derived(
		[
			'card',
			'clay',
			'clay-card',
			'clay-rounded-lg',
			`clay-${shadowSize}`, // Fixed string interpolation
			background,
			style ? `card-${style}` : '',
			size ? `card-${size}` : '',
			modifier ? `card-${modifier}` : '',
			className
		]
			.filter(Boolean)
			.join(' ')
	);
</script>

<div class={classes} {...rest}>
	{@render children?.()}
</div>
