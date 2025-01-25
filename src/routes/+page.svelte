<script lang="ts">
    import ThemeToggle from '$lib/comps/ThemeToggle.svelte';
    import Button from '$lib/comps/Button.svelte';
    import { Card, CardBody, CardTitle, CardActions } from '$lib/comps/card/index.js';
    import Heart from 'lucide-svelte/icons/heart';
</script>

<main class="p-4 space-y-8">
    <div class="flex justify-between items-center">
        <h1 class="text-2xl font-bold">Components</h1>
        <ThemeToggle />
    </div>

    <Card>
        <CardBody>
            <CardTitle>Button Components</CardTitle>
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
                    <Button style="dash">Dash</Button>
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
                    <Button modifier="circle"><Heart /></Button>
                    <Button modifier="square"><Heart /></Button>
                    <Button modifier="wide">Wide</Button>
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
        </CardBody>
    </Card>

    <Card>
        <CardBody>
            <CardTitle>Card Styles</CardTitle>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <!-- Basic Card Example -->
                <Card>
                    <figure>
                        <img src="https://picsum.photos/400/200" alt="Sample" />
                    </figure>
                    <CardBody>
                        <CardTitle>Basic Card</CardTitle>
                        <p>Basic card with image</p>
                        <CardActions class="justify-end">
                            <Button color="primary">Action</Button>
                        </CardActions>
                    </CardBody>
                </Card>

                <!-- Card with Border -->
                <Card style="border">
                    <CardBody>
                        <CardTitle>Border Style</CardTitle>
                        <p>Card with border style</p>
                    </CardBody>
                </Card>

                <!-- Card with Dash -->
                <Card style="dash">
                    <CardBody>
                        <CardTitle>Dash Style</CardTitle>
                        <p>Card with dash style</p>
                    </CardBody>
                </Card>
            </div>
        </CardBody>
    </Card>

    <Card>
        <CardBody>
            <CardTitle>Card Sizes</CardTitle>
            <div class="space-y-4">
                {#each ['xs', 'sm', 'md', 'lg', 'xl'] as size, i (i)}
                    <Card size={size as "xs" | "sm" | "md" | "lg" | "xl"}>
                        <CardBody>
                            <CardTitle>{size.toUpperCase()} Size</CardTitle>
                            <p>Card with {size} size</p>
                        </CardBody>
                    </Card>
                {/each}
            </div>
        </CardBody>
    </Card>

    <Card>
        <CardBody>
            <CardTitle>Card Modifiers</CardTitle>
            <div class="space-y-4">
                <Card modifier="side" class="h-32">
                    <figure>
                        <img src="https://picsum.photos/100/100" alt="Side" />
                    </figure>
                    <CardBody>
                        <CardTitle>Side Image</CardTitle>
                        <p>Card with side image</p>
                    </CardBody>
                </Card>

                <Card modifier="image-full">
                    <figure>
                        <img src="https://picsum.photos/400/200" alt="Full" />
                    </figure>
                    <CardBody>
                        <CardTitle>Image Overlay</CardTitle>
                        <p>Card with image overlay</p>
                    </CardBody>
                </Card>
            </div>
        </CardBody>
    </Card>

    <Card>
        <CardBody>
            <CardTitle>Card Title Sizes</CardTitle>
            <div class="space-y-4">
                {#each ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'] as size, i (i)}
                    <Card>
                        <CardBody>
                            <CardTitle size={size as any}>Title Size {size}</CardTitle>
                            <p>Card with title size {size}</p>
                        </CardBody>
                    </Card>
                {/each}
            </div>
        </CardBody>
    </Card>
</main>