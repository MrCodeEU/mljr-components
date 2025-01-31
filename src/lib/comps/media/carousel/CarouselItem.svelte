<script lang="ts">
    let {
        width = undefined,
        height = undefined,
        id = undefined,
        relative = false,
        class: className = '',
        children,
        ...rest
    } = $props<{
        width?: 'full' | '1/2';
        height?: 'full';
        id?: string;
        relative?: boolean;
        class?: string;
        children?: () => any;
    }>();

    let classes = $derived([
        'carousel-item',
        width && `w-${width}`,
        height && `h-${height}`,
        relative && 'relative',
        className
    ].filter(Boolean).join(' '));
</script>

<div 
    class={classes} 
    data-carousel-item
    {...rest}
>
    {@render children?.()}
</div>
