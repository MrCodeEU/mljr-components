<script lang="ts">
    import Button from '$lib/comps/Button.svelte';
    import { Card, CardBody, CardTitle } from '$lib/comps/card/index.js';
</script>

<div class="space-y-4">
    <!-- Button Showcase -->
    <Card>
        <CardBody>
            <CardTitle>Button Components</CardTitle>
            <div class="space-y-8">
                <!-- Colors -->
                <div>
                    <h3 class="font-semibold mb-2">Colors</h3>
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
                </div>

                <!-- Styles -->
                <div>
                    <h3 class="font-semibold mb-2">Styles</h3>
                    <div class="flex flex-wrap gap-2">
                        <Button color="primary">Solid</Button>
                        <Button color="primary" style="outline">Outline</Button>
                        <Button color="primary" style="soft">Soft</Button>
                        <Button color="primary" style="dash">Dash</Button>
                        <Button color="primary" style="ghost">Ghost</Button>
                        <Button color="primary" style="link">Link</Button>
                    </div>
                </div>

                <!-- Sizes -->
                <div>
                    <h3 class="font-semibold mb-2">Sizes</h3>
                    <div class="flex flex-wrap gap-2 items-center">
                        <Button color="primary" size="xs">Extra Small</Button>
                        <Button color="primary" size="sm">Small</Button>
                        <Button color="primary">Default</Button>
                        <Button color="primary" size="lg">Large</Button>
                        <Button color="primary" size="xl">Extra Large</Button>
                    </div>
                </div>

                <!-- Modifiers -->
                <div>
                    <h3 class="font-semibold mb-2">Modifiers</h3>
                    <div class="flex flex-wrap gap-2">
                        <Button color="primary" modifier="wide">Wide</Button>
                        <Button color="primary" modifier="square">□</Button>
                        <Button color="primary" modifier="circle">●</Button>
                    </div>
                    <div class="mt-2">
                        <Button color="primary" modifier="block">Block</Button>
                    </div>
                </div>

                <!-- States -->
                <div>
                    <h3 class="font-semibold mb-2">States</h3>
                    <div class="flex flex-wrap gap-2">
                        <Button color="primary" active>Active</Button>
                        <Button color="primary" disabled>Disabled</Button>
                        <Button color="primary" loading>Loading</Button>
                    </div>
                </div>
            </div>
        </CardBody>
    </Card>

    <!-- Other Form Controls -->
    <Card>
        <CardBody>
            <CardTitle>Other Form Controls</CardTitle>
            <p class="text-base-content/70">More form controls coming soon...</p>
        </CardBody>
    </Card>
</div>
