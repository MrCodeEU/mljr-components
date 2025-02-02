<script lang="ts">
    let {
        text = '',
        class: className = '',
        children,
        ...rest
    } = $props<{
        text: string;
        class?: string;
        children?: () => any;
    }>();
</script>

<label class="floating-label {className}" {...rest}>
    <div class="[&>:is(input,select)]:focus:outline-none [&>:is(input,select)]:border-none">
        {@render children?.()}
    </div>
    <span>{text}</span>
</label>
