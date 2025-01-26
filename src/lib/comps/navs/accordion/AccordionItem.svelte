<script lang="ts">
    const _ = ['collapse-arrow', 'collapse-plus', 'collapse-open', 'collapse-close'].join(' ');

    let {
        name,
        value,
        checked = false,
        variant,
        title,
        class: className = '',
        children,
        ...rest
    } = $props<{
        name: string;
        value?: string;
        checked?: boolean;
        variant?: 'arrow' | 'plus';
        title: string;
        class?: string;
        children?: () => any;
    }>();

    let classes = $derived([
        'collapse',
        variant ? `collapse-${variant}` : '',
        'bg-base-100 border border-base-300',
        className
    ].filter(Boolean).join(' '));
</script>

<div class={classes} {...rest}>
    <input 
        type="radio" 
        {name} 
        value={value ?? title} 
        {checked}
    />
    <div class="collapse-title font-semibold">{title}</div>
    <div class="collapse-content text-sm">
        {@render children?.()}
    </div>
</div>
