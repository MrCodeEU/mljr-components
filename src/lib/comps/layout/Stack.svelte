<script lang="ts">
    // Keep-alive constant for Tailwind purge - DO NOT REMOVE
    const _ = [
        'stack',
        'stack-top stack-bottom stack-start stack-end'
    ].join(' ');

    let {
        align = 'bottom',
        class: className = '',
        children,
        ...rest
    } = $props<{
        align?: 'top' | 'bottom' | 'start' | 'end';
        class?: string;
        children?: () => any;
    }>();

    let classes = $derived([
        'stack',
        align !== 'bottom' ? `stack-${align}` : '',
        className
    ].filter(Boolean).join(' '));
</script>

<div class={classes} {...rest}>
    {@render children?.()}
</div>
