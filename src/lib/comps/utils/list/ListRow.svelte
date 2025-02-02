<script lang="ts">
    let {
        class: className = '',
        header = false,
        children,
        ...rest
    } = $props<{
        class?: string;
        header?: boolean;
        children?: () => any;
    }>();

    let classes = $derived([
        header ? 'p-4 pb-2 text-xs opacity-60 tracking-wide' : 'list-row',
        className
    ].join(' '));
</script>

<li class={classes} {...rest}>
    {@render children?.()}
</li>
