<script lang="ts">
	import { Card, CardBody, CardTitle } from '$lib/comps/layout/card/index.js';
	import Countdown from '$lib/comps/utils/Countdown.svelte';
	import Filter from '$lib/comps/utils/Filter.svelte';
	import Kbd from '$lib/comps/utils/Kbd.svelte';
	import { onDestroy } from 'svelte';
	import TextInput from '$lib/comps/forms/input/TextInput.svelte';
	import Select from '$lib/comps/forms/Select.svelte';
	import DateTimeInput from '$lib/comps/forms/input/DateTimeInput.svelte';
	import Label from '$lib/comps/utils/Label.svelte';
	import FloatingLabel from '$lib/comps/utils/FloatingLabel.svelte';
	import Link from '$lib/comps/utils/Link.svelte';
	import { List, ListRow, ListCol } from '$lib/comps/utils/list/index.js';

	// Basic countdown from 60
	let basicValue = 60;
	const basicInterval = setInterval(() => {
		basicValue = basicValue > 0 ? basicValue - 1 : 60;
	}, 1000);

	// Clock style countdown
	let hours = 1;
	let minutes = 30;
	let seconds = 0;
	const clockInterval = setInterval(() => {
		if (seconds > 0) {
			seconds--;
		} else {
			seconds = 59;
			if (minutes > 0) {
				minutes--;
			} else {
				minutes = 59;
				if (hours > 0) {
					hours--;
				} else {
					hours = 1;
					minutes = 30;
					seconds = 0;
				}
			}
		}
	}, 1000);

	// Event countdown (24 hours from now)
	let eventDays = 0;
	let eventHours = 24;
	let eventMinutes = 0;
	let eventSeconds = 0;
	const eventInterval = setInterval(() => {
		if (eventSeconds > 0) {
			eventSeconds--;
		} else {
			eventSeconds = 59;
			if (eventMinutes > 0) {
				eventMinutes--;
			} else {
				eventMinutes = 59;
				if (eventHours > 0) {
					eventHours--;
				} else {
					// Reset to 24 hours
					eventHours = 24;
					eventMinutes = 0;
					eventSeconds = 0;
				}
			}
		}
	}, 1000);

	const frameworks = [
		{ value: 'svelte', label: 'Svelte' },
		{ value: 'vue', label: 'Vue' },
		{ value: 'react', label: 'React' }
	];

	const metaFrameworks = [
		{ value: 'sveltekit', label: 'Sveltekit' },
		{ value: 'nuxt', label: 'Nuxt' },
		{ value: 'nextjs', label: 'Next.js' }
	];

	onDestroy(() => {
		clearInterval(basicInterval);
		clearInterval(clockInterval);
		clearInterval(eventInterval);
	});
</script>

<Card>
	<CardBody class="flex flex-col gap-4">
		<CardTitle>Countdown</CardTitle>
		<!-- Basic -->
		<Countdown value={basicValue} />

		<!-- Large -->
		<Countdown value={basicValue} size="text-6xl" />

		<!-- Clock style -->
		<div class="flex gap-2 items-center">
			<Countdown value={hours} size="text-2xl" separator=":" />
			<Countdown value={minutes} size="text-2xl" separator=":" />
			<Countdown value={seconds} size="text-2xl" />
		</div>

		<!-- Event countdown -->
		<div class="flex gap-5">
			<Countdown value={eventDays} size="text-4xl" label="days" />
			<Countdown value={eventHours} size="text-4xl" label="hours" />
			<Countdown value={eventMinutes} size="text-4xl" label="min" />
			<Countdown value={eventSeconds} size="text-4xl" label="sec" />
		</div>

		<!-- Boxed style -->
		<div class="grid auto-cols-max grid-flow-col gap-5 text-center">
			<Countdown value={eventDays} size="text-5xl" label="days" boxed />
			<Countdown value={eventHours} size="text-5xl" label="hours" boxed />
			<Countdown value={eventMinutes} size="text-5xl" label="min" boxed />
			<Countdown value={eventSeconds} size="text-5xl" label="sec" boxed />
		</div>
	</CardBody>
</Card>

<Card>
	<CardBody class="flex flex-col gap-4">
		<CardTitle>Filter</CardTitle>
		<div class="space-y-4">
			<h3 class="font-bold">Form-based Filter</h3>
			<Filter options={frameworks} name="frameworks" />

			<h3 class="font-bold">Div-based Filter</h3>
			<Filter options={metaFrameworks} name="metaframeworks" useForm={false} />
		</div>
	</CardBody>
</Card>

<Card>
	<CardBody class="flex flex-col gap-4">
		<CardTitle>Keyboard</CardTitle>
		<!-- Basic -->
		<div>
			<Kbd>K</Kbd>
		</div>

		<!-- Sizes -->
		<div class="flex gap-2">
			<Kbd size="xs">Xsmall</Kbd>
			<Kbd size="sm">Small</Kbd>
			<Kbd size="md">Medium</Kbd>
			<Kbd size="lg">Large</Kbd>
			<Kbd size="xl">Xlarge</Kbd>
		</div>

		<!-- In text -->
		<div>
			Press <Kbd size="sm">F</Kbd> to pay respects.
		</div>

		<!-- Key combination -->
		<div>
			<Kbd combination>ctrl</Kbd>
			<Kbd combination>shift</Kbd>
			<Kbd>del</Kbd>
		</div>

		<!-- Function Keys -->
		<div class="flex gap-2">
			<Kbd>⌘</Kbd>
			<Kbd>⌥</Kbd>
			<Kbd>⇧</Kbd>
			<Kbd>⌃</Kbd>
		</div>

		<!-- Arrow Keys -->
		<div class="flex flex-col items-center gap-2">
			<Kbd>▲</Kbd>
			<div class="flex gap-12">
				<Kbd>◀︎</Kbd>
				<Kbd>▶︎</Kbd>
			</div>
			<Kbd>▼</Kbd>
		</div>

		<!-- Full Keyboard -->
		<div class="flex flex-col gap-1">
			<div class="flex justify-center gap-1">
				{#each 'qwertyuiop' as key}
					<Kbd>{key}</Kbd>
				{/each}
			</div>
			<div class="flex justify-center gap-1">
				{#each 'asdfghjkl' as key}
					<Kbd>{key}</Kbd>
				{/each}
			</div>
			<div class="flex justify-center gap-1">
				{#each 'zxcvbnm/' as key}
					<Kbd>{key}</Kbd>
				{/each}
			</div>
		</div>
	</CardBody>
</Card>

<Card>
	<CardBody class="flex flex-col gap-4">
		<CardTitle>Labels</CardTitle>
		<!-- Basic Labels -->
		<Label text="https://">
			<TextInput placeholder="URL" />
		</Label>

		<Label text=".com" position="end">
			<TextInput placeholder="domain name" />
		</Label>

		<Label text="Type">
			<Select size="sm">
				<option>Personal</option>
				<option>Business</option>
			</Select>
		</Label>

		<Label text="Publish date">
			<DateTimeInput type="date" />
		</Label>

		<!-- Floating Labels -->
		<FloatingLabel text="Your name">
			<TextInput placeholder="Your name" />
		</FloatingLabel>

		<!-- Floating Labels with Different Sizes -->
		<div class="space-y-4">
			{#each ['xs', 'sm', 'md', 'lg', 'xl'] as size}
				<FloatingLabel text={size.charAt(0).toUpperCase() + size.slice(1)}>
					<TextInput {size} placeholder="" />
				</FloatingLabel>
			{/each}
		</div>
	</CardBody>
</Card>

<Card>
	<CardBody class="flex flex-col gap-4">
		<CardTitle>Links</CardTitle>
		<!-- Basic -->
		<div>
			<Link>Basic Link</Link>
		</div>

		<!-- Colors -->
		<div class="flex gap-4">
			<Link color="primary">Primary</Link>
			<Link color="secondary">Secondary</Link>
			<Link color="accent">Accent</Link>
			<Link color="neutral">Neutral</Link>
			<Link color="success">Success</Link>
			<Link color="info">Info</Link>
			<Link color="warning">Warning</Link>
			<Link color="error">Error</Link>
		</div>

		<!-- Hover -->
		<div>
			<Link hover>Show underline on hover</Link>
		</div>

		<!-- In text -->
		<p>
			Tailwind CSS resets the style of links by default.
			<br />
			Add "link" class to make it look like a
			<Link>normal link</Link>
			again.
		</p>
	</CardBody>
</Card>

<Card>
	<CardBody class="flex flex-col gap-4">
		<CardTitle>Lists</CardTitle>
		<!-- Basic List -->
		<List>
			<ListRow header>Most played songs this week</ListRow>

			<ListRow>
				<ListCol>
					<img
						class="size-10 rounded-box"
						src="https://img.daisyui.com/images/profile/demo/1@94.webp"
						alt="Profile"
					/>
				</ListCol>
				<ListCol>
					<div>Dio Lupa</div>
					<div class="text-xs uppercase font-semibold opacity-60">Remaining Reason</div>
				</ListCol>
				<ListCol>
					<button class="btn btn-square btn-ghost" aria-label="Play song">
						<svg class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
							<g
								stroke-linejoin="round"
								stroke-linecap="round"
								stroke-width="2"
								fill="none"
								stroke="currentColor"
							>
								<path d="M6 3L20 12 6 21 6 3z"></path>
							</g>
						</svg>
					</button>
				</ListCol>
			</ListRow>

			<!-- Add more rows as needed -->
		</List>

		<!-- List with Growing Column -->
		<List>
			<ListRow header>Most played songs this week</ListRow>

			<ListRow>
				<ListCol class="text-4xl font-thin opacity-30 tabular-nums">01</ListCol>
				<ListCol>
					<img
						class="size-10 rounded-box"
						src="https://img.daisyui.com/images/profile/demo/1@94.webp"
						alt="Profile"
					/>
				</ListCol>
				<ListCol grow>
					<div>Dio Lupa</div>
					<div class="text-xs uppercase font-semibold opacity-60">Remaining Reason</div>
				</ListCol>
				<ListCol>
					<button class="btn btn-square btn-ghost" aria-label="Play song">
						<svg class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
							<g
								stroke-linejoin="round"
								stroke-linecap="round"
								stroke-width="2"
								fill="none"
								stroke="currentColor"
							>
								<path d="M6 3L20 12 6 21 6 3z"></path>
							</g>
						</svg>
					</button>
				</ListCol>
			</ListRow>
		</List>

		<!-- List with Wrapping Column -->
		<List>
			<ListRow header>Most played songs this week</ListRow>

			<ListRow>
				<ListCol>
					<img
						class="size-10 rounded-box"
						src="https://img.daisyui.com/images/profile/demo/1@94.webp"
						alt="Profile"
					/>
				</ListCol>
				<ListCol>
					<div>Dio Lupa</div>
					<div class="text-xs uppercase font-semibold opacity-60">Remaining Reason</div>
				</ListCol>
				<ListCol wrap class="text-xs">
					"Remaining Reason" became an instant hit, praised for its haunting sound and emotional
					depth. A viral performance brought it widespread recognition, making it one of Dio Lupa's
					most iconic tracks.
				</ListCol>
			</ListRow>
		</List>
	</CardBody>
</Card>
