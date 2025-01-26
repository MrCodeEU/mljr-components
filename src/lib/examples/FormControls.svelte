<script lang="ts">
    import Button from '$lib/comps/Button.svelte';
    import Checkbox from '$lib/comps/Checkbox.svelte';
    import { Card, CardBody, CardTitle } from '$lib/comps/card/index.js';
    import FileInput from '$lib/comps/FileInput.svelte';
    import InputExamples from '$lib/examples/InputExamples.svelte';
    import Radio from '$lib/comps/Radio.svelte';
    import Range from '$lib/comps/Range.svelte';
    import Rating from '$lib/comps/Rating.svelte';
    import Select from '$lib/comps/Select.svelte';
    import Textarea from '$lib/comps/Textarea.svelte';
    import Toggle from '$lib/comps/Toggle.svelte';
    import { Bell, BellOff, Moon, Sun, Wifi, WifiOff } from 'lucide-svelte';

    // Color selections state
    let colorSelections = $state({
        default: false,
        neutral: false,
        primary: false,
        secondary: false,
        accent: false,
        info: false,
        success: false,
        warning: false,
        error: false
    });

    let selectedColorsList = $derived(
        Object.entries(colorSelections)
            .filter(([_, checked]) => checked)
            .map(([color]) => color)
    );

    // Todo list state
    let todoList = $state([
        { id: 1, text: "Learn Svelte", done: false },
        { id: 2, text: "Build components", done: false },
        { id: 3, text: "Write documentation", done: false },
        { id: 4, text: "Share with others", done: false }
    ]);

    let completedTodos = $derived(todoList.filter(todo => todo.done).length);

    // Toppings state
    const toppings = [
        'Pepperoni',
        'Mushrooms',
        'Onions',
        'Sausage',
        'Green Peppers'
    ];

    let selectedToppings = $state(new Set<string>());

    const formatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' });

    // Event handlers
    function handleTodoChange(id: number, checked: boolean) {
        todoList = todoList.map(todo => 
            todo.id === id ? { ...todo, done: checked } : todo
        );
    }

    function handleToppingChange(topping: string, checked: boolean) {
        if (checked) {
            selectedToppings.add(topping);
        } else {
            selectedToppings.delete(topping);
        }
    }

    function handleColorChange(color: string, checked: boolean) {
        colorSelections[color as keyof typeof colorSelections] = checked;
    }

    // Add colors array for inputs
    const colors = ['neutral', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error'] as const;
    const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;

    // Add radio state
    let selectedSize = $state('md');
    let selectedColor = $state('primary');
    let favoriteTopping = $state('');

    // Add range state
    let rangeValue = $state(40);
    let steppedValue = $state(25);

    // Add rating state
    let basicRating = $state(2.5);
    let colorRating = $state(3);
    let heartRating = $state(4);

    // Add select state
    let selectedFramework = $state('');
    let selectedFont = $state('');
    let selectedBrowser = $state('');

    // Add select options data
    const frameworks = $state(['Svelte', 'React', 'Vue', 'Angular', 'Solid']);
    const browsers = $state([
        { value: '', label: 'Popular', disabled: true },
        { value: 'Chrome', label: 'Chrome' },
        { value: 'Firefox', label: 'Firefox' },
        { value: 'Safari', label: 'Safari' },
        { value: 'Edge', label: 'Edge' },
        { value: '', label: 'Legacy', disabled: true },
        { value: 'Internet Explorer', label: 'Internet Explorer' },
        { value: 'Opera', label: 'Opera' },
        { value: 'Netscape', label: 'Netscape' }
    ]);
    const fonts = $state([
        { value: 'inter', label: 'Inter UI', disabled: false },
        { value: 'roboto', label: 'Roboto', disabled: false },
        { value: 'comic', label: 'Comic Sans', disabled: true }
    ]);

    // Add textarea state
    let bioText = $state('');
    let feedbackText = $state('');

    // Add toggle state
    let themeToggle = $state(false);
    let notificationsEnabled = $state(true);
    let wifiEnabled = $state(true);
</script>

<div class="space-y-4">
    <!-- Button Showcase -->
    <Card>
        <CardBody>
            <CardTitle>Button Components</CardTitle>
            <div class="space-y-8">
                <!-- Colors -->
                <div>
                    <h3 class="font-semibold mb-2">Colors</h3>
                    <div class="flex flex-wrap gap-2">
                        <Button>Default</Button>
                        <Button color="neutral">Neutral</Button>
                        <Button color="primary">Primary</Button>
                        <Button color="secondary">Secondary</Button>
                        <Button color="accent">Accent</Button>
                        <Button color="info">Info</Button>
                        <Button color="success">Success</Button>
                        <Button color="warning">Warning</Button>
                        <Button color="error">Error</Button>
                    </div>
                </div>

                <!-- Styles -->
                <div>
                    <h3 class="font-semibold mb-2">Styles</h3>
                    <div class="flex flex-wrap gap-2">
                        <Button color="primary">Solid</Button>
                        <Button color="primary" style="outline">Outline</Button>
                        <Button color="primary" style="soft">Soft</Button>
                        <Button color="primary" style="dash">Dash</Button>
                        <Button color="primary" style="ghost">Ghost</Button>
                        <Button color="primary" style="link">Link</Button>
                    </div>
                </div>

                <!-- Sizes -->
                <div>
                    <h3 class="font-semibold mb-2">Sizes</h3>
                    <div class="flex flex-wrap gap-2 items-center">
                        <Button color="primary" size="xs">Extra Small</Button>
                        <Button color="primary" size="sm">Small</Button>
                        <Button color="primary">Default</Button>
                        <Button color="primary" size="lg">Large</Button>
                        <Button color="primary" size="xl">Extra Large</Button>
                    </div>
                </div>

                <!-- Modifiers -->
                <div>
                    <h3 class="font-semibold mb-2">Modifiers</h3>
                    <div class="flex flex-wrap gap-2">
                        <Button color="primary" modifier="wide">Wide</Button>
                        <Button color="primary" modifier="square">□</Button>
                        <Button color="primary" modifier="circle">●</Button>
                    </div>
                    <div class="mt-2">
                        <Button color="primary" modifier="block">Block</Button>
                    </div>
                </div>

                <!-- States -->
                <div>
                    <h3 class="font-semibold mb-2">States</h3>
                    <div class="flex flex-wrap gap-2">
                        <Button color="primary" active>Active</Button>
                        <Button color="primary" disabled>Disabled</Button>
                        <Button color="primary" loading>Loading</Button>
                    </div>
                </div>
            </div>
        </CardBody>
    </Card>

    <!-- Other Form Controls -->
    <Card>
        <CardBody>
            <CardTitle>Inputs</CardTitle>
            <InputExamples />
        </CardBody>
    </Card>

    <!-- Checkbox Showcase -->
    <Card>
        <CardBody>
            <CardTitle>Checkbox Components</CardTitle>
            <div class="space-y-8">
                <!-- Colors with reactive state -->
                <div>
                    <h3 class="font-semibold mb-2">Colors</h3>
                    <div class="flex flex-wrap gap-4">
                        {#each Object.keys(colorSelections) as color}
                            <Checkbox
                                color={color === 'default' ? undefined : (color as "neutral" | "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error")}
                                checked={colorSelections[color as keyof typeof colorSelections]}
                                onCheckedChange={(checked) => handleColorChange(color, checked)}
                            />
                        {/each}
                    </div>
                    {#if selectedColorsList.length > 0}
                        <p class="mt-2 text-sm">Selected colors: {selectedColorsList.join(', ')}</p>
                    {/if}
                </div>

                <!-- Sizes -->
                <div>
                    <h3 class="font-semibold mb-2">Sizes</h3>
                    <div class="flex flex-wrap gap-4 items-center">
                        <Checkbox size="xs" checked />
                        <Checkbox size="sm" checked />
                        <Checkbox checked />
                        <Checkbox size="lg" checked />
                        <Checkbox size="xl" checked />
                    </div>
                </div>

                <!-- States -->
                <div>
                    <h3 class="font-semibold mb-2">States</h3>
                    <div class="flex flex-wrap gap-4">
                        <Checkbox disabled />
                        <Checkbox disabled checked />
                        <Checkbox indeterminate />
                    </div>
                </div>

                <!-- With Labels -->
                <div>
                    <h3 class="font-semibold mb-2">With Labels</h3>
                    <fieldset class="fieldset p-4 bg-base-100 border border-base-300 rounded-box w-64">
                        <legend class="fieldset-legend">Login options</legend>
                        <label class="fieldset-label flex gap-2 cursor-pointer">
                            <Checkbox checked />
                            Remember me
                        </label>
                    </fieldset>
                </div>

                <!-- Todo List Example -->
                <div>
                    <h3 class="font-semibold mb-2">Todo List Example</h3>
                    <div class="space-y-2">
                        {#each todoList as todo}
                            <label class="flex gap-2 cursor-pointer items-center">
                                <Checkbox 
                                    color="primary"
                                    checked={todo.done}
                                    onCheckedChange={(checked) => handleTodoChange(todo.id, checked)}
                                />
                                <span class={todo.done ? 'line-through opacity-50' : ''}>
                                    {todo.text}
                                </span>
                            </label>
                        {/each}
                        <p class="text-sm mt-4">
                            Completed: {completedTodos} of {todoList.length}
                        </p>
                    </div>
                </div>
            </div>
        </CardBody>
    </Card>

    <!-- Radio Showcase -->
    <Card>
        <CardBody>
            <CardTitle>Radio Components</CardTitle>
            <div class="space-y-8">
                <!-- Colors -->
                <div>
                    <h3 class="font-semibold mb-2">Colors</h3>
                    <div class="flex flex-wrap gap-4">
                        <Radio name="colors" value="default" checked={selectedColor === 'default'} onCheckedChange={() => selectedColor = 'default'} />
                        <Radio name="colors" value="neutral" color="neutral" checked={selectedColor === 'neutral'} onCheckedChange={() => selectedColor = 'neutral'} />
                        <Radio name="colors" value="primary" color="primary" checked={selectedColor === 'primary'} onCheckedChange={() => selectedColor = 'primary'} />
                        <Radio name="colors" value="secondary" color="secondary" checked={selectedColor === 'secondary'} onCheckedChange={() => selectedColor = 'secondary'} />
                        <Radio name="colors" value="accent" color="accent" checked={selectedColor === 'accent'} onCheckedChange={() => selectedColor = 'accent'} />
                        <Radio name="colors" value="info" color="info" checked={selectedColor === 'info'} onCheckedChange={() => selectedColor = 'info'} />
                        <Radio name="colors" value="success" color="success" checked={selectedColor === 'success'} onCheckedChange={() => selectedColor = 'success'} />
                        <Radio name="colors" value="warning" color="warning" checked={selectedColor === 'warning'} onCheckedChange={() => selectedColor = 'warning'} />
                        <Radio name="colors" value="error" color="error" checked={selectedColor === 'error'} onCheckedChange={() => selectedColor = 'error'} />
                    </div>
                    {#if selectedColor}
                        <p class="mt-2 text-sm">Selected color: {selectedColor}</p>
                    {/if}
                </div>

                <!-- Sizes -->
                <div>
                    <h3 class="font-semibold mb-2">Sizes</h3>
                    <div class="flex flex-wrap gap-4 items-center">
                        {#each sizes as size}
                            <Radio
                                name="sizes"
                                value={size}
                                size={size}
                                checked={selectedSize === size}
                                onCheckedChange={() => selectedSize = size}
                            />
                        {/each}
                    </div>
                    <p class="mt-2 text-sm">Selected size: {selectedSize}</p>
                </div>

                <!-- States -->
                <div>
                    <h3 class="font-semibold mb-2">States</h3>
                    <div class="flex flex-wrap gap-4">
                        <Radio disabled name="states1" />
                        <Radio disabled checked name="states2" />
                    </div>
                </div>

                <!-- With Labels -->
                <div>
                    <h3 class="font-semibold mb-2">Pizza Toppings</h3>
                    <fieldset class="fieldset p-4 bg-base-100 border border-base-300 rounded-box w-64">
                        <legend class="fieldset-legend">Choose one topping</legend>
                        {#each toppings as topping}
                            <label class="fieldset-label flex gap-2 cursor-pointer mb-2">
                                <Radio
                                    name="toppings"
                                    value={topping}
                                    color="primary"
                                    checked={favoriteTopping === topping}
                                    onCheckedChange={() => favoriteTopping = topping}
                                />
                                {topping}
                            </label>
                        {/each}
                        {#if favoriteTopping}
                            <p class="text-sm mt-4">Your choice: {favoriteTopping}</p>
                        {/if}
                    </fieldset>
                </div>
            </div>
        </CardBody>
    </Card>

    <!-- Range Showcase -->
    <Card>
        <CardBody>
            <CardTitle>Range Components</CardTitle>
            <div class="space-y-8">
                <!-- Basic -->
                <div>
                    <h3 class="font-semibold mb-2">Basic Range</h3>
                    <Range 
                        value={rangeValue} 
                        onValueChange={(v) => rangeValue = v}
                        showFloatingLabel
                    />
                    <p class="text-sm mt-2">Value: {rangeValue}</p>
                </div>

                <!-- With Steps -->
                <div>
                    <h3 class="font-semibold mb-2">With Steps and Labels</h3>
                    <Range 
                        value={steppedValue}
                        step={25}
                        showSteps
                        showLabels
                        onValueChange={(v) => steppedValue = v}
                    />
                </div>

                <!-- Colors -->
                <div>
                    <h3 class="font-semibold mb-2">Colors</h3>
                    <div class="space-y-4">
                        {#each colors as color}
                            <Range value={40} color={color} />
                        {/each}
                    </div>
                </div>

                <!-- Sizes -->
                <div>
                    <h3 class="font-semibold mb-2">Sizes</h3>
                    <div class="space-y-4">
                        {#each sizes as size}
                            <Range value={40} size={size} />
                        {/each}
                    </div>
                </div>

                <!-- Custom Labels -->
                <div>
                    <h3 class="font-semibold mb-2">Custom Labels</h3>
                    <Range
                        min={1}
                        max={5}
                        step={1}
                        value={3}
                        showLabels
                        labels={['Very Poor', 'Poor', 'Average', 'Good', 'Excellent']}
                    />
                </div>

                <!-- States -->
                <div>
                    <h3 class="font-semibold mb-2">States</h3>
                    <Range value={40} disabled />
                </div>
            </div>
        </CardBody>
    </Card>

    <!-- Rating Showcase -->
    <Card>
        <CardBody>
            <CardTitle>Rating Components</CardTitle>
            <div class="space-y-8">
                <!-- Basic -->
                <div>
                    <h3 class="font-semibold mb-2">Basic Rating with Half Stars</h3>
                    <Rating 
                        value={basicRating}
                        onValueChange={(v) => basicRating = v}
                        allowHalf
                        allowClear
                    />
                    <p class="text-sm mt-2">Value: {basicRating}</p>
                </div>

                <!-- Sizes -->
                <div>
                    <h3 class="font-semibold mb-2">Sizes</h3>
                    <div class="space-y-4">
                        {#each sizes as size}
                            <Rating size={size} value={3} />
                        {/each}
                    </div>
                </div>

                <!-- Colors -->
                <div>
                    <h3 class="font-semibold mb-2">Colored Stars</h3>
                    <Rating 
                        value={colorRating}
                        onValueChange={(v) => colorRating = v}
                        color="bg-orange-400"
                        shape="star-2"
                    />
                </div>

                <!-- Hearts with multiple colors -->
                <div>
                    <h3 class="font-semibold mb-2">Hearts with Multiple Colors</h3>
                    <Rating 
                        value={heartRating}
                        onValueChange={(v) => heartRating = v}
                        shape="heart"
                        colors={[
                            'bg-red-400',
                            'bg-orange-400',
                            'bg-yellow-400',
                            'bg-lime-400',
                            'bg-green-400'
                        ]}
                    />
                </div>

                <!-- Read-only -->
                <div>
                    <h3 class="font-semibold mb-2">Read-only Display</h3>
                    <Rating 
                        value={3.5}
                        readonly
                        allowHalf
                        color="bg-green-500"
                    />
                </div>
            </div>
        </CardBody>
    </Card>

    <!-- Select Showcase -->
    <Card>
        <CardBody>
            <CardTitle>Select Components</CardTitle>
            <div class="space-y-8">
                <!-- Basic with simple array -->
                <div>
                    <h3 class="font-semibold mb-2">Basic Select with Array</h3>
                    <Select 
                        options={frameworks}
                        placeholder="Pick a framework"
                        value={selectedFramework}
                        onchange={(e) => selectedFramework = (e.currentTarget as HTMLSelectElement).value}
                    />
                    {#if selectedFramework}
                        <p class="text-sm mt-2">Selected: {selectedFramework}</p>
                    {/if}
                </div>

                <!-- With option objects -->
                <div>
                    <h3 class="font-semibold mb-2">With Option Objects</h3>
                    <Select 
                        ghost
                        options={fonts}
                        placeholder="Pick a font"
                        value={selectedFont}
                        onchange={(e) => selectedFont = (e.currentTarget as HTMLSelectElement).value}
                    />
                    {#if selectedFont}
                        <p class="text-sm mt-2">Selected font: {selectedFont}</p>
                    {/if}
                </div>

                <!-- With option groups -->
                <div>
                    <h3 class="font-semibold mb-2">With Option Groups</h3>
                    <fieldset class="fieldset p-4 bg-base-100 border border-base-300 rounded-box">
                        <legend class="fieldset-legend">Browsers</legend>
                        <Select 
                            options={browsers}
                            placeholder="Pick a browser"
                            value={selectedBrowser}
                            onchange={(e) => selectedBrowser = (e.currentTarget as HTMLSelectElement).value}
                        />
                        <span class="fieldset-label text-sm mt-1">Optional</span>
                    </fieldset>
                </div>

                <!-- Colors -->
                <div>
                    <h3 class="font-semibold mb-2">Colors</h3>
                    <div class="grid gap-4 md:grid-cols-2">
                        {#each colors as color}
                            <Select
                                {color}
                                options={['Option 1', 'Option 2', 'Option 3']}
                                placeholder={`${color} select`}
                            />
                        {/each}
                    </div>
                </div>

                <!-- Sizes -->
                <div>
                    <h3 class="font-semibold mb-2">Sizes</h3>
                    <div class="space-y-4">
                        {#each sizes as size}
                            <Select
                                {size}
                                options={['Small Option', 'Medium Option', 'Large Option']}
                                placeholder={`${size} size`}
                            />
                        {/each}
                    </div>
                </div>

                <!-- Disabled state -->
                <div>
                    <h3 class="font-semibold mb-2">Disabled State</h3>
                    <Select 
                        disabled
                        options={['You', "can't", 'touch', 'this']}
                        value="You"
                    />
                </div>
            </div>
        </CardBody>
    </Card>

    <!-- File Input Examples -->
    <Card>
        <CardBody>
            <CardTitle>File Input</CardTitle>
            <div class="space-y-4">
                <FileInput 
                    label="Choose a file"
                    placeholder="Select file..." 
                />
                
                <fieldset class="fieldset">
                    <legend class="fieldset-legend">Upload Document</legend>
                    <FileInput 
                        label="Max size 2MB"
                        labelPosition="after"
                        accept=".pdf,.doc,.docx"
                    />
                </fieldset>

                <div class="space-y-2">
                    <FileInput size="xs" label="Extra Small" />
                    <FileInput size="sm" label="Small" />
                    <FileInput size="md" label="Medium" />
                    <FileInput size="lg" label="Large" />
                    <FileInput size="xl" label="Extra Large" />
                </div>

                <div class="space-y-2">
                    <FileInput color="primary" label="Primary" />
                    <FileInput color="secondary" label="Secondary" />
                    <FileInput color="accent" label="Accent" />
                    <FileInput ghost label="Ghost style" />
                </div>

                <FileInput 
                    disabled 
                    label="Disabled input"
                    placeholder="You can't touch this" 
                />
            </div>
        </CardBody>
    </Card>

    <!-- Textarea Examples -->
    <Card>
        <CardBody>
            <CardTitle>Textarea Components</CardTitle>
            <div class="space-y-8">
                <!-- Basic -->
                <div>
                    <h3 class="font-semibold mb-2">Basic Textarea</h3>
                    <Textarea
                        placeholder="Enter your bio..."
                        bind:value={bioText}
                        rows={4}
                    />
                    {#if bioText}
                        <p class="text-sm mt-2">Characters: {bioText.length}</p>
                    {/if}
                </div>

                <!-- With Fieldset -->
                <div>
                    <h3 class="font-semibold mb-2">With Fieldset</h3>
                    <fieldset class="fieldset p-4 bg-base-100 border border-base-300 rounded-box">
                        <legend class="fieldset-legend">Feedback</legend>
                        <Textarea
                            ghost
                            placeholder="Your feedback is important..."
                            bind:value={feedbackText}
                            rows={3}
                        />
                        <span class="fieldset-label text-sm mt-1">Optional</span>
                    </fieldset>
                </div>

                <!-- Colors -->
                <div>
                    <h3 class="font-semibold mb-2">Colors</h3>
                    <div class="grid gap-4 md:grid-cols-2">
                        {#each colors as color}
                            <Textarea
                                {color}
                                placeholder={`${color} textarea`}
                                rows={2}
                            />
                        {/each}
                    </div>
                </div>

                <!-- Sizes -->
                <div>
                    <h3 class="font-semibold mb-2">Sizes</h3>
                    <div class="space-y-4">
                        {#each sizes as size}
                            <Textarea
                                {size}
                                placeholder={`${size} size textarea`}
                            />
                        {/each}
                    </div>
                </div>

                <!-- Disabled state -->
                <div>
                    <h3 class="font-semibold mb-2">Disabled State</h3>
                    <Textarea
                        disabled
                        value="This textarea is disabled"
                        rows={2}
                    />
                </div>
            </div>
        </CardBody>
    </Card>

    <!-- Toggle Showcase -->
    <Card>
        <CardBody>
            <CardTitle>Toggle Components</CardTitle>
            <div class="space-y-8">
                <!-- Basic -->
                <div>
                    <h3 class="font-semibold mb-2">Basic Toggle</h3>
                    <Toggle checked />
                </div>

                <!-- With Fieldset -->
                <div>
                    <h3 class="font-semibold mb-2">With Fieldset</h3>
                    <fieldset class="fieldset p-4 bg-base-100 border border-base-300 rounded-box w-64">
                        <legend class="fieldset-legend">Theme Settings</legend>
                        <label class="fieldset-label flex items-center gap-2 cursor-pointer">
                            <Toggle
                                bind:checked={themeToggle}
                                color="primary"
                            />
                            Dark mode
                        </label>
                    </fieldset>
                </div>

                <!-- Sizes -->
                <div>
                    <h3 class="font-semibold mb-2">Sizes</h3>
                    <div class="flex flex-wrap gap-4 items-center">
                        {#each sizes as size}
                            <Toggle {size} checked />
                        {/each}
                    </div>
                </div>

                <!-- Colors -->
                <div>
                    <h3 class="font-semibold mb-2">Colors</h3>
                    <div class="flex flex-wrap gap-4">
                        {#each colors as color}
                            <Toggle {color} checked />
                        {/each}
                    </div>
                </div>

                <!-- With Icons -->
                <div>
                    <h3 class="font-semibold mb-2">With Icons</h3>
                    <div class="space-y-4">
                        <div class="flex items-center gap-4">
                            <Toggle
                                showIcons
                                bind:checked={notificationsEnabled}
                                color="primary"
                                iconOn={Bell}
                                iconOff={BellOff}
                            />
                            <span>Notifications: {notificationsEnabled ? 'On' : 'Off'}</span>
                        </div>
                        <div class="flex items-center gap-4">
                            <Toggle
                                showIcons
                                bind:checked={wifiEnabled}
                                color="success"
                                iconOn={Wifi}
                                iconOff={WifiOff}
                            />
                            <span>WiFi: {wifiEnabled ? 'Connected' : 'Disconnected'}</span>
                        </div>
                        <div class="flex items-center gap-4">
                            <Toggle
                                showIcons
                                bind:checked={themeToggle}
                                color="warning"
                                iconOn={Sun}
                                iconOff={Moon}
                            />
                            <span>Theme: {themeToggle ? 'Dark' : 'Light'}</span>
                        </div>
                    </div>
                </div>

                <!-- States -->
                <div>
                    <h3 class="font-semibold mb-2">States</h3>
                    <div class="flex flex-wrap gap-4">
                        <Toggle disabled />
                        <Toggle disabled checked />
                        <Toggle indeterminate />
                    </div>
                </div>
            </div>
        </CardBody>
    </Card>
</div>
