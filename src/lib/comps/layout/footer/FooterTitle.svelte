<script lang="ts">
    let {
        class: className = '',
        children,
        ...rest
    } = $props<{
        class?: string;
        children?: () => any;
    }>();

    let classes = $derived(['footer-title', className].filter(Boolean).join(' '));
</script>

<h6 class={classes} {...rest}>
    {@render children?.()}
</h6>
