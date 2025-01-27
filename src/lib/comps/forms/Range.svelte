<script lang="ts">
	// Keep-alive constant for Tailwind purge - DO NOT REMOVE
	const _ = [
		'range-neutral range-primary range-secondary range-accent range-info range-success range-warning range-error',
		'range-xs range-sm range-md range-lg range-xl'
	].join(' ');

	let {
		color = undefined,
		size = undefined,
		min = 0,
		max = 100,
		step = 1,
		value = 0,
		showSteps = false,
		showLabels = false,
		showFloatingLabel = false,
		labels = undefined,
		disabled = false,
		class: className = '',
		onValueChange = undefined,
		...rest
	} = $props<{
		color?:
			| 'neutral'
			| 'primary'
			| 'secondary'
			| 'accent'
			| 'info'
			| 'success'
			| 'warning'
			| 'error';
		size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
		min?: number;
		max?: number;
		step?: number;
		value?: number;
		showSteps?: boolean;
		showLabels?: boolean;
		showFloatingLabel?: boolean;
		labels?: string[];
		disabled?: boolean;
		class?: string;
		onValueChange?: (value: number) => void;
	}>();

	let classes = $derived(
		['range', color ? `range-${color}` : '', size ? `range-${size}` : '', className]
			.filter(Boolean)
			.join(' ')
	);

	let stepCount = $derived(Math.floor((max - min) / step) + 1);

	// Calculate position for floating label (as percentage)
	let labelPosition = $derived(((value - min) / (max - min)) * 100);

	function handleInput(event: Event) {
		const target = event.target as HTMLInputElement;
		onValueChange?.(Number(target.value));
	}
</script>

<div class="w-full">
	<div class="w-full relative">
		<input
			type="range"
			class={classes}
			{min}
			{max}
			{step}
			{value}
			{disabled}
			oninput={handleInput}
			{...rest}
		/>

		<!-- Floating label -->
		{#if showFloatingLabel}
			<div
				class="absolute top-0 transform -translate-y-6"
				style="left: {labelPosition}%; transform: translateX(-50%);"
			>
				<div class="text-xs bg-base-200 px-2 py-1 rounded">
					{value}
				</div>
			</div>
		{/if}

		<!-- Steps and labels -->
		{#if showSteps}
			<div class="w-full flex justify-between text-xs mt-2">
				{#each { length: stepCount } as _, i}
					<span class="flex items-center justify-center w-2">|</span>
				{/each}
			</div>
		{/if}

		{#if showLabels}
			<div class="w-full flex justify-between text-xs mt-2">
				{#each { length: stepCount } as _, i}
					<span class="flex items-center justify-center w-2">
						{labels?.[i] ?? min + i * step}
					</span>
				{/each}
			</div>
		{/if}
	</div>
</div>

<style>
	input[type='range'] {
		width: 100%;
	}
</style>
