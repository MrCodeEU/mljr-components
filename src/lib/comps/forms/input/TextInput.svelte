<script lang="ts">
	const _ = [
		'input-neutral input-primary input-secondary input-accent input-info input-success input-warning input-error',
		'input-xs input-sm input-md input-lg input-xl',
		'input-ghost'
	];

	let {
		label = '',
		hint = '',
		color = undefined,
		size = undefined,
		ghost = false,
		disabled = false,
		class: className = '',
		placeholder = '',
		value = $bindable(""),
		required = false,
		maxLength = undefined,
		minLength = undefined,
		pattern = undefined,
		onInput = undefined,
		onChange = undefined,
		...rest
	} = $props<{
		label?: string;
		hint?: string;
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
		class?: string;
		placeholder?: string;
		value?: string;
		required?: boolean;
		maxLength?: number;
		minLength?: number;
		pattern?: string;
		onInput?: (e: Event) => void;
		onChange?: (e: Event) => void;
	}>();

	let classes = $derived(
		[
			'input',
			'clay', 'clay-inset-lg', 'clay-rounded-lg',
			color ? `input-${color}` : '',
			size ? `input-${size}` : '',
			ghost ? 'input-ghost' : '',
			className
		]
			.filter(Boolean)
			.join(' ')
	);
</script>

{#if label || hint}
	<fieldset class="fieldset">
		{#if label}
			<legend class="fieldset-legend">{label}</legend>
		{/if}
		<input
			type="text"
			class={classes}
			{disabled}
			{placeholder}
			{required}
			bind:value={value}
			{maxLength}
			{minLength}
			{pattern}
			oninput={onInput}
			onchange={onChange}
			{...rest}
		/>
		{#if hint}
			<p class="fieldset-label">{hint}</p>
		{/if}
	</fieldset>
{:else}
	<input
		type="text"
		class={classes}
		{disabled}
		{placeholder}
		{required}
		bind:value={value}
		{maxLength}
		{minLength}
		{pattern}
		oninput={onInput}
		onchange={onChange}
		{...rest}
	/>
{/if}
