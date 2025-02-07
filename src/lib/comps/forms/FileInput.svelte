<script lang="ts">
	// Keep-alive constant for Tailwind purge - DO NOT REMOVE
	const _ = [
		'file-input-neutral file-input-primary file-input-secondary file-input-accent file-input-info file-input-success file-input-warning file-input-error',
		'file-input-xs file-input-sm file-input-md file-input-lg file-input-xl',
		'file-input-ghost'
	].join(' ');

	let {
		id = crypto.randomUUID(),
		label = undefined,
		labelPosition = 'after',
		color = undefined,
		size = undefined,
		ghost = false,
		disabled = false,
		accept = undefined,
		multiple = false,
		placeholder = undefined,
		class: className = '',
		onFileSelect = undefined,
		...rest
	} = $props<{
		id?: string;
		label?: string;
		labelPosition?: 'before' | 'after';
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
		ghost?: boolean;
		disabled?: boolean;
		accept?: string;
		multiple?: boolean;
		placeholder?: string;
		class?: string;
		onFileSelect?: (files: FileList | null) => void;
	}>();

	let classes = $derived(
		[
			'file-input',
			'clay', 'clay-inset-lg', 'clay-rounded-lg',
			color ? `file-input-${color}` : '',
			size ? `file-input-${size}` : '',
			ghost ? 'file-input-ghost' : '',
			className
		]
			.filter(Boolean)
			.join(' ')
	);

	function handleChange(event: Event) {
		const target = event.target as HTMLInputElement;
		onFileSelect?.(target.files);
	}
</script>

{#if label && labelPosition === 'before'}
	<label for={id} class="fieldset-label">{label}</label>
{/if}

<input
	{id}
	type="file"
	class={classes}
	{disabled}
	{accept}
	{multiple}
	{placeholder}
	onchange={handleChange}
	{...rest}
/>

{#if label && labelPosition === 'after'}
	<label for={id} class="fieldset-label">{label}</label>
{/if}
