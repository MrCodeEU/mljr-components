<script lang="ts">
    // Keep-alive constant for Tailwind purge - DO NOT REMOVE
    const _ = [
        'swap swap-active',
        'swap-rotate swap-flip',
        'swap-on swap-off swap-indeterminate'
    ].join(' ');

    let {
        style = undefined,
        active = false,
        class: className = '',
        indeterminate = undefined,
        on,
        off,
        children,
        ...rest
    } = $props<{
        style?: 'rotate' | 'flip';
        active?: boolean;
        class?: string;
        indeterminate?: () => any;
        on?: () => any;
        off?: () => any;
        children?: () => any;
    }>();

    let classes = $derived([
        'swap',
        active && 'swap-active',
        style && `swap-${style}`,
        className
    ].filter(Boolean).join(' '));
</script>

<label class={classes} {...rest}>
    {#if !indeterminate}
        <input type="checkbox" bind:checked={active} />
    {/if}
    
    {#if on}
        <div class="swap-on">
            {@render on()}
        </div>
    {/if}

    {#if off}
        <div class="swap-off">
            {@render off()}
        </div>
    {/if}

    {#if indeterminate}
        <div class="swap-indeterminate">
            {@render indeterminate()}
        </div>
    {/if}

    {@render children?.()}
</label>
