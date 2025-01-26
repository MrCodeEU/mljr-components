<script lang="ts">
    let {
        id = crypto.randomUUID(),
        end = false,
        responsive = false,
        open = $bindable(false),
        class: className = '',
        children,
        ...rest
    } = $props<{
        id?: string;
        end?: boolean;
        responsive?: boolean;
        open?: boolean;
        class?: string;
        children?: () => any;
    }>();

    let classes = $derived([
        'drawer',
        end ? 'drawer-end' : '',
        responsive ? 'lg:drawer-open' : '',
        className
    ].filter(Boolean).join(' '));
</script>

<div class={classes} {...rest}>
    <input id={id} type="checkbox" class="drawer-toggle" bind:checked={open} />
    {@render children?.()}
</div>
