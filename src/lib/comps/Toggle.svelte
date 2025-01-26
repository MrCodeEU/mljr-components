<script lang="ts">
    import Check from 'lucide-svelte/icons/check';
    import X from 'lucide-svelte/icons/x';
    import type { Icon as IconType } from "lucide-svelte";

    // Keep-alive constant for Tailwind purge - DO NOT REMOVE
    const _ = [
        'toggle-neutral toggle-primary toggle-secondary toggle-accent toggle-info toggle-success toggle-warning toggle-error',
        'toggle-xs toggle-sm toggle-md toggle-lg toggle-xl'
    ].join(' ');

    let {
        checked = $bindable(false),
        color = undefined,
        size = undefined,
        disabled = false,
        indeterminate = false,
        showIcons = false,
        iconOn = Check,
        iconOff = X,
        class: className = '',
        ...rest
    } = $props<{
        checked?: boolean;
        color?: 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error';
        size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
        disabled?: boolean;
        indeterminate?: boolean;
        showIcons?: boolean;
        iconOn?: typeof IconType;
        iconOff?: typeof IconType;
        class?: string;
    }>();

    let classes = $derived([
        'toggle',
        color ? `toggle-${color}` : '',
        size ? `toggle-${size}` : '',
        className
    ].filter(Boolean).join(' '));

    let containerClasses = $derived([
        'toggle',
        'text-base-content',
        disabled ? 'cursor-not-allowed opacity-50' : '',
        className
    ].filter(Boolean).join(' '));

    $effect(() => {
        if (indeterminate && rest.ref) {
            rest.ref.indeterminate = true;
        }
    });
</script>

{#if showIcons}
    <label class={containerClasses}>
        <input
            type="checkbox"
            bind:checked
            {disabled}
            {...rest}
        />
        {#if iconOn}
            {@const IconOn = iconOn}
            <IconOn aria-label="enabled" class="h-4 w-4 shrink-0" />
        {/if}
        {#if iconOff}
            {@const IconOff = iconOff}
            <IconOff aria-label="disabled" class="h-4 w-4 shrink-0" />
        {/if}
    </label>
{:else}
    <input
        type="checkbox"
        class={classes}
        bind:checked
        {disabled}
        {...rest}
    />
{/if}
