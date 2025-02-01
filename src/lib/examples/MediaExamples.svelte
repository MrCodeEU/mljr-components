<script lang="ts">
    import Avatar from '$lib/comps/media/Avatar.svelte';
    import { Carousel, CarouselItem } from '$lib/comps/media/carousel/index.js';
    import { Card, CardBody, CardTitle } from '$lib/comps/layout/card/index.js';
    import ChatBubble from '$lib/comps/media/ChatBubble.svelte';
    import Diff from '$lib/comps/media/Diff.svelte';
    import Indicator from '$lib/comps/display/Indicator.svelte';
    import IndicatorItem from '$lib/comps/display/IndicatorItem.svelte';
    import Badge from '$lib/comps/feedback/Badge.svelte';
    import Status from '$lib/comps/feedback/Status.svelte';
	import Button from '$lib/comps/forms/Button.svelte';

    const imgSrc = "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp";
    
    const carouselImages = [
        "photo-1559703248-dcaaec9fab78",
        "photo-1565098772267-60af42b81ef2",
        "photo-1572635148818-ef6fd45eb394",
        "photo-1494253109108-2e30c049369b",
        "photo-1550258987-190a2d41a8ba",
        "photo-1559181567-c3190ca9959b",
        "photo-1601004890684-d8cbf643f5f2"
    ].map(id => `https://img.daisyui.com/images/stock/${id}.webp`);

    const slideImages = [
        "photo-1625726411847-8cbb60cc71e6",
        "photo-1609621838510-5ad474b7d25d",
        "photo-1414694762283-acccc27bca85",
        "photo-1665553365602-b2fb8e5d1707"
    ].map(id => `https://img.daisyui.com/images/stock/${id}.webp`);
</script>

<div class="space-y-4">
    <Card>
        <CardBody>
            <CardTitle>Avatar Components</CardTitle>
            <div class="space-y-8">
                <!-- Basic Avatars & Sizes -->
                <div>
                    <h3 class="font-semibold mb-2">Basic Avatars & Sizes</h3>
                    <div class="flex gap-4 items-end">
                        <Avatar src={imgSrc} size="32" />
                        <Avatar src={imgSrc} size="24" />
                        <Avatar src={imgSrc} size="20" />
                        <Avatar src={imgSrc} size="16" />
                        <Avatar src={imgSrc} size="12" />
                        <Avatar src={imgSrc} size="8" />
                    </div>
                </div>

                <!-- Rounded Styles -->
                <div>
                    <h3 class="font-semibold mb-2">Rounded Styles</h3>
                    <div class="flex gap-4">
                        <Avatar src={imgSrc} size="24" rounded />
                        <Avatar src={imgSrc} size="24" roundedFull />
                    </div>
                </div>

                <!-- Mask Styles -->
                <div>
                    <h3 class="font-semibold mb-2">Mask Styles</h3>
                    <div class="flex gap-4">
                        <Avatar src={imgSrc} size="24" mask="squircle" />
                        <Avatar src={imgSrc} size="24" mask="hexagon" />
                        <Avatar src={imgSrc} size="24" mask="triangle" />
                    </div>
                </div>

                <!-- Avatar Group -->
                <div>
                    <h3 class="font-semibold mb-2">Avatar Group</h3>
                    <Avatar group>
                        <Avatar src={imgSrc} size="12" />
                        <Avatar src={imgSrc} size="12" />
                        <Avatar src={imgSrc} size="12" />
                        <Avatar placeholder="+99" size="12" />
                    </Avatar>
                </div>

                <!-- Ring & Status -->
                <div>
                    <h3 class="font-semibold mb-2">Ring & Status</h3>
                    <div class="flex gap-4">
                        <Avatar src={imgSrc} size="24" ring />
                        <Avatar src={imgSrc} size="24" status="online" roundedFull />
                        <Avatar src={imgSrc} size="24" status="offline" roundedFull />
                    </div>
                </div>

                <!-- Placeholders -->
                <div>
                    <h3 class="font-semibold mb-2">Placeholders</h3>
                    <div class="flex gap-4">
                        <Avatar placeholder="D" size="24" />
                        <Avatar placeholder="AI" size="16" status="online" />
                        <Avatar placeholder="SY" size="12" />
                        <Avatar placeholder="UI" size="8" />
                    </div>
                </div>
            </div>
        </CardBody>
    </Card>

    <!-- Indicator Examples -->
    <Card>
        <CardBody>
            <CardTitle>Indicator Components</CardTitle>
            <div class="space-y-8">
                <!-- Status Indicator -->
                <div>
                    <h3 class="font-semibold mb-2">Status Indicator</h3>
                    <Indicator>
                        <IndicatorItem>
                            <Status type="success" />
                        </IndicatorItem>
                        <div class="bg-base-300 grid h-32 w-32 place-items-center">content</div>
                    </Indicator>
                </div>

                <!-- Badge Indicator -->
                <div>
                    <h3 class="font-semibold mb-2">Badge Indicator</h3>
                    <Indicator>
                        <IndicatorItem>
                            <Badge>New</Badge>
                        </IndicatorItem>
                        <div class="bg-base-300 grid h-32 w-32 place-items-center">content</div>
                    </Indicator>
                </div>

                <!-- Button with Indicator -->
                <div>
                    <h3 class="font-semibold mb-2">Button with Indicator</h3>
                    <Indicator>
                        <IndicatorItem>
                            <Badge>99+</Badge>
                        </IndicatorItem>
                        <Button>Inbox</Button>
                    </Indicator>
                </div>

                <!-- Avatar with Indicator -->
                <div>
                    <h3 class="font-semibold mb-2">Avatar with Indicator</h3>
                    <Indicator>
                        <IndicatorItem>
                            <Badge>Online</Badge>
                        </IndicatorItem>
                        <Avatar src={imgSrc} size="20" />
                    </Indicator>
                </div>

                <!-- Different Positions -->
                <div>
                    <h3 class="font-semibold mb-2">Different Positions</h3>
                    <div class="flex flex-wrap gap-4">
                        <Indicator>
                            <IndicatorItem horizontal="start">
                                <Badge>Start</Badge>
                            </IndicatorItem>
                            <div class="bg-base-300 grid h-32 w-32 place-items-center">Top Start</div>
                        </Indicator>

                        <Indicator>
                            <IndicatorItem horizontal="center" vertical="middle">
                                <Badge>Center</Badge>
                            </IndicatorItem>
                            <div class="bg-base-300 grid h-32 w-32 place-items-center">Middle Center</div>
                        </Indicator>

                        <Indicator>
                            <IndicatorItem vertical="bottom">
                                <Badge>Bottom</Badge>
                            </IndicatorItem>
                            <div class="bg-base-300 grid h-32 w-32 place-items-center">Bottom End</div>
                        </Indicator>
                    </div>
                </div>

                <!-- Multiple Indicators -->
                <div>
                    <h3 class="font-semibold mb-2">Multiple Indicators</h3>
                    <Indicator>
                        <IndicatorItem horizontal="start" vertical="top">
                            <Badge>↖︎</Badge>
                        </IndicatorItem>
                        <IndicatorItem horizontal="center" vertical="middle">
                            <Badge>●</Badge>
                        </IndicatorItem>
                        <IndicatorItem horizontal="end" vertical="bottom">
                            <Badge>↘︎</Badge>
                        </IndicatorItem>
                        <div class="bg-base-300 grid h-32 w-60 place-items-center">Box</div>
                    </Indicator>
                </div>
            </div>
        </CardBody>
    </Card>

    <!-- Carousel Examples -->
    <Card>
        <CardBody>
            <CardTitle>Carousel Components</CardTitle>
            <div class="space-y-8">
                <!-- Basic Carousel -->
                <div>
                    <h3 class="font-semibold mb-2">Basic Carousel</h3>
                    <Carousel rounded>
                        {#each carouselImages as src}
                            <CarouselItem>
                                <img {src} alt="Carousel item" />
                            </CarouselItem>
                        {/each}
                    </Carousel>
                </div>

                <!-- Center Snap Carousel -->
                <div>
                    <h3 class="font-semibold mb-2">Center Snap</h3>
                    <Carousel snap="center" rounded>
                        {#each carouselImages as src}
                            <CarouselItem>
                                <img {src} alt="Carousel item" />
                            </CarouselItem>
                        {/each}
                    </Carousel>
                </div>

                <!-- Full Width Items -->
                <div>
                    <h3 class="font-semibold mb-2">Full Width Items</h3>
                    <Carousel width="w-64" rounded>
                        {#each carouselImages as src}
                            <CarouselItem width="full">
                                <img {src} class="w-full" alt="Carousel item" />
                            </CarouselItem>
                        {/each}
                    </Carousel>
                </div>

                <!-- Vertical Carousel -->
                <div>
                    <h3 class="font-semibold mb-2">Vertical Carousel</h3>
                    <Carousel direction="vertical" height="h-96" rounded>
                        {#each carouselImages as src}
                            <CarouselItem height="full">
                                <img {src} alt="Carousel item" />
                            </CarouselItem>
                        {/each}
                    </Carousel>
                </div>

                <!-- Half Width Items -->
                <div>
                    <h3 class="font-semibold mb-2">Half Width Items</h3>
                    <Carousel width="w-96" rounded>
                        {#each carouselImages as src}
                            <CarouselItem width="1/2">
                                <img {src} class="w-full" alt="Carousel item" />
                            </CarouselItem>
                        {/each}
                    </Carousel>
                </div>

                <!-- Full Bleed Carousel -->
                <div>
                    <h3 class="font-semibold mb-2">Full Bleed Carousel</h3>
                    <Carousel snap="center" fullBleed rounded>
                        {#each carouselImages as src}
                            <CarouselItem>
                                <img {src} class="rounded-box" alt="Carousel item" />
                            </CarouselItem>
                        {/each}
                    </Carousel>
                </div>

                <!-- Carousel with Indicators -->
                <div>
                    <h3 class="font-semibold mb-2">With Indicators</h3>
                    <Carousel width="w-full" showPagination>
                        {#each slideImages as src, i}
                            <CarouselItem width="full">
                                <img {src} class="w-full" alt={`Slide ${i + 1}`} />
                            </CarouselItem>
                        {/each}
                    </Carousel>
                </div>

                <!-- Carousel with Navigation -->
                <div>
                    <h3 class="font-semibold mb-2">With Navigation</h3>
                    <Carousel width="w-full" showNavigation>
                        {#each slideImages as src, i}
                            <CarouselItem width="full">
                                <img {src} class="w-full" alt={`Slide ${i + 1}`} />
                            </CarouselItem>
                        {/each}
                    </Carousel>
                </div>

                <!-- Carousel with Both Controls -->
                <div>
                    <h3 class="font-semibold mb-2">With Both Controls</h3>
                    <Carousel width="w-full" showNavigation showPagination>
                        {#each slideImages as src, i}
                            <CarouselItem width="full">
                                <img {src} class="w-full" alt={`Slide ${i + 1}`} />
                            </CarouselItem>
                        {/each}
                    </Carousel>
                </div>
            </div>
        </CardBody>
    </Card>

    <Card>
        <CardBody>
            <CardTitle>Chat Bubble Components</CardTitle>
            <div class="space-y-8">
                <!-- Basic Chat -->
                <div>
                    <h3 class="font-semibold mb-2">Basic Chat</h3>
                    <ChatBubble position="start">
                        It's over Anakin,<br />I have the high ground.
                    </ChatBubble>
                    <ChatBubble position="end">
                        You underestimate my power!
                    </ChatBubble>
                </div>

                <!-- Chat with Avatar -->
                <div>
                    <h3 class="font-semibold mb-2">Chat with Avatar</h3>
                    <ChatBubble position="start" avatar={imgSrc}>
                        It was said that you would, destroy the Sith, not join them.
                    </ChatBubble>
                </div>

                <!-- Chat with Full Details -->
                <div>
                    <h3 class="font-semibold mb-2">Chat with Full Details</h3>
                    <ChatBubble
                        position="start"
                        avatar={imgSrc}
                        author="Obi-Wan Kenobi"
                        timestamp={new Date()}
                        footer="Delivered"
                    >
                        You were the Chosen One!
                    </ChatBubble>
                </div>

                <!-- Chat Colors -->
                <div>
                    <h3 class="font-semibold mb-2">Chat Colors</h3>
                    <ChatBubble position="start" color="primary">What kind of nonsense is this</ChatBubble>
                    <ChatBubble position="start" color="secondary">Put me on the Council and not make me a Master!??</ChatBubble>
                    <ChatBubble position="end" color="accent">That's never been done in the history of the Jedi.</ChatBubble>
                    <ChatBubble position="end" color="info">Calm down, Anakin.</ChatBubble>
                </div>
            </div>
        </CardBody>
    </Card>
    <Card>
        <CardTitle>Diff Component</CardTitle>
        <CardBody>
            <Diff aspect="16/9" class="border border-gray-200">
                {#snippet primary()}
                    <img alt="daisy" src="https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.webp" />
                {/snippet}
                {#snippet secondary()}
                    <img alt="daisy" src="https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a-blur.webp" />
                {/snippet}
            </Diff>
        </CardBody>
    </Card>
</div>
