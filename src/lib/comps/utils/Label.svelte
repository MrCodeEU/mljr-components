<script lang="ts">
    let {
        text = '',
        position = 'start',
        class: className = '',
        children,
        ...rest
    } = $props<{
        text: string;
        position?: 'start' | 'end';
        class?: string;
        children?: () => any;
    }>();

    // Force all child inputs to use borderless style
    const inputClasses = 'focus:outline-none border-none';
</script>

<label class="input {className}" {...rest}>
    {#if position === 'start'}
        <span class="label">{text}</span>
    {/if}
    <div class="[&>:is(input,select)]:focus:outline-none [&>:is(input,select)]:border-none">
        {@render children?.()}
    </div>
    {#if position === 'end'}
        <span class="label">{text}</span>
    {/if}
</label>
