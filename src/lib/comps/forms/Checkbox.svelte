<script lang="ts">
	// Keep-alive constant for Tailwind purge - DO NOT REMOVE
	const _ = [
		'checkbox-neutral checkbox-primary checkbox-secondary checkbox-accent checkbox-info checkbox-success checkbox-warning checkbox-error',
		'checkbox-xs checkbox-sm checkbox-md checkbox-lg checkbox-xl'
	].join(' ');

	let {
		color = undefined,
		size = undefined,
		disabled = false,
		shadowSize = 'lg',
		checked = false,
		indeterminate = false,
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
		shadowSize?: 'sm' | 'md' | 'lg';
		disabled?: boolean;
		checked?: boolean;
		indeterminate?: boolean;
		value?: any;
		class?: string;
		onCheckedChange?: (checked: boolean) => void;
	}>();

	let classes = $derived(
		[
			'clay',
			`clay-${shadowSize}`,
			'!border-2',
			'clay-rounded-sm',
			disabled === true ? 'bg-gray-400' : '',
			'checkbox',
			color ? `checkbox-${color}` : '',
			size ? `checkbox-${size}` : '',
			className
		]
			.filter(Boolean)
			.join(' ')
	);

	let checkboxElement: HTMLInputElement;

	$effect(() => {
		if (checkboxElement) {
			checkboxElement.indeterminate = indeterminate;
		}
	});

	function handleChange(event: Event) {
		const target = event.target as HTMLInputElement;
		onCheckedChange?.(target.checked);
	}
</script>

<input
	type="checkbox"
	bind:this={checkboxElement}
	class={classes}
	{checked}
	{disabled}
	{value}
	onchange={handleChange}
	{...rest}
/>
