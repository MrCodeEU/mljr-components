<script lang="ts">
	// Keep-alive constant for Tailwind purge - DO NOT REMOVE
	const _ = [
		'textarea-neutral textarea-primary textarea-secondary textarea-accent textarea-info textarea-success textarea-warning textarea-error',
		'textarea-xs textarea-sm textarea-md textarea-lg textarea-xl',
		'textarea-ghost'
	].join(' ');

	let {
		value = $bindable(''),
		color = undefined,
		size = undefined,
		ghost = false,
		placeholder = '',
		disabled = false,
		rows = undefined,
		class: className = '',
		...rest
	} = $props<{
		value?: string;
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
		placeholder?: string;
		disabled?: boolean;
		rows?: number;
		class?: string;
	}>();

	let classes = $derived(
		[
			'textarea',
			'clay',
			'clay-inset-sm',
			'clay-rounded-lg',
			'border-3',
			color ? `textarea-${color}` : '',
			size ? `textarea-${size}` : '',
			ghost ? 'textarea-ghost' : '',
			className
		]
			.filter(Boolean)
			.join(' ')
	);
</script>

<textarea class={classes} {placeholder} {disabled} {rows} bind:value {...rest}></textarea>
