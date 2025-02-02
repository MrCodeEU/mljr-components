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
    <CardTitle>Countdown</CardTitle>
    <CardBody class="flex flex-col gap-4">
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
    <CardTitle>Filter</CardTitle>
    <CardBody class="flex flex-col gap-4">
        <div class="space-y-4">
            <h3 class="font-bold">Form-based Filter</h3>
            <Filter 
                options={frameworks}
                name="frameworks"
            />
            
            <h3 class="font-bold">Div-based Filter</h3>
            <Filter 
                options={metaFrameworks}
                name="metaframeworks"
                useForm={false}
            />
        </div>
    </CardBody>
</Card>

<Card>
    <CardTitle>Keyboard</CardTitle>
    <CardBody class="flex flex-col gap-4">
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
    <CardTitle>Labels</CardTitle>
    <CardBody class="flex flex-col gap-4">
        <!-- Basic Labels -->
        <Label text="https://">
            <TextInput placeholder="URL" />
        </Label>

        <Label text=".com" position="end">
            <TextInput placeholder="domain name" />
        </Label>

        <Label text="Type">
            <Select>
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
                    <TextInput size={size} placeholder="" />
                </FloatingLabel>
            {/each}
        </div>
    </CardBody>
</Card>
