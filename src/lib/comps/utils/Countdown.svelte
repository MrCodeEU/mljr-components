<script lang="ts">
	let {
		value = 0,
		size = '',
		font = 'font-mono',
		wrapper = '',
		label = '',
		separator = '',
		boxed = false,
		...rest
	} = $props<{
		value: number;
		size?: string;
		font?: string;
		wrapper?: string;
		label?: string;
		separator?: string;
		boxed?: boolean;
	}>();

	const clampedValue = $derived(Math.max(0, Math.min(99, Math.floor(value))));
</script>

{#if boxed}
	<div
		class="bg-neutral rounded-box text-neutral-content flex flex-col p-2 clay clay-lg clay-rounded-lg {wrapper}"
	>
		<span class="countdown {font} {size}">
			<span style="--value:{clampedValue};">{clampedValue}</span>
		</span>
		{#if label}
			<span>{label}</span>
		{/if}
	</div>
{:else}
	<div class={wrapper}>
		<span class="countdown {font} {size}">
			<span style="--value:{clampedValue};">{clampedValue}</span>
		</span>
		{#if separator}
			{separator}
		{/if}
		{#if label}
			<div>{label}</div>
		{/if}
	</div>
{/if}
