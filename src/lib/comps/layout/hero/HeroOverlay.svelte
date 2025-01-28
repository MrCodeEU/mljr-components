<script lang="ts">
    let { class: className = '', children, ...rest } = $props<{
        class?: string;
    }>();

    let classes = $derived(['hero-overlay', className].filter(Boolean).join(' '));
</script>

<div class={classes} {...rest}>
    {@render children?.()}
</div>