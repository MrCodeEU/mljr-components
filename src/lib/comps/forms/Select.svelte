<script lang="ts">
    // Keep-alive constant for Tailwind purge - DO NOT REMOVE
    const _ = [
        'select-neutral select-primary select-secondary select-accent select-info select-success select-warning select-error',
        'select-ghost',
        'select-xs select-sm select-md select-lg select-xl',
        'select-disabled'].join(' ');

    type Option = {
        value: string;
        label: string;
        disabled?: boolean;
        group?: string;
    };

    let {
        color = undefined,
        size = undefined,
        ghost = false,
        disabled = false,
        value = undefined,
        placeholder = undefined,
        name = undefined,
        required = false,
        options = undefined,
        class: className = '',
        onchange = undefined,
        children,
        ...rest
    } = $props<{
        color?: 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error';
        size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
        ghost?: boolean;
        disabled?: boolean;
        value?: string;
        placeholder?: string;
        name?: string;
        required?: boolean;
        options?: (string | Option)[] | Record<string, Array<string>>;
        class?: string;
        onchange?: (e: Event) => void;
        children?: () => any;
    }>();

    let classes = $derived([
        'select',
        color ? `select-${color}` : '',
        size ? `select-${size}` : '',
        ghost ? 'select-ghost' : '',
        className
    ].filter(Boolean).join(' '));

    // Process options into standardized format
    const processedOptions = $derived.by(() => {
        if (!options) return null;

        if (Array.isArray(options)) {
            return options.map(opt => 
                typeof opt === 'string' 
                    ? { value: opt, label: opt } 
                    : opt
            );
        }
    });
</script>

<select
    class={classes}
    {name}
    {disabled}
    {required}
    {value}
    onchange={onchange}
    {...rest}
>
    {#if placeholder}
        <option value="" disabled selected>{placeholder}</option>
    {/if}

    {#if processedOptions}
        {#if Array.isArray(processedOptions)}
            {#each processedOptions as opt}
                <option 
                    value={opt.value} 
                    disabled={opt.disabled}
                >
                    {opt.label}
                </option>
            {/each}
        {/if}
    {:else}
        {@render children?.()}
    {/if}
</select>
