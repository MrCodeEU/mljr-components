<script lang="ts">
	interface FilterOption {
		value: string;
		label: string;
	}

	let {
		options = [],
		name = 'filter',
		useForm = true,
		...rest
	} = $props<{
		options: FilterOption[];
		name?: string;
		useForm?: boolean;
	}>();

	let selected = $state('');

	function handleReset() {
		selected = '';
	}
</script>

{#if useForm}
	<form class="filter" {...rest}>
		<input class="btn btn-square" type="reset" value="×" onclick={handleReset} />
		{#each options as option}
			<input
				class="btn clay clay-lg clay-rounded-lg"
				type="radio"
				{name}
				value={option.value}
				aria-label={option.label}
				bind:group={selected}
			/>
		{/each}
	</form>
{:else}
	<div class="filter" {...rest}>
		<input
			class="btn filter-reset clay clay-lg clay-rounded-lg"
			type="radio"
			{name}
			value=""
			aria-label="All"
			bind:group={selected}
		/>
		{#each options as option}
			<input
				class="btn clay clay-lg clay-rounded-lg"
				type="radio"
				{name}
				value={option.value}
				aria-label={option.label}
				bind:group={selected}
			/>
		{/each}
	</div>
{/if}
