<script lang="ts">
    interface CodeLine {
        prefix?: string;
        content: string;
        className?: string;
    }

    let {
        lines = [],
        className = '',
        ...rest
    } = $props<{
        lines: CodeLine[];
        className?: string;
    }>();
</script>

<div class="mockup-code w-full {className}" {...rest}>
    {#each lines as line}
        <pre
            class={line.className || ''}
            data-prefix={line.prefix || ''}
        ><code>{line.content}</code></pre>
    {/each}
</div>
