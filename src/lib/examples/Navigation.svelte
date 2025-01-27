<script lang="ts">
	import { Card, CardBody, CardTitle } from '$lib/comps/layout/card/index.js';
	import { Tabs, TabContent } from '$lib/comps/navs/tabs/index.js';
	import { Accordion, AccordionItem } from '$lib/comps/navs/accordion/index.js';
	import { Breadcrumbs, BreadcrumbItem } from '$lib/comps/navs/breadcrumbs/index.js';
	import { Drawer, DrawerContent, DrawerSide, DrawerToggle } from '$lib/comps/navs/drawer/index.js';
	import { Dropdown, DropdownContent } from '$lib/comps/navs/dropdown/index.js';
	import { Navbar, NavbarSection } from '$lib/comps/navs/navbar/index.js';
	import Pagination from '$lib/comps/navs/Pagination.svelte';
	import Button from '$lib/comps/forms/Button.svelte';
	import fileplus from 'lucide-svelte/icons/file-plus';
	import folder from 'lucide-svelte/icons/folder';
	import menu from 'lucide-svelte/icons/menu';
	import { Steps, Step } from '$lib/comps/navs/steps/index.js';
	import { Timeline, TimelineItem, TimelineSlot } from '$lib/comps/navs/timeline/index.js';
	import check from 'lucide-svelte/icons/check-circle-2';
	import star from 'lucide-svelte/icons/star';
	import heart from 'lucide-svelte/icons/heart';
	import bell from 'lucide-svelte/icons/bell';

	// Add state for drawers
	let basicDrawerOpen = $state(false);
	let responsiveDrawerOpen = $state(false);
	let endDrawerOpen = $state(false);

	// Add state for pagination
	let currentPage = $state(1);
</script>

<div class="space-y-4">
	<!-- Tabs Example -->
	<Card>
		<CardBody>
			<CardTitle>Tabs Components</CardTitle>
			<div class="flex flex-col lg:flex-row gap-4">
				<div class="flex-1">
					<Tabs style="box">
						<input
							type="radio"
							name="TabExample"
							role="tab"
							class="tab"
							aria-label="Tab 1"
							checked
						/>
						<TabContent>Content 1</TabContent>
						<input type="radio" name="TabExample" role="tab" class="tab" aria-label="Tab 2" />
						<TabContent>Content 2</TabContent>
						<input type="radio" name="TabExample" role="tab" class="tab" aria-label="Tab 3" />
						<TabContent>Content 3</TabContent>
					</Tabs>
				</div>
				<div class="flex-1">
					<Tabs style="lift">
						<input
							type="radio"
							name="TabExample2"
							role="tab"
							class="tab"
							aria-label="Tab 1"
							checked
						/>
						<TabContent>Content 1</TabContent>
						<input type="radio" name="TabExample2" role="tab" class="tab" aria-label="Tab 2" />
						<TabContent>Content 2</TabContent>
						<input type="radio" name="TabExample2" role="tab" class="tab" aria-label="Tab 3" />
						<TabContent>Content 3</TabContent>
					</Tabs>
				</div>
			</div>
		</CardBody>
	</Card>

	<!-- Accordion Examples -->
	<Card>
		<CardBody>
			<CardTitle>Basic Accordion</CardTitle>
			<Accordion>
				<AccordionItem name="basic-demo" title="How do I create an account?" checked>
					Click the "Sign Up" button in the top right corner and follow the registration process.
				</AccordionItem>
				<AccordionItem name="basic-demo" title="I forgot my password. What should I do?">
					Click on "Forgot Password" on the login page and follow the instructions sent to your
					email.
				</AccordionItem>
				<AccordionItem name="basic-demo" title="How do I update my profile information?">
					Go to "My Account" settings and select "Edit Profile" to make changes.
				</AccordionItem>
			</Accordion>
		</CardBody>
	</Card>

	<Card>
		<CardBody>
			<CardTitle>Accordion with Arrow Icons</CardTitle>
			<Accordion>
				<AccordionItem
					name="arrow-demo"
					variant="arrow"
					title="How do I create an account?"
					checked
				>
					Click the "Sign Up" button in the top right corner and follow the registration process.
				</AccordionItem>
				<AccordionItem
					name="arrow-demo"
					variant="arrow"
					title="I forgot my password. What should I do?"
				>
					Click on "Forgot Password" on the login page and follow the instructions sent to your
					email.
				</AccordionItem>
				<AccordionItem
					name="arrow-demo"
					variant="arrow"
					title="How do I update my profile information?"
				>
					Go to "My Account" settings and select "Edit Profile" to make changes.
				</AccordionItem>
			</Accordion>
		</CardBody>
	</Card>

	<Card>
		<CardBody>
			<CardTitle>Joined Accordion with Plus Icons</CardTitle>
			<Accordion joined>
				<AccordionItem
					name="plus-demo"
					variant="plus"
					title="How do I create an account?"
					checked
					class="join-item"
				>
					Click the "Sign Up" button in the top right corner and follow the registration process.
				</AccordionItem>
				<AccordionItem
					name="plus-demo"
					variant="plus"
					title="I forgot my password. What should I do?"
					class="join-item"
				>
					Click on "Forgot Password" on the login page and follow the instructions sent to your
					email.
				</AccordionItem>
				<AccordionItem
					name="plus-demo"
					variant="plus"
					title="How do I update my profile information?"
					class="join-item"
				>
					Go to "My Account" settings and select "Edit Profile" to make changes.
				</AccordionItem>
			</Accordion>
		</CardBody>
	</Card>

	<!-- Add before the "Other Navigation" card -->
	<Card>
		<CardBody>
			<CardTitle>Breadcrumbs</CardTitle>
			<div class="space-y-4">
				<!-- Basic -->
				<div>
					<h3 class="font-semibold mb-2">Basic Breadcrumbs</h3>
					<Breadcrumbs>
						<BreadcrumbItem href="home">Home</BreadcrumbItem>
						<BreadcrumbItem href="home/documents">Documents</BreadcrumbItem>
						<BreadcrumbItem>Add Document</BreadcrumbItem>
					</Breadcrumbs>
				</div>

				<!-- With Icons -->
				<div>
					<h3 class="font-semibold mb-2">Breadcrumbs with Icons</h3>
					<Breadcrumbs>
						<BreadcrumbItem href="home" icon={folder}>Home</BreadcrumbItem>
						<BreadcrumbItem href="home/documents" icon={folder}>Documents</BreadcrumbItem>
						<BreadcrumbItem icon={fileplus}>Add Document</BreadcrumbItem>
					</Breadcrumbs>
				</div>

				<!-- Max Width -->
				<div>
					<h3 class="font-semibold mb-2">Breadcrumbs with Max Width</h3>
					<Breadcrumbs maxWidth>
						<BreadcrumbItem href="section1">Long text 1</BreadcrumbItem>
						<BreadcrumbItem href="section1/section2">Long text 2</BreadcrumbItem>
						<BreadcrumbItem href="section1/section2/section3">Long text 3</BreadcrumbItem>
						<BreadcrumbItem href="section1/section2/section3/section4">Long text 4</BreadcrumbItem>
						<BreadcrumbItem>Long text 5</BreadcrumbItem>
					</Breadcrumbs>
				</div>
			</div>
		</CardBody>
	</Card>

	<!-- Add before Other Navigation -->
	<Card>
		<CardBody>
			<CardTitle>Drawer Navigation</CardTitle>
			<div class="space-y-4">
				<!-- Basic Drawer -->
				<div>
					<h3 class="font-semibold mb-2">Basic Drawer</h3>
					<div class="h-64 border rounded-lg relative overflow-hidden">
						<Drawer id="basic-drawer" bind:open={basicDrawerOpen}>
							<DrawerContent class="flex items-center justify-center">
								<Button onclick={() => (basicDrawerOpen = !basicDrawerOpen)}>Open Drawer</Button>
							</DrawerContent>
							<DrawerSide drawerId="basic-drawer">
								<ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
									<li><a href="#foo">Sidebar Item 1</a></li>
									<li><a href="#foo">Sidebar Item 2</a></li>
								</ul>
							</DrawerSide>
						</Drawer>
					</div>
				</div>

				<!-- Responsive Drawer -->
				<div>
					<h3 class="font-semibold mb-2">Responsive Drawer</h3>
					<div class="h-64 border rounded-lg relative overflow-hidden">
						<Drawer id="responsive-drawer" responsive bind:open={responsiveDrawerOpen}>
							<DrawerContent class="flex items-center justify-center">
								<Button
									onclick={() => (responsiveDrawerOpen = !responsiveDrawerOpen)}
									class="lg:hidden"
								>
									Open Drawer
								</Button>
							</DrawerContent>
							<DrawerSide drawerId="responsive-drawer">
								<ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
									<li><a href="#foo">Sidebar Item 1</a></li>
									<li><a href="#foo">Sidebar Item 2</a></li>
								</ul>
							</DrawerSide>
						</Drawer>
					</div>
				</div>

				<!-- Right Side Drawer -->
				<div>
					<h3 class="font-semibold mb-2">Right Side Drawer</h3>
					<div class="h-64 border rounded-lg relative overflow-hidden">
						<Drawer id="end-drawer" end bind:open={endDrawerOpen}>
							<DrawerContent class="flex items-center justify-center">
								<Button onclick={() => (endDrawerOpen = !endDrawerOpen)}>Open Right Drawer</Button>
							</DrawerContent>
							<DrawerSide drawerId="end-drawer">
								<ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
									<li><a href="#foo">Sidebar Item 1</a></li>
									<li><a href="#foo">Sidebar Item 2</a></li>
								</ul>
							</DrawerSide>
						</Drawer>
					</div>
				</div>
			</div>
		</CardBody>
	</Card>

	<!-- Add before "Other Navigation" -->
	<Card>
		<CardBody>
			<CardTitle>Dropdowns</CardTitle>
			<div class="space-y-4">
				<!-- Basic Dropdown -->
				<div>
					<h3 class="font-semibold mb-2">Basic Dropdown</h3>
					<Dropdown>
						<div tabindex="0" role="button" class="btn m-1">Click</div>
						<DropdownContent>
							<ul class="menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
								<li><a href="#foo">Item 1</a></li>
								<li><a href="#foo">Item 2</a></li>
							</ul>
						</DropdownContent>
					</Dropdown>
				</div>

				<!-- Hover Dropdown -->
				<div>
					<h3 class="font-semibold mb-2">Hover Dropdown</h3>
					<Dropdown hover>
						<div tabindex="0" role="button" class="btn m-1">Hover</div>
						<DropdownContent>
							<ul class="menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
								<li><a href="#foo">Item 1</a></li>
								<li><a href="#foo">Item 2</a></li>
							</ul>
						</DropdownContent>
					</Dropdown>
				</div>

				<!-- Positioned Dropdowns -->
				<div>
					<h3 class="font-semibold mb-2">Positioned Dropdowns</h3>
					<div class="flex flex-wrap gap-2">
						<Dropdown position="top" align="start">
							<div tabindex="0" role="button" class="btn">Top Start</div>
							<DropdownContent>
								<ul class="menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
									<li><a href="#foo">Item 1</a></li>
									<li><a href="#foo">Item 2</a></li>
								</ul>
							</DropdownContent>
						</Dropdown>

						<Dropdown position="bottom" align="end">
							<div tabindex="0" role="button" class="btn">Bottom End</div>
							<DropdownContent>
								<ul class="menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
									<li><a href="#foo">Item 1</a></li>
									<li><a href="#foo">Item 2</a></li>
								</ul>
							</DropdownContent>
						</Dropdown>
					</div>
				</div>
			</div>
		</CardBody>
	</Card>

	<!-- Add before "Other Navigation" -->
	<Card>
		<CardBody>
			<CardTitle>Navbar Examples</CardTitle>
			<div class="space-y-4">
				<!-- Basic Navbar -->
				<div>
					<h3 class="font-semibold mb-2">Basic Navbar</h3>
					<Navbar>
						<NavbarSection>
							<a href="#foo" class="btn btn-ghost text-xl">daisyUI</a>
						</NavbarSection>
					</Navbar>
				</div>

				<!-- Navbar with Sections -->
				<div>
					<h3 class="font-semibold mb-2">Navbar with Sections</h3>
					<Navbar>
						<NavbarSection>
							<a href="#foo" class="btn btn-ghost text-xl">Brand</a>
						</NavbarSection>
						<NavbarSection position="center">
							<ul class="menu menu-horizontal px-1">
								<li><a href="#foo">Link 1</a></li>
								<li><a href="#foo">Link 2</a></li>
							</ul>
						</NavbarSection>
						<NavbarSection position="end">
							<button class="btn">Login</button>
						</NavbarSection>
					</Navbar>
				</div>

				<!-- Colored Navbar -->
				<div>
					<h3 class="font-semibold mb-2">Colored Navbar</h3>
					<Navbar background="primary" class="mb-2">
						<NavbarSection>
							<a href="#foo" class="btn btn-ghost text-xl">Primary</a>
						</NavbarSection>
					</Navbar>
					<Navbar background="neutral">
						<NavbarSection>
							<a href="#foo" class="btn btn-ghost text-xl">Neutral</a>
						</NavbarSection>
					</Navbar>
				</div>
			</div>
		</CardBody>
	</Card>

	<!-- Add before "Other Navigation" -->
	<Card>
		<CardBody>
			<CardTitle>Pagination</CardTitle>
			<div class="space-y-4">
				<!-- Basic -->
				<div>
					<h3 class="font-semibold mb-2">Basic Pagination</h3>
					<Pagination totalPages={5} bind:currentPage />
					<p>Currently on page {currentPage}</p>
				</div>

				<!-- With Next/Prev -->
				<div>
					<h3 class="font-semibold mb-2">With Next/Prev Buttons</h3>
					<Pagination totalPages={5} showNextPrev />
				</div>

				<!-- Sizes -->
				<div>
					<h3 class="font-semibold mb-2">Pagination Sizes</h3>
					<div class="space-y-2">
						<Pagination totalPages={3} size="xs" />
						<Pagination totalPages={3} size="sm" />
						<Pagination totalPages={3} />
						<Pagination totalPages={3} size="lg" />
						<Pagination totalPages={3} size="xl" />
					</div>
				</div>

				<!-- Many Pages -->
				<div>
					<h3 class="font-semibold mb-2">Many Pages</h3>
					<Pagination totalPages={100} showNextPrev maxVisible={7} />
				</div>
			</div>
		</CardBody>
	</Card>

	<!-- Add before "Other Navigation" -->
	<Card>
		<CardBody>
			<CardTitle>Steps</CardTitle>
			<div class="space-y-4">
				<!-- Basic Steps -->
				<div>
					<h3 class="font-semibold mb-2">Basic Steps</h3>
					<Steps>
						<Step color="primary">Register</Step>
						<Step color="primary">Choose plan</Step>
						<Step>Purchase</Step>
						<Step>Receive Product</Step>
					</Steps>
				</div>

				<!-- Vertical Steps -->
				<div>
					<h3 class="font-semibold mb-2">Vertical Steps</h3>
					<Steps direction="vertical">
						<Step color="primary">Register</Step>
						<Step color="primary">Choose plan</Step>
						<Step>Purchase</Step>
						<Step>Receive Product</Step>
					</Steps>
				</div>

				<!-- Responsive Steps -->
				<div>
					<h3 class="font-semibold mb-2">Responsive Steps</h3>
					<Steps responsive>
						<Step color="primary">Register</Step>
						<Step color="primary">Choose plan</Step>
						<Step>Purchase</Step>
						<Step>Receive Product</Step>
					</Steps>
				</div>

				<!-- Steps with Content -->
				<div>
					<h3 class="font-semibold mb-2">Steps with Content</h3>
					<Steps>
						<Step color="neutral" content="★">Step 1</Step>
						<Step color="neutral" content="✓">Step 2</Step>
						<Step color="neutral" content="●">Step 3</Step>
					</Steps>
				</div>

				<!-- Steps with Icons -->
				<div>
					<h3 class="font-semibold mb-2">Steps with Icons</h3>
					<Steps>
						<Step color="neutral" icon={folder}>Step 1</Step>
						<Step color="neutral" icon={fileplus}>Step 2</Step>
						<Step icon={folder}>Step 3</Step>
					</Steps>
				</div>

				<!-- Steps with Colors -->
				<div>
					<h3 class="font-semibold mb-2">Steps with Colors</h3>
					<Steps>
						<Step color="info">Step 1</Step>
						<Step color="success">Step 2</Step>
						<Step color="warning">Step 3</Step>
						<Step color="error">Step 4</Step>
					</Steps>
				</div>
			</div>
		</CardBody>
	</Card>

	<!-- Add before "Other Navigation" -->
	<Card>
		<CardBody>
			<CardTitle>Timeline</CardTitle>
			<div class="space-y-4">
				<!-- Basic Timeline -->
				<div>
					<h3 class="font-semibold mb-2">Basic Timeline</h3>
					<Timeline>
						<TimelineItem>
							<TimelineSlot position="start">1984</TimelineSlot>
							<TimelineSlot position="middle" icon={check} color="primary" />
							<TimelineSlot position="end" box>First Macintosh computer</TimelineSlot>
						</TimelineItem>
						<TimelineItem>
							<TimelineSlot position="start">1998</TimelineSlot>
							<TimelineSlot position="middle" icon={check} color="primary" />
							<TimelineSlot position="end" box>iMac</TimelineSlot>
						</TimelineItem>
						<TimelineItem>
							<TimelineSlot position="start">2001</TimelineSlot>
							<TimelineSlot position="middle" icon={check} />
							<TimelineSlot position="end" box>iPod</TimelineSlot>
						</TimelineItem>
					</Timeline>
				</div>

				<!-- Horizontal Timeline -->
				<div>
					<h3 class="font-semibold mb-2">Horizontal Timeline</h3>
					<Timeline direction="horizontal">
						<TimelineItem>
							<TimelineSlot position="start" box>Register</TimelineSlot>
							<TimelineSlot position="middle" icon={check} color="primary" />
						</TimelineItem>
						<TimelineItem>
							<TimelineSlot position="start" box>Choose plan</TimelineSlot>
							<TimelineSlot position="middle" icon={check} color="primary" />
						</TimelineItem>
						<TimelineItem>
							<TimelineSlot position="start" box>Purchase</TimelineSlot>
							<TimelineSlot position="middle" icon={check} />
						</TimelineItem>
					</Timeline>
				</div>

				<!-- Responsive Timeline -->
				<div>
					<h3 class="font-semibold mb-2">Responsive Timeline</h3>
					<Timeline responsive>
						<TimelineItem>
							<TimelineSlot position="start">2021</TimelineSlot>
							<TimelineSlot position="middle" icon={check} color="primary" />
							<TimelineSlot position="end" box>Phase 1</TimelineSlot>
						</TimelineItem>
						<TimelineItem>
							<TimelineSlot position="start">2022</TimelineSlot>
							<TimelineSlot position="middle" icon={check} color="primary" />
							<TimelineSlot position="end" box>Phase 2</TimelineSlot>
						</TimelineItem>
						<TimelineItem>
							<TimelineSlot position="start">2023</TimelineSlot>
							<TimelineSlot position="middle" icon={check} />
							<TimelineSlot position="end" box>Phase 3</TimelineSlot>
						</TimelineItem>
					</Timeline>
				</div>

				<!-- Compact Timeline -->
				<div>
					<h3 class="font-semibold mb-2">Compact Timeline</h3>
					<Timeline compact>
						<TimelineItem>
							<TimelineSlot position="middle" icon={check} color="primary" />
							<TimelineSlot position="end" box>First step</TimelineSlot>
						</TimelineItem>
						<TimelineItem>
							<TimelineSlot position="middle" icon={check} color="primary" />
							<TimelineSlot position="end" box>Second step</TimelineSlot>
						</TimelineItem>
						<TimelineItem>
							<TimelineSlot position="middle" icon={check} />
							<TimelineSlot position="end" box>Final step</TimelineSlot>
						</TimelineItem>
					</Timeline>
				</div>

				<!-- Timeline with Colors -->
				<div>
					<h3 class="font-semibold mb-2">Timeline with Colors</h3>
					<Timeline>
						<TimelineItem>
							<TimelineSlot position="start">Step 1</TimelineSlot>
							<TimelineSlot position="middle" icon={check} color="primary" />
							<TimelineSlot position="end" box>Primary Icon</TimelineSlot>
						</TimelineItem>
						<TimelineItem>
							<TimelineSlot position="start">Step 2</TimelineSlot>
							<TimelineSlot position="middle" icon={star} color="secondary" />
							<TimelineSlot position="end" box>Secondary Icon</TimelineSlot>
						</TimelineItem>
						<TimelineItem>
							<TimelineSlot position="start">Step 3</TimelineSlot>
							<TimelineSlot position="middle" icon={heart} color="accent" />
							<TimelineSlot position="end" box>Accent Icon</TimelineSlot>
						</TimelineItem>
						<TimelineItem>
							<TimelineSlot position="start">Step 4</TimelineSlot>
							<TimelineSlot position="middle" icon={bell} color="error" />
							<TimelineSlot position="end" box>Error Icon</TimelineSlot>
						</TimelineItem>
					</Timeline>
				</div>

				<!-- Timeline with Snap Icon to Start -->
				<div>
					<h3 class="font-semibold mb-2">Timeline with Snap Icon to Start</h3>
					<Timeline snapIconToStart>
						<TimelineItem>
							<TimelineSlot position="middle" icon={check} color="success" />
							<TimelineSlot position="end" box>
								<time class="font-mono">2024</time>
								<div class="text-lg font-bold">Project Launch</div>
								<p class="text-sm opacity-70">Successfully launched the new platform</p>
							</TimelineSlot>
						</TimelineItem>
						<TimelineItem>
							<TimelineSlot position="middle" icon={star} color="warning" />
							<TimelineSlot position="end" box>
								<time class="font-mono">2025</time>
								<div class="text-lg font-bold">Major Update</div>
								<p class="text-sm opacity-70">Released version 2.0 with new features</p>
							</TimelineSlot>
						</TimelineItem>
					</Timeline>
				</div>

				<!-- Timeline with Rich Content -->
				<div>
					<h3 class="font-semibold mb-2">Timeline with Rich Content</h3>
					<Timeline>
						<TimelineItem>
							<TimelineSlot position="start">
								<div class="text-sm opacity-60">Phase 1</div>
								<div class="text-lg font-bold">Planning</div>
							</TimelineSlot>
							<TimelineSlot position="middle" icon={check} color="info" />
							<TimelineSlot position="end" box>
								<div class="p-4">
									<h4 class="font-bold">Project Initialization</h4>
									<ul class="list-disc list-inside text-sm opacity-70">
										<li>Requirements gathering</li>
										<li>Team assembly</li>
										<li>Resource allocation</li>
									</ul>
								</div>
							</TimelineSlot>
						</TimelineItem>
						<TimelineItem>
							<TimelineSlot position="start">
								<div class="text-sm opacity-60">Phase 2</div>
								<div class="text-lg font-bold">Development</div>
							</TimelineSlot>
							<TimelineSlot position="middle" icon={check} color="success" />
							<TimelineSlot position="end" box>
								<div class="p-4">
									<h4 class="font-bold">Implementation</h4>
									<div class="mt-2 flex gap-2">
										<span class="badge badge-primary">Frontend</span>
										<span class="badge badge-secondary">Backend</span>
										<span class="badge badge-accent">Testing</span>
									</div>
								</div>
							</TimelineSlot>
						</TimelineItem>
					</Timeline>
				</div>
			</div>
		</CardBody>
	</Card>

	<!-- Other Navigation -->
	<Card>
		<CardBody>
			<CardTitle>Other Navigation Components</CardTitle>
			<p class="text-base-content/70">More navigation components coming soon...</p>
		</CardBody>
	</Card>
</div>
