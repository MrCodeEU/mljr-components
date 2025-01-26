<script lang="ts">
    let {
        joined = false,
        class: className = '',
        children,
        ...rest
    } = $props<{
        joined?: boolean;
        class?: string;
        children?: () => any;
    }>();

    let classes = $derived([
        joined ? 'join join-vertical' : '',
        'w-full',
        className
    ].filter(Boolean).join(' '));
</script>

<div class={classes} {...rest}>
    {@render children?.()}
</div>
