<script lang="ts">
    const _ = [
        'input-neutral input-primary input-secondary input-accent input-info input-success input-warning input-error',
        'input-xs input-sm input-md input-lg input-xl',
        'input-ghost'];

    let {
        label = '',
        hint = '',
        min = undefined,
        max = undefined,
        step = undefined,
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
        min?: number;
        max?: number;
        step?: number;
        color?: 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error';
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

    let classes = $derived([
        'input',
        'tabular-nums',
        color ? `input-${color}` : '',
        size ? `input-${size}` : '',
        ghost ? 'input-ghost' : '',
        (min !== undefined || max !== undefined) ? 'validator' : '',
        className
    ].filter(Boolean).join(' '));

    function handleInput(e: Event) {
        const input = e.target as HTMLInputElement;

        

        
        // Validate against min/max
        const num = Number(input.value);
        if (!isNaN(num)) {
            if (min !== undefined && num < min) input.value = String(min);
            if (max !== undefined && num > max) input.value = String(max);
        }

        onInput?.(e);
    }
</script>

{#if label || hint}
    <fieldset class="fieldset">
        {#if label}
            <legend class="fieldset-legend">{label}</legend>
        {/if}
        <input
            type="number"
            class={classes}
            {min}
            {max}
            {step}
            {disabled}
            {placeholder}
            {required}
            {value}
            oninput={handleInput}
            onchange={onChange}
            {...rest}
        />
        {#if hint || (min !== undefined || max !== undefined)}
            <p class="fieldset-label">
                {hint || ''}
                {#if min !== undefined || max !== undefined}
                    {#if hint} • {/if}
                    {#if min !== undefined && max !== undefined}
                        Must be between {min} and {max}
                    {:else if min !== undefined}
                        Must be at least {min}
                    {:else if max !== undefined}
                        Must be at most {max}
                    {/if}
                {/if}
            </p>
        {/if}
    </fieldset>
{:else}
    <input
        type="number"
        class={classes}
        {min}
        {max}
        {step}
        {disabled}
        {placeholder}
        {required}
        {value}
        oninput={handleInput}
        onchange={onChange}
        {...rest}
    />
{/if}
