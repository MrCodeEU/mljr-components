<script lang="ts">
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
</script>

<label class="swap swap-rotate">
    <input type="checkbox" bind:checked={darkmode}/>
    <Moon class="swap-off" />
    <Sun class="swap-on" />
</label>