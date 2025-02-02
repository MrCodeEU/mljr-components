<script lang="ts">
    let {
        grow = false,
        wrap = false,
        class: className = '',
        children,
        ...rest
    } = $props<{
        grow?: boolean;
        wrap?: boolean;
        class?: string;
        children?: () => any;
    }>();

    let classes = $derived([
        grow ? 'list-col-grow' : '',
        wrap ? 'list-col-wrap' : '',
        className
    ].filter(Boolean).join(' '));
</script>

<div class={classes} {...rest}>
    {@render children?.()}
</div>
