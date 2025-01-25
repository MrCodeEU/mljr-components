<script lang="ts">
    import ThemeToggle from '$lib/comps/ThemeToggle.svelte';
    import Button from '$lib/comps/Button.svelte';
    import Heart from 'lucide-svelte/icons/heart';
</script>

<main class="p-4 space-y-8">
    <div class="flex justify-between items-center">
        <h1 class="text-2xl font-bold">Components</h1>
        <ThemeToggle />
    </div>

    <section class="space-y-4">
        <h2 class="text-xl font-semibold">Buttons</h2>

        <div class="space-y-4">
            <div class="flex flex-wrap gap-2">
                <Button>Default</Button>
                <Button color="neutral">Neutral</Button>
                <Button color="primary">Primary</Button>
                <Button color="secondary">Secondary</Button>
                <Button color="accent">Accent</Button>
                <Button color="info">Info</Button>
                <Button color="success">Success</Button>
                <Button color="warning">Warning</Button>
                <Button color="error">Error</Button>
            </div>

            <div class="flex flex-wrap gap-2">
                <Button style="outline">Outline</Button>
                <Button style="soft">Soft</Button>
                <Button style="ghost">Ghost</Button>
                <Button style="link">Link</Button>
            </div>

            <div class="flex flex-wrap gap-2 items-center">
                <Button size="xs">Extra Small</Button>
                <Button size="sm">Small</Button>
                <Button>Normal</Button>
                <Button size="lg">Large</Button>
                <Button size="xl">Extra Large</Button>
            </div>

            <div class="flex flex-wrap gap-2">
                <Button modifier="wide">Wide</Button>
                <Button modifier="square"><Heart /></Button>
                <Button modifier="circle"><Heart /></Button>
                <Button loading>Loading</Button>
                <Button disabled>Disabled</Button>
            </div>

            <div>
                <Button modifier="block">Block</Button>
            </div>

            <div class="flex flex-wrap gap-2">
                <Button onclick={(e) => {/* handle click */}}>
                    <Heart />
                    With Icon
                </Button>
                <Button color="primary" style="outline">
                    With Icon
                    <Heart />
                </Button>
            </div>
        </div>
    </section>
</main>