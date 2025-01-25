<script lang="ts">
    import { Card, CardBody, CardTitle } from '$lib/comps/card/index.js';
    import TextInput from '$lib/comps/input/TextInput.svelte';
    import SearchInput from '$lib/comps/input/SearchInput.svelte';
    import NumberInput from '$lib/comps/input/NumberInput.svelte';
    import DateTimeInput from '$lib/comps/input/DateTimeInput.svelte';
    import ComposedInput from '$lib/comps/input/ComposedInput.svelte';
    import Mail from 'lucide-svelte/icons/mail';
    import File from 'lucide-svelte/icons/file';
    import User from 'lucide-svelte/icons/user';
    import type { Icon } from 'lucide-svelte';

    const colors: ("neutral" | "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error")[] = ['neutral', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error'];
    const sizes: ("xs" | "sm" | "md" | "lg" | "xl")[] = ['xs', 'sm', 'md', 'lg', 'xl'];

    const iconInputs = [
        {
            type: 'email',
            placeholder: 'mail@site.com',
            required: true,
            icon: Mail,
            hint: 'Enter valid email address'
        },
        {
            label: 'Path',
            placeholder: 'src/app/',
            icon: File,
            badge: 'Optional'
        }
    ];
</script>

<div class="space-y-4">
    <!-- Basic Examples -->
    <Card>
        <CardBody>
            <CardTitle>Basic Text Inputs</CardTitle>
            <div class="space-y-4">
                <TextInput placeholder="Basic input" />
                <TextInput ghost placeholder="Ghost style" />
                <TextInput disabled placeholder="Disabled input" />
            </div>
        </CardBody>
    </Card>

    <!-- Colors -->
    <Card>
        <CardBody>
            <CardTitle>Input Colors</CardTitle>
            <div class="space-y-4">
                {#each colors as color}
                    <TextInput 
                        color={color} 
                        placeholder={color.charAt(0).toUpperCase() + color.slice(1)}
                    />
                {/each}
            </div>
        </CardBody>
    </Card>

    <!-- Sizes -->
    <Card>
        <CardBody>
            <CardTitle>Input Sizes</CardTitle>
            <div class="space-y-4">
                {#each sizes as size}
                    <TextInput 
                        {size} 
                        placeholder={`Size: ${size}`}
                    />
                {/each}
            </div>
        </CardBody>
    </Card>

    <!-- Search Examples -->
    <Card>
        <CardBody>
            <CardTitle>Search Inputs</CardTitle>
            <div class="space-y-4">
                <SearchInput placeholder="Search..." />
                <SearchInput color="primary" placeholder="Primary search..." />
                <SearchInput withIcon={false} placeholder="No icon..." />
            </div>
        </CardBody>
    </Card>

    <!-- Composed Inputs -->
    <Card>
        <CardBody>
            <CardTitle>Composed Inputs</CardTitle>
            <div class="space-y-4">
                <fieldset class="fieldset">
                    <legend class="fieldset-legend">User Information</legend>
                    <div class="space-y-2">
                        {#each iconInputs as input}
                            <ComposedInput {...input} />
                        {/each}
                    </div>
                </fieldset>

                <SearchInput 
                    placeholder="Search with shortcut..." 
                    showShortcut
                />
            </div>
        </CardBody>
    </Card>

    <!-- Validation Examples -->
    <Card>
        <CardBody>
            <CardTitle>Validation Examples</CardTitle>
            <div class="space-y-4">
                <ComposedInput
                    type="text"
                    placeholder="Username"
                    pattern="[A-Za-z][A-Za-z0-9\-]*"
                    minLength={3}
                    maxLength={30}
                    required
                    hint="Must be 3 to 30 characters containing only letters, numbers or dash"
                    icon={User}
                    />
                
                <ComposedInput
                    type="number"
                    placeholder="Type a number between 1 to 10"
                    min="1"
                    max="10"
                    required
                    hint="Must be between be 1 to 10"
                />
            </div>
        </CardBody>
    </Card>

    <!-- Number Inputs -->
    <Card>
        <CardBody>
            <CardTitle>Number Inputs</CardTitle>
            <div class="space-y-4">
                <NumberInput placeholder="Basic number" />
                <NumberInput 
                    placeholder="With range (1-10)" 
                    min={1} 
                    max={10}
                />
                <NumberInput 
                    placeholder="With step (0.5)" 
                    step={0.5}
                />
                <NumberInput 
                    color="primary"
                    placeholder="Styled number input"
                    min={0}
                    required
                />
            </div>
        </CardBody>
    </Card>

    <!-- Date & Time Inputs -->
    <Card>
        <CardBody>
            <CardTitle>Date & Time Inputs</CardTitle>
            <div class="space-y-4">
                <DateTimeInput
                    type="date"
                    placeholder="Select date"
                />
                <DateTimeInput
                    type="time"
                    placeholder="Select time"
                />
                <DateTimeInput
                    type="datetime-local"
                    placeholder="Select date and time"
                />
                <DateTimeInput
                    type="month"
                    placeholder="Select month"
                />
                <DateTimeInput
                    type="week"
                    placeholder="Select week"
                />
                <DateTimeInput
                    type="date"
                    color="primary"
                    min="2024-01-01"
                    max="2024-12-31"
                    placeholder="Date with range"
                />
            </div>
        </CardBody>
    </Card>
</div>
