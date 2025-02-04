<script lang="ts">
	import ThemeToggle from '$lib/comps/forms/ThemeToggle.svelte';
	import { Card, CardBody, CardTitle } from '$lib/comps/layout/card/index.js';
	import { Tabs, TabContent } from '$lib/comps/navs/tabs/index.js';
	import FormControls from '$lib/examples/FormControls.svelte';
	import Navigation from '$lib/examples/Navigation.svelte';
	import Layout from '$lib/examples/Layout.svelte';
	import Feedback from '$lib/examples/Feedback.svelte';
	import MediaExamples from '$lib/examples/MediaExamples.svelte';
	import MockUpsExamples from '$lib/examples/MockUpsExamples.svelte';
	import UtilsExamples from '$lib/examples/UtilsExamples.svelte';
</script>

<main class="p-4 space-y-8">
	<div class="flex justify-between items-center">
		<h1 class="text-2xl font-bold">Components</h1>
		<ThemeToggle />
	</div>

	<!-- Category Navigation -->
	<Tabs style="lift" class="mb-8">
		<TabContent name="categories" aria="Form Controls">
			<FormControls />
		</TabContent>

		<TabContent name="categories" aria="Navigation">
			<Navigation />
		</TabContent>

		<TabContent name="categories" aria="Layout">
			<Layout />
		</TabContent>

		<TabContent name="categories" aria="Feedback">
			<Feedback />
		</TabContent>

		<TabContent name="categories" aria="Display">
			<Card>
				<CardBody>
					<CardTitle>Display Components</CardTitle>
					<MediaExamples />
				</CardBody>
			</Card>
		</TabContent>

		<TabContent name="categories" aria="Mockups">
			<Card>
				<CardBody>
					<CardTitle>Mockup Components</CardTitle>
					<MockUpsExamples />
				</CardBody>
			</Card>
		</TabContent>

		<TabContent name="categories" aria="Utilities">
			<Card>
				<CardBody>
					<CardTitle>Utility Components</CardTitle>
					<UtilsExamples />
				</CardBody>
			</Card>
		</TabContent>
	</Tabs>
</main>
