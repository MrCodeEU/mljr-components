<script lang="ts">
	// Keep-alive constant for Tailwind purge - DO NOT REMOVE
	const _ = [
		'text-primary text-secondary text-accent text-neutral text-info text-success text-warning text-error'
	].join(' ');

	let {
		value = 0,
		color = undefined,
		size = undefined,
		thickness = undefined,
		background = false,
		border = false,
		class: className = '',
		children,
		...rest
	} = $props<{
		value: number;
		color?:
			| 'primary'
			| 'secondary'
			| 'accent'
			| 'neutral'
			| 'info'
			| 'success'
			| 'warning'
			| 'error';
		size?: string;
		thickness?: string;
		background?: boolean;
		border?: boolean;
		class?: string;
		children?: () => any;
	}>();

	let classes = $derived(
		[
			'radial-progress',
			'clay',
			'rounded-full',
			'clay-lg',
			color ? `text-${color}` : '',
			background && color ? `bg-${color}` : '',
			background && color ? `text-${color}-content` : '',
			border && color ? `border-${color} border-4` : '',
			className
		]
			.filter(Boolean)
			.join(' ')
	);

	let style = $derived(
		[`--value:${value}`, size ? `--size:${size}` : '', thickness ? `--thickness:${thickness}` : '']
			.filter(Boolean)
			.join(';')
	);
</script>

<div class={classes} {style} role="progressbar" aria-valuenow={value} {...rest}>
	{value}%
</div>
