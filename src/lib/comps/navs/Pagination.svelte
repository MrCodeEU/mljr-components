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

	function handlePrevious() {
		if (currentPage > 1) {
			currentPage = currentPage - 1;
		}
	}

	function handleNext() {
		if (currentPage < totalPages) {
			currentPage = currentPage + 1;
		}
	}
</script>

<div class="pagination-group" {...rest}>
	{#if showNextPrev}
		<button
			class="pagination-btn btn clay clay-lg {btnSize}"
			disabled={currentPage === 1}
			onclick={handlePrevious}
		>
			«
		</button>
	{/if}

	{#each pages as page}
		<button
			class="pagination-btn btn clay clay-lg {btnSize} {page === currentPage ? 'active' : ''}"
			onclick={() => (currentPage = page)}
		>
			{page}
		</button>
	{/each}

	{#if showNextPrev}
		<button
			class="pagination-btn btn clay clay-lg {btnSize}"
			disabled={currentPage === totalPages}
			onclick={handleNext}
		>
			»
		</button>
	{/if}
</div>
