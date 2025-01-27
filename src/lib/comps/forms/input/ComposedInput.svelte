<script lang="ts">
	import type { Icon as IconType } from 'lucide-svelte';
	const _ = [
		'input-neutral input-primary input-secondary input-accent input-info input-success input-warning input-error',
		'input-xs input-sm input-md input-lg input-xl',
		'input-ghost'
	];

	let {
		label = '',
		hint = '',
		badge = '',
		icon = undefined,
		type = 'text',
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
		badge?: string;
		icon?: typeof IconType; // Changed type to typeof IconType
		type?: string;
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
		// HTML input element props that might be passed through
		min?: string | number;
		max?: string | number;
		step?: number;
		pattern?: string;
		maxLength?: number;
		minLength?: number;
	}>();

	let classes = $derived(
		[
			'input',
			'validator',
			color ? `input-${color}` : '',
			size ? `input-${size}` : '',
			ghost ? 'input-ghost' : '',
			className
		]
			.filter(Boolean)
			.join(' ')
	);

	let inputClasses = $derived(['grow', className].filter(Boolean).join(' '));
</script>

<fieldset class="fieldset">
	{#if label}
		<legend class="fieldset-legend">{label}</legend>
	{/if}
	<label class={classes}>
		{#if icon}
			{@const Icon = icon}
			<Icon class="h-4 w-4 shrink-0 opacity-50" />
		{/if}
		<input
			{type}
			class={inputClasses}
			{disabled}
			{placeholder}
			{required}
			{value}
			oninput={onInput}
			onchange={onChange}
			{...rest}
		/>
		{#if badge}
			<span class="badge badge-neutral badge-xs">{badge}</span>
		{/if}
	</label>
	{#if hint}
		<p class="fieldset-label">{hint}</p>
	{/if}
</fieldset>
