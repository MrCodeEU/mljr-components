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
	import Swap from '$lib/comps/display/Swap.svelte';

	const imgSrc = 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp';

	const carouselImages = [
		'photo-1559703248-dcaaec9fab78',
		'photo-1565098772267-60af42b81ef2',
		'photo-1572635148818-ef6fd45eb394',
		'photo-1494253109108-2e30c049369b',
		'photo-1550258987-190a2d41a8ba',
		'photo-1559181567-c3190ca9959b',
		'photo-1601004890684-d8cbf643f5f2'
	].map((id) => `https://img.daisyui.com/images/stock/${id}.webp`);

	const slideImages = [
		'photo-1625726411847-8cbb60cc71e6',
		'photo-1609621838510-5ad474b7d25d',
		'photo-1414694762283-acccc27bca85',
		'photo-1665553365602-b2fb8e5d1707'
	].map((id) => `https://img.daisyui.com/images/stock/${id}.webp`);
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
							<Status color="success" />
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
					<ChatBubble position="end">You underestimate my power!</ChatBubble>
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
					<ChatBubble position="start" color="secondary"
						>Put me on the Council and not make me a Master!??</ChatBubble
					>
					<ChatBubble position="end" color="accent"
						>That's never been done in the history of the Jedi.</ChatBubble
					>
					<ChatBubble position="end" color="info">Calm down, Anakin.</ChatBubble>
				</div>
			</div>
		</CardBody>
	</Card>
	<Card>
		<CardTitle>Diff Component</CardTitle>
		<CardBody>
			<!--<Diff aspect="16/9" class="border border-gray-200">
                {#snippet primary()}
                    <img alt="daisy" src="https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.webp" />
                {/snippet}
                {#snippet secondary()}
                    <img alt="daisy" src="https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a-blur.webp" />
                {/snippet}
            </Diff>-->
		</CardBody>
	</Card>

	<Card>
		<CardBody>
			<CardTitle>Swap Components</CardTitle>
			<div class="space-y-8">
				<!-- Text Swap -->
				<div>
					<h3 class="font-semibold mb-2">Text Swap</h3>
					<Swap>
						{#snippet on()}ON{/snippet}
						{#snippet off()}OFF{/snippet}
					</Swap>
				</div>

				<!-- Volume Icon Swap -->
				<div>
					<h3 class="font-semibold mb-2">Volume Icon Swap</h3>
					<Swap>
						{#snippet on()}
							<svg
								class="fill-current w-12 h-12"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
							>
								<path
									d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z"
								/>
							</svg>
						{/snippet}
						{#snippet off()}
							<svg
								class="fill-current w-12 h-12"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
							>
								<path
									d="M3,9H7L12,4V20L7,15H3V9M16.59,12L14,9.41L15.41,8L18,10.59L20.59,8L22,9.41L19.41,12L22,14.59L20.59,16L18,13.41L15.41,16L14,14.59L16.59,12Z"
								/>
							</svg>
						{/snippet}
					</Swap>
				</div>

				<!-- Theme Toggle with Rotate -->
				<div>
					<h3 class="font-semibold mb-2">Theme Toggle with Rotate Effect</h3>
					<Swap style="rotate">
						{#snippet on()}
							<svg
								class="fill-current w-10 h-10"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
							>
								<path
									d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
								/>
							</svg>
						{/snippet}
						{#snippet off()}
							<svg
								class="fill-current w-10 h-10"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
							>
								<path
									d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
								/>
							</svg>
						{/snippet}
					</Swap>
				</div>

				<!-- Hamburger Menu in Button -->
				<div>
					<h3 class="font-semibold mb-2">Hamburger Menu Button</h3>
					<Button>
						<Swap style="rotate">
							{#snippet on()}
								<svg
									class="fill-current w-8 h-8"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 512 512"
								>
									<polygon
										points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"
									/>
								</svg>
							{/snippet}
							{#snippet off()}
								<svg
									class="fill-current w-8 h-8"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 512 512"
								>
									<path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
								</svg>
							{/snippet}
						</Swap>
					</Button>
				</div>

				<!-- Emoji Flip -->
				<div>
					<h3 class="font-semibold mb-2">Emoji with Flip Effect</h3>
					<Swap style="flip" class="text-9xl">
						{#snippet on()}😈{/snippet}
						{#snippet off()}😇{/snippet}
					</Swap>
				</div>

				<!-- Class Controlled -->
				<div>
					<h3 class="font-semibold mb-2">Class Controlled Swap</h3>
					<div class="flex gap-4">
						<Swap class="text-6xl">
							{#snippet on()}🥵{/snippet}
							{#snippet off()}🥶{/snippet}
						</Swap>
						<Swap active class="text-6xl">
							{#snippet on()}🥳{/snippet}
							{#snippet off()}😭{/snippet}
						</Swap>
					</div>
				</div>
			</div>
		</CardBody>
	</Card>
</div>
