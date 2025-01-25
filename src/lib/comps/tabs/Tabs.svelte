<script lang="ts">
    // Keep-alive constant for Tailwind purge - DO NOT REMOVE
    const _ = [
        'tabs-border tabs-box tabs-lift',
        'tabs-xs tabs-sm tabs-md tabs-lg tabs-xl',
        'tabs-top tabs-bottom',
        'tab tab-active tab-disabled'
    ].join(' ');

    let {
        style = undefined,
        size = undefined,
        placement = 'top',
        class: className = '',
        children,
        ...rest
    } = $props<{
        style?: 'border' | 'box' | 'lift';
        size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
        placement?: 'top' | 'bottom';
        class?: string;
        children?: () => any;
    }>();

    let classes = $derived([
        'tabs',
        style ? `tabs-${style}` : '',
        size ? `tabs-${size}` : '',
        placement !== 'top' ? `tabs-${placement}` : '',
        className
    ].filter(Boolean).join(' '));
</script>

<div role="tablist" class={classes} {...rest}>
    {@render children?.()}
</div>
