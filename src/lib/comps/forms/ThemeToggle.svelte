<script lang="ts">
    import Toggle from '$lib/comps/forms/Toggle.svelte';
    import Sun from 'lucide-svelte/icons/sun';
    import Moon from 'lucide-svelte/icons/moon';
    
    let darkmode = $state(true);
    
    $effect(() => {
        if (darkmode) {
            document.querySelector('html')?.setAttribute('data-theme', 'dark');
        } else {
            document.querySelector('html')?.setAttribute('data-theme', 'light');
        }
    });

    let {
        type = 'toggle'
    } = $props<{
        type?: 'toggle' | 'swap';
    }>();


</script>

{#if type == 'toggle'}
<Toggle
    bind:checked={darkmode}
    showIcons
    iconOn={Sun}
    iconOff={Moon}
    color="warning"
    size="xl"
/>
{:else if type == 'swap'}
<label class="swap swap-rotate">
    <input type="checkbox" bind:checked={darkmode}/>
    <Moon class="swap-off" />
    <Sun class="swap-on" />
</label>
{/if}