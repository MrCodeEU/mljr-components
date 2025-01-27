<script lang="ts">
	import Search from 'lucide-svelte/icons/search';
	const _ = [
		'input-neutral input-primary input-secondary input-accent input-info input-success input-warning input-error',
		'input-xs input-sm input-md input-lg input-xl',
		'input-ghost'
	];

	let {
		label = '',
		hint = '',
		withIcon = true,
		showShortcut = false,
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
		withIcon?: boolean;
		showShortcut?: boolean;
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
		{#if withIcon}
			<label class={classes}>
				<Search class="h-4 w-4 shrink-0 opacity-50" />
				<input
					type="search"
					class="grow"
					{disabled}
					{placeholder}
					{required}
					{value}
					oninput={onInput}
					onchange={onChange}
					{...rest}
				/>
				{#if showShortcut}
					<kbd class="kbd kbd-sm">⌘</kbd>
					<kbd class="kbd kbd-sm">K</kbd>
				{/if}
			</label>
		{:else}
			<input
				type="search"
				class={classes}
				{disabled}
				{placeholder}
				{required}
				{value}
				oninput={onInput}
				onchange={onChange}
				{...rest}
			/>
		{/if}
		{#if hint}
			<p class="fieldset-label">{hint}</p>
		{/if}
	</fieldset>
{:else if withIcon}
	<label class={classes}>
		<Search class="h-4 w-4 shrink-0 opacity-50" />
		<input
			type="search"
			class="grow"
			{disabled}
			{placeholder}
			{required}
			{value}
			oninput={onInput}
			onchange={onChange}
			{...rest}
		/>
		{#if showShortcut}
			<kbd class="kbd kbd-sm">⌘</kbd>
			<kbd class="kbd kbd-sm">K</kbd>
		{/if}
	</label>
{:else}
	<input
		type="search"
		class={classes}
		{disabled}
		{placeholder}
		{required}
		{value}
		oninput={onInput}
		onchange={onChange}
		{...rest}
	/>
{/if}
