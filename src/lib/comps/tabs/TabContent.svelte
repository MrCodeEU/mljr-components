<script lang="ts">
    let {
        class: className = '',
        children,
        ...rest
    } = $props<{
        class?: string;
        children?: () => any;
    }>();

    let classes = $derived([
        'tab-content',
        'bg-base-100',
        'border-base-300',
        'p-6',
        className
    ].filter(Boolean).join(' '));
</script>

<div class={classes} {...rest}>
    {@render children?.()}
</div>
