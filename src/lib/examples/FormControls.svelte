<script lang="ts">
    import Button from '$lib/comps/Button.svelte';
    import Checkbox from '$lib/comps/Checkbox.svelte';
    import { Card, CardBody, CardTitle } from '$lib/comps/card/index.js';

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
            <CardTitle>Other Form Controls</CardTitle>
            <p class="text-base-content/70">More form controls coming soon...</p>
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
</div>
