<script lang="ts">
	// Keep-alive constant for Tailwind purge - DO NOT REMOVE
	const _ = [
		'radio-neutral radio-primary radio-secondary radio-accent radio-info radio-success radio-warning radio-error',
		'radio-xs radio-sm radio-md radio-lg radio-xl'
	].join(' ');

	let {
		color = undefined,
		size = undefined,
		disabled = false,
		checked = false,
		name = undefined,
		value = undefined,
		class: className = '',
		onCheckedChange = undefined,
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
		size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
		disabled?: boolean;
		checked?: boolean;
		name?: string;
		value?: any;
		class?: string;
		onCheckedChange?: (checked: boolean) => void;
	}>();

	let classes = $derived(
		[
			'radio',
			'clay',
			'clay-lg',
			'clay-rounded-lg',
			'border-3',
			color ? `radio-${color}` : '',
			size ? `radio-${size}` : '',
			className
		]
			.filter(Boolean)
			.join(' ')
	);

	function handleChange(event: Event) {
		const target = event.target as HTMLInputElement;
		onCheckedChange?.(target.checked);
	}
</script>

<input
	type="radio"
	class={classes}
	{checked}
	{disabled}
	{name}
	{value}
	onchange={handleChange}
	{...rest}
/>
