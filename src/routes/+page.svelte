<script lang="ts">
	import ThemeToggle from '$lib/comps/forms/ThemeToggle.svelte';
	import { Card, CardBody, CardTitle } from '$lib/comps/layout/card/index.js';
	import { Tabs, TabContent } from '$lib/comps/navs/tabs/index.js';
	import FormControls from '$lib/examples/FormControls.svelte';
	import Navigation from '$lib/examples/Navigation.svelte';
	import Layout from '$lib/examples/Layout.svelte';
	import Feedback from '$lib/examples/Feedback.svelte';
</script>

<main class="p-4 space-y-8">
	<div class="flex justify-between items-center">
		<h1 class="text-2xl font-bold">Components</h1>
		<ThemeToggle />
	</div>

	<!-- Category Navigation -->
	<Card>
		<CardBody>
			<CardTitle>Component Categories</CardTitle>
			<Tabs style="lift" class="mb-8">
				<input
					type="radio"
					name="categories"
					role="tab"
					class="tab"
					aria-label="Form Controls"
					checked
				/>
				<TabContent>
					<FormControls />
				</TabContent>

				<input
					type="radio"
					name="categories"
					role="tab"
					class="tab"
					aria-label="Navigation & Structure"
				/>
				<TabContent>
					<Navigation />
				</TabContent>

				<input
					type="radio"
					name="categories"
					role="tab"
					class="tab"
					aria-label="Layout & Containers"
				/>
				<TabContent>
					<Layout />
				</TabContent>

				<input
					type="radio"
					name="categories"
					role="tab"
					class="tab"
					aria-label="Feedback & Status"
				/>
				<TabContent>
					<Feedback />
				</TabContent>

				<input type="radio" name="categories" role="tab" class="tab" aria-label="Display & Media" />
				<TabContent>
					<Card>
						<CardBody>
							<CardTitle>Display Components</CardTitle>
							<p class="text-base-content/70">Display and media components coming soon...</p>
						</CardBody>
					</Card>
				</TabContent>

				<input type="radio" name="categories" role="tab" class="tab" aria-label="Mockups" />
				<TabContent>
					<Card>
						<CardBody>
							<CardTitle>Mockup Components</CardTitle>
							<p class="text-base-content/70">Mockup components coming soon...</p>
						</CardBody>
					</Card>
				</TabContent>

				<input type="radio" name="categories" role="tab" class="tab" aria-label="Utilities" />
				<TabContent>
					<Card>
						<CardBody>
							<CardTitle>Utility Components</CardTitle>
							<p class="text-base-content/70">Utility components coming soon...</p>
						</CardBody>
					</Card>
				</TabContent>
			</Tabs>
		</CardBody>
	</Card>
</main>
