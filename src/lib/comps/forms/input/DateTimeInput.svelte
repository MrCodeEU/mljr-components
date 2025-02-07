<script lang="ts">
	const _ = [
		'input-neutral input-primary input-secondary input-accent input-info input-success input-warning input-error',
		'input-xs input-sm input-md input-lg input-xl',
		'input-ghost'
	];

	let {
		label = '',
		hint = '',
		type = 'date',
		min = undefined,
		max = undefined,
		color = undefined,
		size = undefined,
		ghost = false,
		disabled = false,
		class: className = '',
		placeholder = '',
		value = '',
		required = false,
		onInput = undefined,
		onChange = undefined,
		...rest
	} = $props<{
		label?: string;
		hint?: string;
		type?: 'date' | 'time' | 'datetime-local' | 'week' | 'month';
		min?: string;
		max?: string;
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
			{type}
			class={classes}
			{min}
			{max}
			{disabled}
			{placeholder}
			{required}
			{value}
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
		{type}
		class={classes}
		{min}
		{max}
		{disabled}
		{placeholder}
		{required}
		{value}
		oninput={onInput}
		onchange={onChange}
		{...rest}
	/>
{/if}
