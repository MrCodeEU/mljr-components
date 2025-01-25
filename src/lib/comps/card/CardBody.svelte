<script lang="ts">
    let {
        class: className = '',
        children,
        ...rest
    } = $props<{
        class?: string;
        children?: () => any;
    }>();
</script>

<div class="card-body {className}" {...rest}>
    {@render children?.()}
</div>
