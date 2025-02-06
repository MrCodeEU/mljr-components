<script lang="ts">
	// Layout imports
	import { Card, CardBody, CardTitle } from '$lib/comps/layout/card/index.js';
	import { Collapse, CollapseTitle, CollapseContent } from '$lib/comps/layout/collapse/index.js';
	import { Divider } from '$lib/comps/layout/divider/index.js';
	import { Footer, FooterTitle, FooterCompanySection } from '$lib/comps/layout/footer/index.js';
	import { Hero, HeroContent, HeroOverlay } from '$lib/comps/layout/hero/index.js';
	import Button from '$lib/comps/forms/Button.svelte';
	import Join from '$lib/comps/layout/Join.svelte';
	import Stack from '$lib/comps/layout/Stack.svelte';
	import Table from '$lib/comps/layout/Table.svelte';
</script>

<div class="space-y-4">
	<Card>
		<CardBody>
			<CardTitle>Card Components</CardTitle>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
				<Card style="border">
					<CardBody>
						<CardTitle>Border Style</CardTitle>
						<p>Card with border style</p>
					</CardBody>
				</Card>
				<Card modifier="side" class="h-32">
					<figure>
						<img src="https://picsum.photos/100/100" alt="Side" />
					</figure>
					<CardBody>
						<CardTitle>Side Image</CardTitle>
						<p>Card with side image</p>
					</CardBody>
				</Card>
			</div>
		</CardBody>
	</Card>

	<Card>
		<CardBody>
			<CardTitle>Collapse Components</CardTitle>
			<div class="grid grid-cols-1 gap-4">
				<Collapse icon="arrow">
					<CollapseTitle>Click me to show/hide content</CollapseTitle>
					<CollapseContent>
						<p>This is the collapse content that can be toggled</p>
					</CollapseContent>
				</Collapse>

				<Collapse icon="plus" useFocus={false}>
					<CollapseTitle>Checkbox-based collapse with plus/minus</CollapseTitle>
					<CollapseContent>
						<p>This collapse uses a checkbox instead of focus to control state</p>
					</CollapseContent>
				</Collapse>

				<Collapse open={true}>
					<CollapseTitle>Force open collapse</CollapseTitle>
					<CollapseContent>
						<p>This collapse is forced to stay open</p>
					</CollapseContent>
				</Collapse>
			</div>
		</CardBody>
	</Card>

	<Card>
		<CardBody>
			<CardTitle>Divider Components</CardTitle>
			<div class="space-y-4">
				<div class="flex w-full flex-col">
					<div class="card bg-base-300 rounded-box grid h-20 place-items-center">content</div>
					<Divider>OR</Divider>
					<div class="card bg-base-300 rounded-box grid h-20 place-items-center">content</div>
				</div>

				<div class="flex w-full">
					<div class="card bg-base-300 rounded-box grid h-20 grow place-items-center">content</div>
					<Divider direction="horizontal">OR</Divider>
					<div class="card bg-base-300 rounded-box grid h-20 grow place-items-center">content</div>
				</div>

				<div class="flex w-full flex-col">
					<Divider>Default</Divider>
					<Divider color="primary">Primary</Divider>
					<Divider color="secondary">Secondary</Divider>
					<Divider color="accent">Accent</Divider>
				</div>

				<div class="flex w-full flex-col">
					<Divider placement="start">Start</Divider>
					<Divider>Default</Divider>
					<Divider placement="end">End</Divider>
				</div>
			</div>
		</CardBody>
	</Card>

	<Card>
		<CardBody>
			<CardTitle>Footer Components</CardTitle>
			<div class="space-y-4">
				<!-- Basic Footer -->
				<Footer background="neutral" class="p-10">
					<nav>
						<FooterTitle>Services</FooterTitle>
						<a class="link link-hover">Branding</a>
						<a class="link link-hover">Design</a>
						<a class="link link-hover">Marketing</a>
					</nav>
					<nav>
						<FooterTitle>Company</FooterTitle>
						<a class="link link-hover">About us</a>
						<a class="link link-hover">Contact</a>
						<a class="link link-hover">Jobs</a>
					</nav>
				</Footer>

				<!-- Centered Footer with Border -->
				<Footer center background="base-300" border itemsCenter class="p-4">
					<aside>
						<p>
							Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd
						</p>
					</aside>
				</Footer>

				<!-- Two Row Footer -->
				<Footer background="neutral" rows={2} class="p-10">
					<nav>
						<FooterTitle>Services</FooterTitle>
						<a class="link link-hover">Branding</a>
						<a class="link link-hover">Design</a>
					</nav>
					<nav>
						<FooterTitle>Legal</FooterTitle>
						<a class="link link-hover">Terms</a>
						<a class="link link-hover">Privacy</a>
					</nav>
					<nav>
						<FooterTitle>Legal</FooterTitle>
						<a class="link link-hover">Terms</a>
						<a class="link link-hover">Privacy</a>
					</nav>
				</Footer>

				<!-- Rounded Footer -->
				<Footer center background="base-200" rounded class="p-10">
					<nav class="grid grid-flow-col gap-4">
						<a class="link link-hover">About us</a>
						<a class="link link-hover">Contact</a>
					</nav>
				</Footer>

				<Footer center background="base-300" class="p-4">
					<aside>
						<p>
							Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd
						</p>
					</aside>
				</Footer>

				<Footer background="primary" center class="p-10">
					<aside>
						<p class="font-bold">ACME Industries Ltd.</p>
						<p>Providing reliable tech since 1992</p>
					</aside>
					<nav>
						<div class="grid grid-flow-col gap-4">
							<a
								><svg
									class="fill-current w-6 h-6"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									><path
										d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
									></path></svg
								></a
							>
						</div>
					</nav>
				</Footer>

				<!-- Footer with Company Section -->
				<Footer background="base-200" class="p-10">
					<FooterCompanySection
						name="ACME Industries Ltd."
						tagline="Providing reliable tech since 1992"
					/>
					<nav>
						<FooterTitle>Services</FooterTitle>
						<a class="link link-hover">Branding</a>
						<a class="link link-hover">Design</a>
					</nav>
				</Footer>
			</div>
		</CardBody>
	</Card>

	<Card>
		<CardBody>
			<CardTitle>Hero Components</CardTitle>
			<div class="space-y-4">
				<Hero background="base-200" minHeight>
					<HeroContent center>
						<div class="max-w-md">
							<h1 class="text-5xl font-bold">Hello there</h1>
							<p class="py-6">Provident cupiditate voluptatem et in.</p>
							<Button color="primary">Get Started</Button>
						</div>
					</HeroContent>
				</Hero>

				<Hero background="base-200" minHeight>
					<HeroContent layout="row">
						<img
							src="https://picsum.photos/400/300"
							class="max-w-sm rounded-lg shadow-2xl"
							alt="Hero"
						/>
						<div>
							<h1 class="text-5xl font-bold">Box Office News!</h1>
							<p class="py-6">Provident cupiditate voluptatem et in.</p>
							<Button color="primary">Get Started</Button>
						</div>
					</HeroContent>
				</Hero>

				<Hero backgroundImage="https://picsum.photos/1200/600" minHeight>
					<HeroOverlay />
					<HeroContent center>
						<div class="max-w-md text-neutral-content">
							<h1 class="mb-5 text-5xl font-bold">Hello there</h1>
							<p class="mb-5">Provident cupiditate voluptatem et in.</p>
							<Button color="primary">Get Started</Button>
						</div>
					</HeroContent>
				</Hero>
			</div>
		</CardBody>
	</Card>

	<Card>
		<CardBody>
			<CardTitle>Join Components</CardTitle>
			<div class="space-y-4">
				<Join>
					<Button class="join-item">Button</Button>
					<Button class="join-item">Button</Button>
					<Button class="join-item">Button</Button>
				</Join>

				<Join direction="vertical">
					<Button class="join-item">Button</Button>
					<Button class="join-item">Button</Button>
					<Button class="join-item">Button</Button>
				</Join>

				<Join direction="vertical" responsive="lg">
					<Button class="join-item">Button</Button>
					<input class="input input-bordered join-item" placeholder="Email" />
					<Button class="join-item rounded-r-full">Subscribe</Button>
				</Join>

				<Join>
					<input type="radio" name="options" class="join-item btn" aria-label="Radio 1" />
					<input type="radio" name="options" class="join-item btn" aria-label="Radio 2" />
					<input type="radio" name="options" class="join-item btn" aria-label="Radio 3" />
				</Join>
			</div>
		</CardBody>
	</Card>

	<Card>
		<CardBody>
			<CardTitle>Stack Components</CardTitle>
			<div class="space-y-4">
				<Stack class="h-20 w-32">
					<div class="bg-primary text-primary-content grid place-content-center rounded-box">1</div>
					<div class="bg-accent text-accent-content grid place-content-center rounded-box">2</div>
					<div class="bg-secondary text-secondary-content grid place-content-center rounded-box">
						3
					</div>
				</Stack>

				<Stack class="w-48">
					<img src="https://picsum.photos/200/100" alt="1" class="rounded-box" />
					<img src="https://picsum.photos/200/100" alt="2" class="rounded-box" />
					<img src="https://picsum.photos/200/100" alt="3" class="rounded-box" />
				</Stack>

				<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
					<Stack align="bottom" class="size-28">
						<div class="border-base-content card bg-base-100 border text-center">
							<div class="card-body">Bottom</div>
						</div>
						<div class="border-base-content card bg-base-100 border text-center">
							<div class="card-body">Default</div>
						</div>
					</Stack>

					<Stack align="top" class="size-28">
						<div class="border-base-content card bg-base-100 border text-center">
							<div class="card-body">Top</div>
						</div>
						<div class="border-base-content card bg-base-100 border text-center">
							<div class="card-body">Align</div>
						</div>
					</Stack>

					<Stack align="start" class="size-28">
						<div class="border-base-content card bg-base-100 border text-center">
							<div class="card-body">Start</div>
						</div>
						<div class="border-base-content card bg-base-100 border text-center">
							<div class="card-body">Align</div>
						</div>
					</Stack>
				</div>

				<Stack>
					<div class="card shadow-md bg-base-100">
						<div class="card-body">
							<h2 class="card-title">Notification 1</h2>
							<p>You have 3 unread messages. Tap here to see.</p>
						</div>
					</div>
					<div class="card shadow bg-base-100">
						<div class="card-body">
							<h2 class="card-title">Notification 2</h2>
							<p>You have 3 unread messages. Tap here to see.</p>
						</div>
					</div>
				</Stack>
			</div>
		</CardBody>
	</Card>

	<Card>
		<CardBody>
			<CardTitle>Table Components</CardTitle>
			<div class="space-y-4">
				<!-- Basic Table -->
				<div class="overflow-x-auto">
					<Table>
						<thead>
							<tr>
								<th></th>
								<th>Name</th>
								<th>Job</th>
								<th>Favorite Color</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th>1</th>
								<td>Cy Ganderton</td>
								<td>Quality Control Specialist</td>
								<td>Blue</td>
							</tr>
							<tr>
								<th>2</th>
								<td>Hart Hagerty</td>
								<td>Desktop Support Technician</td>
								<td>Purple</td>
							</tr>
						</tbody>
					</Table>
				</div>

				<!-- Zebra Table -->
				<div class="overflow-x-auto">
					<Table zebra>
						<thead>
							<tr>
								<th></th>
								<th>Name</th>
								<th>Job</th>
								<th>Favorite Color</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th>1</th>
								<td>Cy Ganderton</td>
								<td>Quality Control Specialist</td>
								<td>Blue</td>
							</tr>
							<tr>
								<th>2</th>
								<td>Hart Hagerty</td>
								<td>Desktop Support Technician</td>
								<td>Purple</td>
							</tr>
						</tbody>
					</Table>
				</div>

				<!-- Pinned Rows and Columns -->
				<div class="overflow-x-auto h-48">
					<Table pinRows pinCols size="xs">
						<thead>
							<tr>
								<th>ID</th>
								<td>Name</td>
								<td>Job</td>
								<td>Company</td>
							</tr>
						</thead>
						<tbody>
							{#each Array(10) as _, i}
								<tr>
									<th>{i + 1}</th>
									<td>John Doe</td>
									<td>Software Engineer</td>
									<td>Tech Corp</td>
								</tr>
							{/each}
						</tbody>
						<tfoot>
							<tr>
								<th>ID</th>
								<td>Name</td>
								<td>Job</td>
								<td>Company</td>
							</tr>
						</tfoot>
					</Table>
				</div>

				<!-- Table Sizes -->
				<div class="grid grid-cols-1 gap-4">
					{#each ['xs', 'sm', 'md', 'lg', 'xl'] as size, i (i)}
						<div class="overflow-x-auto">
							<Table size={size as 'xs' | 'sm' | 'md' | 'lg' | 'xl'}>
								<thead>
									<tr>
										<th>Size: {size}</th>
										<th>Name</th>
										<th>Job</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<th>1</th>
										<td>Cy Ganderton</td>
										<td>Quality Control Specialist</td>
									</tr>
								</tbody>
							</Table>
						</div>
					{/each}
				</div>
			</div>
		</CardBody>
	</Card>
</div>
