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
	import Skeleton from '$lib/comps/feedback/Skeleton.svelte';
	import Stats from '$lib/comps/feedback/Stats.svelte';
	import Stat from '$lib/comps/feedback/Stat.svelte';
	import Status from '$lib/comps/feedback/Status.svelte';
	import Heart from 'lucide-svelte/icons/heart';
	import Zap from 'lucide-svelte/icons/zap';
	import Settings from 'lucide-svelte/icons/settings';
	import { toast } from '$lib/comps/feedback/toast/toast.service.js';
	import ToastContainer from '$lib/comps/feedback/toast/ToastContainer.svelte';

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

		<!-- Skeleton examples section -->
		<div class="space-y-4">
			<div>
				<h3 class="font-bold mb-2">Basic Skeleton</h3>
				<Skeleton width="8rem" height="8rem" />
			</div>

			<div>
				<h3 class="font-bold mb-2">Custom Layout</h3>
				<Skeleton>
					<div class="flex w-80 flex-col gap-4">
						<div class="flex items-center gap-4">
							<div class="skeleton h-16 w-16 shrink-0 rounded-full"></div>
							<div class="flex flex-col gap-4">
								<div class="skeleton h-4 w-20"></div>
								<div class="skeleton h-4 w-28"></div>
								<div class="skeleton h-4 w-28"></div>
								<div class="skeleton h-4 w-28"></div>
							</div>
						</div>
						<div class="skeleton h-32 w-full"></div>
					</div>
				</Skeleton>
			</div>

			<div>
				<h3 class="font-bold mb-2">Predefined Layouts</h3>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
					<div>
						<h4 class="font-medium mb-2">Avatar Layout</h4>
						<Skeleton type="avatar" />
					</div>
					<div>
						<h4 class="font-medium mb-2">Card Layout</h4>
						<Skeleton type="card" />
					</div>
					<div>
						<h4 class="font-medium mb-2">List Layout</h4>
						<Skeleton type="list" />
					</div>
					<div>
						<h4 class="font-medium mb-2">Table Layout</h4>
						<Skeleton type="table" />
					</div>
					<div>
						<h4 class="font-medium mb-2">Article Layout</h4>
						<Skeleton type="article" />
					</div>
				</div>
			</div>
		</div>

		<!-- Stats examples section -->
		<div class="space-y-4">
			<div>
				<h3 class="font-bold mb-2">Basic Stats</h3>
				<Stats>
					<Stat
						title="Total Page Views"
						value="89,400"
						description="21% more than last month"
					/>
				</Stats>
			</div>

			<div>
				<h3 class="font-bold mb-2">Stats with Icons</h3>
				<Stats shadow>
					<Stat
						icon={Heart}
						iconColor="primary"
						title="Total Likes"
						value="25.6K"
						valueColor="accent"
						description="21% more than last month"
					/>
					<Stat
						icon={Zap}
						iconColor="warning"
						title="Page Views"
						value="2.6M"
						valueColor="secondary"
						description="21% more than last month"
					/>
				</Stats>
			</div>

			<div>
				<h3 class="font-bold mb-2">Vertical Stats</h3>
				<Stats direction="vertical" shadow>
					<Stat
						title="Downloads"
						value="31K"
						description="Jan 1st - Feb 1st"
					/>
					<Stat
						title="New Users"
						value="4,200"
						description="↗︎ 400 (22%)"
					/>
				</Stats>
			</div>

			<div>
				<h3 class="font-bold mb-2">Stats with Actions</h3>
				<Stats border>
					<Stat
						title="Account balance"
						value="$89,400"
					>
						<Button size="xs" color="success">Add funds</Button>
					</Stat>
					<Stat
						title="Current balance"
						value="$89,400"
					>
						<Button size="xs">Withdrawal</Button>
						<Button size="xs">Deposit</Button>
					</Stat>
				</Stats>
			</div>

			<div>
				<h3 class="font-bold mb-2">Responsive Stats</h3>
				<Stats responsive shadow>
					<Stat
						title="Downloads"
						value="31K"
						description="Jan 1st - Feb 1st"
					/>
					<Stat
						title="New Users"
						value="4,200"
						description="↗︎ 400 (22%)"
					/>
					<Stat
						title="New Registers"
						value="1,200"
						description="↘︎ 90 (14%)"
					/>
				</Stats>
			</div>
		</div>

		<!-- Status examples section -->
		<div class="space-y-4">
			<div>
				<h3 class="font-bold mb-2">Status Sizes</h3>
				<div class="flex items-center gap-4">
					<Status size="xs" label="status" />
					<Status size="sm" label="status" />
					<Status size="md" label="status" />
					<Status size="lg" label="status" />
					<Status size="xl" label="status" />
				</div>
			</div>

			<div>
				<h3 class="font-bold mb-2">Status Colors</h3>
				<div class="flex flex-col gap-4">
					<div class="flex items-center gap-4">
						<Status color="primary" label="primary" />
						<Status color="secondary" label="secondary" />
						<Status color="accent" label="accent" />
						<Status color="neutral" label="neutral" />
					</div>
					<div class="flex items-center gap-4">
						<Status color="info" label="info" />
						<Status color="success" label="success" />
						<Status color="warning" label="warning" />
						<Status color="error" label="error" />
					</div>
				</div>
			</div>

			<div>
				<h3 class="font-bold mb-2">Status with Animations</h3>
				<div class="flex items-center gap-8">
					<div class="flex items-center gap-2">
						<Status color="error" animation="ping" label="error" />
						<span>Server is down</span>
					</div>
					<div class="flex items-center gap-2">
						<Status color="info" animation="bounce" label="info" />
						<span>Unread messages</span>
					</div>
				</div>
			</div>
		</div>

		<!-- Toast examples section -->
		<div class="space-y-4">
			<div>
				<h3 class="font-bold mb-2">Basic Toasts</h3>
				<div class="flex gap-2">
					<Button onclick={() => toast.info({ message: 'New message arrived' ,title: 'Info' })}>
						Info Toast
					</Button>
					<Button onclick={() => toast.success({ message: 'Successfully saved!' })}>
						Success Toast
					</Button>
					<Button onclick={() => toast.warning({ message: 'Network connection is unstable' })}>
						Warning Toast
					</Button>
					<Button onclick={() => toast.error({ message: 'Failed to save changes' })}>
						Error Toast
					</Button>
				</div>
			</div>

			<div>
				<h3 class="font-bold mb-2">Toast Positions</h3>
				<div class="flex gap-2 flex-wrap">
					<Button onclick={() => toast.info({ message: 'Top Start', position: 'top-start', duration: 100000 })}>
						Top Start
					</Button>
					<Button onclick={() => toast.info({ message: 'Top Center', position: 'top-center', duration: 100000  })}>
						Top Center
					</Button>
					<Button onclick={() => toast.info({ message: 'Middle End', position: 'middle-end', duration: 100000  })}>
						Middle End
					</Button>
					<Button onclick={() => toast.info({ message: 'Bottom Start', position: 'bottom-start', duration: 100000  })}>
						Bottom Start
					</Button>
				</div>
			</div>

			<div>
				<h3 class="font-bold mb-2">Custom Toasts</h3>
				<div class="flex gap-2">
					<Button
						onclick={() => {
							toast.custom({
								message: 'Visit documentation?',
								duration: Infinity,
								title: 'New Version Available',
								action: {
									label: 'Open Docs',
									onClick: () => window.open('https://example.com', '_blank')
								}
							});
						}}
					>
						With Action
					</Button>
					<Button onclick={() => toast.clear()}>
						Clear All
					</Button>
				</div>
			</div>

			<div>
				<h3 class="font-bold mb-2">Toast with Progress</h3>
				<div class="flex gap-2">
					<Button
						onclick={() => {
							toast.info({
								message: 'This toast has a progress bar',
								duration: 5000,
								showProgress: true
							});
						}}
					>
						With Progress
					</Button>
					<Button
						onclick={() => {
							toast.success({
								message: 'This toast has no progress bar',
								duration: 3000,
								showProgress: false
							});
						}}
					>
						Without Progress
					</Button>
				</div>
			</div>

			<div>
				<h3 class="font-bold mb-2">Toast Duration</h3>
				<div class="flex gap-2">
					<Button
						onclick={() => {
							toast.info({
								message: 'This toast stays for 2 seconds',
								duration: 2000
							});
						}}
					>
						Short Duration
					</Button>
					<Button
						onclick={() => {
							toast.info({
								message: 'This toast stays until dismissed',
								duration: Infinity,
								showProgress: false
							});
						}}
					>
						Infinite Duration
					</Button>
				</div>
			</div>
		</div>

		<ToastContainer />
	</CardBody>
</Card>
