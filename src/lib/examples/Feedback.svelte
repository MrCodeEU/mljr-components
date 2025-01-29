<script lang="ts">
	import { Card, CardBody, CardTitle } from '$lib/comps/layout/card/index.js';
	import Alert from '$lib/comps/feedback/Alert.svelte';
	import Button from '$lib/comps/forms/Button.svelte';
	import Badge from '$lib/comps/feedback/Badge.svelte';
	import Modal from '$lib/comps/feedback/Modal.svelte';
	import Check from 'lucide-svelte/icons/check';
	import Info from 'lucide-svelte/icons/info';
	import Loading from '$lib/comps/feedback/Loading.svelte';
	import Progress from '$lib/comps/feedback/Progress.svelte';
	import RadialProgress from '$lib/comps/feedback/RadialProgress.svelte';

	let basicModalOpen = $state(false);
	let cornerCloseModalOpen = $state(false);
	let wideModalOpen = $state(false);
	let responsiveModalOpen = $state(false);
</script>

<Card>
	<CardBody>
		<CardTitle>Feedback Components</CardTitle>

		<div class="space-y-4">
			<div>
				<h3 class="font-bold mb-2">Basic Alerts</h3>
				<div class="space-y-2">
					<Alert color="info">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="h-6 w-6 shrink-0 stroke-current">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
						</svg>
						<span>New software update available.</span>
					</Alert>
					<Alert color="success">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
						<span>Your purchase has been confirmed!</span>
					</Alert>
					<Alert color="warning">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
						</svg>
						<span>Warning: Invalid email address!</span>
					</Alert>
					<Alert color="error">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
						<span>Error! Task failed successfully.</span>
					</Alert>
				</div>
			</div>

			<div>
				<h3 class="font-bold mb-2">Alert Styles</h3>
				<div class="space-y-2">
					<Alert color="info" style="soft">
						<span>Soft style alert with info color</span>
					</Alert>
					<Alert color="success" style="outline">
						<span>Outline style alert with success color</span>
					</Alert>
					<Alert color="warning" style="dash">
						<span>Dash style alert with warning color</span>
					</Alert>
				</div>
			</div>

			<div>
				<h3 class="font-bold mb-2">Complex Alert</h3>
				<Alert direction="vertical" class="sm:alert-horizontal">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info h-6 w-6 shrink-0">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
					</svg>
					<div>
						<h3 class="font-bold">New message!</h3>
						<div class="text-xs">You have 1 unread message</div>
					</div>
					<div>
						<Button size="sm" color="primary">View</Button>
					</div>
				</Alert>
			</div>
		</div>

		<!-- Badge examples section -->
		<div class="space-y-4">
			<div>
				<h3 class="font-bold mb-2">Badge Sizes</h3>
				<div class="flex gap-2 items-center">
					<Badge size="xs">Xsmall</Badge>
					<Badge size="sm">Small</Badge>
					<Badge size="md">Medium</Badge>
					<Badge size="lg">Large</Badge>
					<Badge size="xl">Xlarge</Badge>
				</div>
			</div>

			<div>
				<h3 class="font-bold mb-2">Badge Colors</h3>
				<div class="flex gap-2 flex-wrap">
					<Badge color="primary">Primary</Badge>
					<Badge color="secondary">Secondary</Badge>
					<Badge color="accent">Accent</Badge>
					<Badge color="neutral">Neutral</Badge>
					<Badge color="info">Info</Badge>
					<Badge color="success">Success</Badge>
					<Badge color="warning">Warning</Badge>
					<Badge color="error">Error</Badge>
				</div>
			</div>

			<div>
				<h3 class="font-bold mb-2">Badge Styles</h3>
				<div class="space-y-2">
					<div class="flex gap-2 flex-wrap">
						<Badge color="primary" style="soft">Soft</Badge>
						<Badge color="secondary" style="outline">Outline</Badge>
						<Badge color="accent" style="dash">Dash</Badge>
						<Badge style="ghost">Ghost</Badge>
					</div>
				</div>
			</div>

			<div>
				<h3 class="font-bold mb-2">Badge with Icons</h3>
				<div class="flex gap-2">
					<Badge color="info">
						<Info class="size-[1em]" />
						Info
					</Badge>
					<Badge color="success">
						<Check class="size-[1em]" />
						Success
					</Badge>
				</div>
			</div>

			<div>
				<h3 class="font-bold mb-2">Badge in Button</h3>
				<div class="flex gap-2">
					<Button>
						Inbox <Badge size="sm">+99</Badge>
					</Button>
					<Button>
						Messages <Badge size="sm" color="secondary">+99</Badge>
					</Button>
				</div>
			</div>
		</div>

		<!-- Loading examples section -->
		<div class="space-y-4">
			<div>
				<h3 class="font-bold mb-2">Loading Styles & Sizes</h3>
				<div class="grid gap-4">
					<div class="flex items-center gap-4">
						<Loading style="spinner" size="xs" />
						<Loading style="spinner" size="sm" />
						<Loading style="spinner" size="md" />
						<Loading style="spinner" size="lg" />
						<Loading style="spinner" size="xl" />
					</div>
					<div class="flex items-center gap-4">
						<Loading style="dots" size="xs" />
						<Loading style="dots" size="sm" />
						<Loading style="dots" size="md" />
						<Loading style="dots" size="lg" />
						<Loading style="dots" size="xl" />
					</div>
					<div class="flex items-center gap-4">
						<Loading style="ring" size="xs" />
						<Loading style="ring" size="sm" />
						<Loading style="ring" size="md" />
						<Loading style="ring" size="lg" />
						<Loading style="ring" size="xl" />
					</div>
					<div class="flex items-center gap-4">
						<Loading style="ball" size="xs" />
						<Loading style="ball" size="sm" />
						<Loading style="ball" size="md" />
						<Loading style="ball" size="lg" />
						<Loading style="ball" size="xl" />
					</div>
					<div class="flex items-center gap-4">
						<Loading style="bars" size="xs" />
						<Loading style="bars" size="sm" />
						<Loading style="bars" size="md" />
						<Loading style="bars" size="lg" />
						<Loading style="bars" size="xl" />
					</div>
					<div class="flex items-center gap-4">
						<Loading style="infinity" size="xs" />
						<Loading style="infinity" size="sm" />
						<Loading style="infinity" size="md" />
						<Loading style="infinity" size="lg" />
						<Loading style="infinity" size="xl" />
					</div>
				</div>
			</div>

			<div>
				<h3 class="font-bold mb-2">Loading Colors</h3>
				<div class="flex gap-4 flex-wrap">
					<Loading color="primary" />
					<Loading color="secondary" />
					<Loading color="accent" />
					<Loading color="neutral" />
					<Loading color="info" />
					<Loading color="success" />
					<Loading color="warning" />
					<Loading color="error" />
				</div>
			</div>
		</div>

		<!-- Modal examples section -->
		<div class="space-y-4">
			<div>
				<h3 class="font-bold mb-2">Basic Modal</h3>
					<Button onclick={() => basicModalOpen = true}>Open Modal</Button>
					<Modal id="basic-modal" bind:open={basicModalOpen}>
						<h3 class="text-lg font-bold">Hello!</h3>
						<p class="py-4">Press ESC key or click outside to close</p>
						<div class="modal-action">
							<Button onclick={() => basicModalOpen = false}>Close</Button>
						</div>
					</Modal>
			</div>

			<div>
				<h3 class="font-bold mb-2">Modal with Corner Close Button</h3>
				<Button onclick={() => cornerCloseModalOpen = true}>Open Modal</Button>
				<Modal id="corner-close-modal" bind:open={cornerCloseModalOpen}>
					<Button 
						style="ghost" 
						modifier="circle" 
						size="sm" 
						class="absolute right-2 top-2"
						onclick={() => cornerCloseModalOpen = false}
					>✕</Button>
					<h3 class="text-lg font-bold">Hello!</h3>
					<p class="py-4">Press ESC key or click on ✕ button to close</p>
				</Modal>
			</div>

			<div>
				<h3 class="font-bold mb-2">Wide Modal</h3>
				<Button onclick={() => wideModalOpen = true}>Open Modal</Button>
				<Modal id="wide-modal" bind:open={wideModalOpen} width="90vw">
					<h3 class="text-lg font-bold">Wide Modal</h3>
					<p class="py-4">This modal uses custom width</p>
					<div class="modal-action">
						<Button onclick={() => wideModalOpen = false}>Close</Button>
					</div>
				</Modal>
			</div>

			<div>
				<h3 class="font-bold mb-2">Responsive Modal</h3>
				<Button onclick={() => responsiveModalOpen = true}>Open Modal</Button>
				<Modal
					id="responsive-modal"
					bind:open={responsiveModalOpen}
					class="modal-bottom sm:modal-middle"
				>
					<h3 class="text-lg font-bold">Responsive Modal</h3>
					<p class="py-4">Bottom on mobile, middle on desktop</p>
					<div class="modal-action">
						<Button onclick={() => responsiveModalOpen = false}>Close</Button>
					</div>
				</Modal>
			</div>
		</div>

		<!-- Progress examples section -->
		<div class="space-y-4">
			<div>
				<h3 class="font-bold mb-2">Progress with Labels</h3>
				<div class="flex flex-col gap-8 mb-8">
					<Progress value={25} width="14rem" showLabel labelPosition="left" />
					<Progress value={50} width="14rem" showLabel labelPosition="right" />
					<Progress value={75} width="14rem" showLabel labelPosition="top" />
					<Progress value={100} width="14rem" showLabel labelPosition="bottom" />
				</div>
			</div>

			<div>
				<h3 class="font-bold mb-2">Progress Colors</h3>
				<div class="flex flex-col gap-4">
					<div class="flex flex-col gap-2">
						<Progress color="primary" value={40} width="14rem" />
						<Progress color="secondary" value={50} width="14rem" />
						<Progress color="accent" value={60} width="14rem" />
						<Progress color="neutral" value={70} width="14rem" />
					</div>
					<div class="flex flex-col gap-2">
						<Progress color="info" value={40} width="14rem" />
						<Progress color="success" value={50} width="14rem" />
						<Progress color="warning" value={60} width="14rem" />
						<Progress color="error" value={70} width="14rem" />
					</div>
				</div>
			</div>

			<div>
				<h3 class="font-bold mb-2">Progress Sizes</h3>
				<div class="flex flex-col gap-4">
					<Progress size="xs" value={40} width="14rem" />
					<Progress size="sm" value={50} width="14rem" />
					<Progress size="md" value={60} width="14rem" />
					<Progress size="lg" value={70} width="14rem" />
					<Progress size="xl" value={80} width="14rem" />
				</div>

			<div>
				<h3 class="font-bold mb-2">Indeterminate Progress</h3>
				<Progress width="14rem" />
			</div>

			<div>
				<h3 class="font-bold mb-2">Radial Progress</h3>
				<div class="flex gap-4 flex-wrap">
					<RadialProgress value={0} />
					<RadialProgress value={25} />
					<RadialProgress value={50} />
					<RadialProgress value={75} />
					<RadialProgress value={100} />
				</div>
			</div>

			<div>
				<h3 class="font-bold mb-2">Radial Progress Colors</h3>
				<div class="flex gap-4 flex-wrap">
					<RadialProgress value={70} color="primary" />
					<RadialProgress value={70} color="primary" background border>
						70%
					</RadialProgress>
				</div>
			</div>

			<div>
				<h3 class="font-bold mb-2">Custom Radial Progress</h3>
				<div class="flex gap-4 flex-wrap items-end">
					<RadialProgress value={70} size="12rem" thickness="2px">
						Thin
					</RadialProgress>
					<RadialProgress value={70} size="8rem" thickness="1rem">
						Thick
					</RadialProgress>
				</div>
			</div>
		</div>
	</CardBody>
</Card>
