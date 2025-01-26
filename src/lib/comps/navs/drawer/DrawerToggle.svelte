<script lang="ts">
    let {
        drawerId,
        hideOnLarge = false,
        class: className = '',
        children,
        ...rest
    } = $props<{
        drawerId: string;
        hideOnLarge?: boolean;
        class?: string;
        children?: () => any;
    }>();

    let classes = $derived([
        'drawer-button',
        hideOnLarge ? 'lg:hidden' : '',
        className
    ].filter(Boolean).join(' '));
</script>

<label for={drawerId} class={classes} {...rest}>
    {@render children?.()}
</label>
