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
	import Toast from '$lib/comps/feedback/toast/Toast.svelte';
	import ToastContainer from '$lib/comps/feedback/toast/ToastContainer.svelte';
</script>

<ToastContainer />

<main class="p-4 space-y-8">
	<div class="flex justify-between items-center">
		<h1 class="text-2xl font-bold">Components</h1>
		<ThemeToggle />
	</div>

	<!-- Category Navigation -->
	<Tabs style="lift" class="mb-8 justify-center">
		<TabContent name="categories" aria="Form Controls" background="bg-primary/50">
			<FormControls />
		</TabContent>

		<TabContent name="categories" aria="Navigation" background="bg-accent/50">
			<Navigation />
		</TabContent>

		<TabContent name="categories" aria="Layout" background="bg-info/50">
			<Layout />
		</TabContent>

		<TabContent name="categories" aria="Feedback" background="bg-warning/50">
			<Feedback />
		</TabContent>

		<TabContent name="categories" aria="Display" background="bg-success/50">
			<Card>
				<CardBody>
					<CardTitle>Display Components</CardTitle>
					<MediaExamples />
				</CardBody>
			</Card>
		</TabContent>

		<TabContent name="categories" aria="Mockups" background="bg-error/50">
			<Card>
				<CardBody>
					<CardTitle>Mockup Components</CardTitle>
					<MockUpsExamples />
				</CardBody>
			</Card>
		</TabContent>

		<TabContent name="categories" aria="Utilities" background="bg-cyan-700/50">
			<Card>
				<CardBody>
					<CardTitle>Utility Components</CardTitle>
					<UtilsExamples />
				</CardBody>
			</Card>
		</TabContent>
	</Tabs>
</main>
