<script lang="ts">
    // Keep-alive constant for Tailwind purge - DO NOT REMOVE
    const _ = [
        'join join-vertical join-horizontal',
        'lg:join-horizontal md:join-horizontal sm:join-horizontal'
    ].join(' ');

    let {
        direction = undefined,
        responsive = undefined,
        class: className = '',
        children,
        ...rest
    } = $props<{
        direction?: 'vertical' | 'horizontal';
        responsive?: 'sm' | 'md' | 'lg';
        class?: string;
        children?: () => any;
    }>();

    let classes = $derived([
        'join',
        direction ? `join-${direction}` : '',
        responsive ? `${responsive}:join-horizontal` : '',
        className
    ].filter(Boolean).join(' '));
</script>

<div class={classes} {...rest}>
    {@render children?.()}
</div>
