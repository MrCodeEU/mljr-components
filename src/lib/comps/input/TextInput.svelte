<script lang="ts">
    const _ = [
        'input-neutral input-primary input-secondary input-accent input-info input-success input-warning input-error',
        'input-xs input-sm input-md input-lg input-xl',
        'input-ghost'];

    let {
        color = undefined,
        size = undefined,
        ghost = false,
        disabled = false,
        class: className = '',
        placeholder = '',
        value = '',
        required = false,
        maxLength = undefined,
        minLength = undefined,
        pattern = undefined,
        onInput = undefined,
        onChange = undefined,
        ...rest
    } = $props<{
        color?: 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error';
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

    let classes = $derived([
        'input',
        color ? `input-${color}` : '',
        size ? `input-${size}` : '',
        ghost ? 'input-ghost' : '',
        className
    ].filter(Boolean).join(' '));
</script>

<input
    type="text"
    class={classes}
    {disabled}
    {placeholder}
    {required}
    {value}
    {maxLength}
    {minLength}
    {pattern}
    oninput={onInput}
    onchange={onChange}
    {...rest}
/>
