<script lang="ts">
    // Keep-alive constant for Tailwind purge - DO NOT REMOVE
    const _ = [
        'rating-xs rating-sm rating-md rating-lg rating-xl',
        'rating-hidden rating-half',
        'mask-star mask-star-2 mask-heart',
        'mask-half-1 mask-half-2',
        'bg-orange-400 bg-green-500 bg-red-400 bg-yellow-400 bg-lime-400'
    ].join(' ');

    let {
        size = undefined,
        value = 0,
        max = 5,
        name = crypto.randomUUID(),
        shape = 'star',
        color = undefined,
        colors = undefined,
        allowHalf = false,
        allowClear = false,
        readonly = false,
        class: className = '',
        onValueChange = undefined,
        ...rest
    } = $props<{
        size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
        value?: number;
        max?: number;
        name?: string;
        shape?: 'star' | 'star-2' | 'heart';
        color?: string;
        colors?: string[];
        allowHalf?: boolean;
        allowClear?: boolean;
        readonly?: boolean;
        class?: string;
        onValueChange?: (value: number) => void;
    }>();

    let classes = $derived([
        'rating',
        size ? `rating-${size}` : '',
        allowHalf ? 'rating-half' : '',
        className
    ].filter(Boolean).join(' '));

    function handleChange(event: Event) {
        const target = event.target as HTMLInputElement;
        const newValue = parseFloat(target.value);
        onValueChange?.(newValue);
    }

    const items = $derived.by(() => {
        const total = allowHalf ? max * 2 : max;
        return Array.from({ length: total }, (_, i) => {
            const itemValue = allowHalf ? (i + 1) / 2 : i + 1;
            const isHalf = allowHalf && (i % 2 === 0 ? 1 : 2);
            return { value: itemValue, isHalf };
        });
    });
</script>

{#if readonly}
    <div class={classes} {...rest}>
        {#each items as item}
            <div 
                class="mask mask-{shape} {item.isHalf ? `mask-half-${item.isHalf}` : ''} {colors?.[Math.floor(item.value - 1)] || color || ''}"
                aria-label={`${item.value} ${item.value === 1 ? 'star' : 'stars'}`}
                aria-current={value === item.value}
            ></div>
        {/each}
    </div>
{:else}
    <div class={classes} {...rest}>
        {#if allowClear}
            <input 
                type="radio" 
                name={name} 
                class="rating-hidden" 
                value="0"
                checked={value === 0}
                onchange={handleChange}
                aria-label="clear"
            />
        {/if}
        {#each items as item}
            <input 
                type="radio" 
                name={name} 
                class="mask mask-{shape} {item.isHalf ? `mask-half-${item.isHalf}` : ''} {colors?.[Math.floor(item.value - 1)] || color || ''}"
                value={item.value}
                checked={value === item.value}
                onchange={handleChange}
                aria-label={`${item.value} ${item.value === 1 ? 'star' : 'stars'}`}
            />
        {/each}
    </div>
{/if}
