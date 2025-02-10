<script lang="ts">
	import { Card, CardBody, CardTitle } from '$lib/comps/layout/card/index.js';
	import Browser from '$lib/comps/mockups/Browser.svelte';
	import Code from '$lib/comps/mockups/Code.svelte';
	import Phone from '$lib/comps/mockups/Phone.svelte';
	import Window from '$lib/comps/mockups/Window.svelte';
</script>

<Card>
	<CardBody>
		<CardTitle>Browser</CardTitle>
		<Browser url="https://www.google.com">
			<div class="flex flex-col gap-4 p-6 border-t border-base-300">
				<div class="flex justify-center">
					<div class="w-2/3">
						<input
							type="text"
							placeholder="Search..."
							class="w-full px-4 py-2 rounded-full border border-gray-300"
						/>
					</div>
				</div>
				<div class="grid grid-cols-3 gap-4">
					<div class="p-4 bg-base-200 rounded-lg aspect-video flex items-center justify-center">
						<span class="text-4xl">📱</span>
						<span class="text-4xl">Mobile</span>
					</div>
					<div class="p-4 bg-base-200 rounded-lg aspect-video flex items-center justify-center">
						<span class="text-4xl">💻</span>
						<span class="text-4xl">Laptop</span>
					</div>
					<div class="p-4 bg-base-200 rounded-lg aspect-video flex items-center justify-center">
						<span class="text-4xl">🖥️</span>
						<span class="text-4xl">Desktop</span>
					</div>
				</div>
			</div>
		</Browser>
	</CardBody>
</Card>

<Card>
	<CardBody class="flex flex-col gap-4">
		<CardTitle>Code</CardTitle>

		<Code lines={[{ prefix: '$', content: 'npm i daisyui' }]} />

		<Code
			lines={[
				{ prefix: '$', content: 'npm i daisyui' },
				{ prefix: '>', content: 'installing...', className: 'text-warning' },
				{ prefix: '>', content: 'Done!', className: 'text-success' }
			]}
		/>

		<Code
			lines={[
				{ prefix: '1', content: 'npm i daisyui' },
				{ prefix: '2', content: 'installing...' },
				{ prefix: '3', content: 'Error!', className: 'bg-warning text-warning-content' }
			]}
		/>

		<Code className="bg-primary text-primary-content" lines={[{ content: 'can be any color!' }]} />
	</CardBody>
</Card>

<Card>
	<CardBody class="flex flex-col gap-4">
		<CardTitle>Phone</CardTitle>
		<div class="flex justify-around">
			<Phone>
				<div class="text-white grid place-content-center h-full">It's Glowtime.</div>
			</Phone>

			<Phone
				borderClass="border-primary"
				bgImage="https://www.iclarified.com/images/news/94911/453966/453966.jpg"
			/>
		</div>
	</CardBody>
</Card>

<Card>
	<CardBody class="flex flex-col gap-4">
		<CardTitle>Window</CardTitle>
		<Window>Hello!</Window>

		<Window bgClass="bg-base-100">Hello with background!</Window>
	</CardBody>
</Card>
