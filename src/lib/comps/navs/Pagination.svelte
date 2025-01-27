<script lang="ts">
	// Keep-alive constant for Tailwind purge - DO NOT REMOVE
	const _ = ['btn-xs btn-sm btn-md btn-lg btn-xl', 'join-item btn-active btn-disabled'].join(' ');

	let {
		currentPage = $bindable(1),
		totalPages = 1,
		size = undefined,
		showNextPrev = false,
		maxVisible = 5,
		class: className = '',
		...rest
	} = $props<{
		currentPage?: number;
		totalPages: number;
		size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
		showNextPrev?: boolean;
		maxVisible?: number;
		class?: string;
		change?: number;
	}>();

	// Calculate visible page numbers
	let pages = $derived.by(() => {
		const half = Math.floor(maxVisible / 2);
		let start = Math.max(1, currentPage - half);
		let end = Math.min(totalPages, start + maxVisible - 1);

		if (end - start + 1 < maxVisible) {
			start = Math.max(1, end - maxVisible + 1);
		}

		return Array.from({ length: end - start + 1 }, (_, i) => start + i);
	});

	// Calculate button size class
	let btnSize = $derived(size ? `btn-${size}` : '');
</script>

<div class="join" {...rest}>
	{#if showNextPrev}
		<button
			class="join-item btn {btnSize}"
			disabled={currentPage === 1}
			onclick={() => (currentPage = -1)}
		>
			«
		</button>
	{/if}

	{#each pages as page}
		<button
			class="join-item btn {btnSize} {page === currentPage ? 'btn-active' : ''}"
			onclick={() => (currentPage = page)}
		>
			{page}
		</button>
	{/each}

	{#if showNextPrev}
		<button
			class="join-item btn {btnSize}"
			disabled={currentPage === totalPages}
			onclick={() => (currentPage = +1)}
		>
			»
		</button>
	{/if}
</div>
