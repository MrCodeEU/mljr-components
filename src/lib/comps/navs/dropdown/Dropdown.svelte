<script lang="ts">
    // Keep-alive constant for Tailwind purge - DO NOT REMOVE
    const _ = [
        'dropdown-start dropdown-end dropdown-center',
        'dropdown-top dropdown-bottom',
        'dropdown-left dropdown-right',
        'dropdown-hover dropdown-open'
    ].join(' ');

    let {
        method = 'focus',
        align = undefined,
        position = undefined,
        hover = false,
        open = false,
        class: className = '',
        children,
        ...rest
    } = $props<{
        method?: 'details' | 'popover' | 'focus';
        align?: 'start' | 'end' | 'center';
        position?: 'top' | 'bottom' | 'left' | 'right';
        hover?: boolean;
        open?: boolean;
        class?: string;
        children?: () => any;
    }>();

    let classes = $derived([
        'dropdown',
        align ? `dropdown-${align}` : '',
        position ? `dropdown-${position}` : '',
        hover ? 'dropdown-hover' : '',
        open ? 'dropdown-open' : '',
        className
    ].filter(Boolean).join(' '));
</script>

{#if method === 'details'}
    <details class={classes} {...rest}>
        {@render children?.()}
    </details>
{:else if method === 'popover'}
    <div class={classes} {...rest}>
        {@render children?.()}
    </div>
{:else}
    <div class={classes} {...rest}>
        {@render children?.()}
    </div>
{/if}
