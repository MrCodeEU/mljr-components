<script lang="ts">
	import Button from '$lib/comps/forms/Button.svelte';
	// Keep-alive constant for Tailwind purge - DO NOT REMOVE
	const _ = [
		'carousel carousel-center carousel-end carousel-vertical',
		'w-full w-1/2',
		'h-full',
		'rounded-box',
		'space-x-4 p-4',
		'bg-neutral'
	].join(' ');

	let {
		snap = 'start',
		direction = 'horizontal',
		width = undefined,
		height = undefined,
		rounded = false,
		fullBleed = false,
		showNavigation = false,
		showPagination = false,
		class: className = '',
		children,
		...rest
	} = $props<{
		snap?: 'start' | 'center' | 'end';
		direction?: 'horizontal' | 'vertical';
		width?: string;
		height?: string;
		rounded?: boolean;
		fullBleed?: boolean;
		showNavigation?: boolean;
		showPagination?: boolean;
		class?: string;
		children?: () => any;
	}>();

	let currentIndex = $state(0);
	let items: HTMLElement[] = $state([]);
	let containerRef: HTMLElement;

	function goToSlide(index: number) {
		if (items[index]) {
			items[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
			currentIndex = index;
		}
	}

	function previousSlide() {
		const newIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
		goToSlide(newIndex);
	}

	function nextSlide() {
		const newIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
		goToSlide(newIndex);
	}

	function updateItems() {
		items = Array.from(containerRef?.querySelectorAll('[data-carousel-item]') || []);
	}

	$effect(() => {
		if (containerRef) {
			updateItems();

			// Setup mutation observer to watch for dynamic changes
			const observer = new MutationObserver(updateItems);
			observer.observe(containerRef, { childList: true, subtree: true });

			return () => observer.disconnect();
		}
	});

	let classes = $derived(
		[
			'carousel',
			'relative',
			'min-h-[100px]', // Add minimum height
			// Remove overflow-hidden - this was blocking the natural scroll behavior
			snap !== 'start' && `carousel-${snap}`,
			direction === 'vertical' && 'carousel-vertical',
			rounded && 'rounded-box',
			width,
			height,
			fullBleed && 'bg-neutral space-x-4 p-4',
			className
		]
			.filter(Boolean)
			.join(' ')
	);
</script>

<div class="relative">
	<div bind:this={containerRef} class={classes} {...rest}>
		{@render children?.()}
	</div>

	{#if showNavigation}
		<div class="absolute inset-x-5 top-1/2 flex -translate-y-1/2 transform justify-between z-20">
			<Button
				modifier="circle"
				onclick={() => previousSlide()}
				class="bg-black/40 hover:bg-black/60 border-0">❮</Button
			>
			<Button
				modifier="circle"
				onclick={() => nextSlide()}
				class="bg-black/40 hover:bg-black/60 border-0">❯</Button
			>
		</div>
	{/if}

	{#if showPagination}
		<div class="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
			<div class="rounded-full bg-black/40 backdrop-blur-sm px-2 py-1 flex gap-1">
				{#each items as _, i}
					<Button
						size="xs"
						color={currentIndex === i ? 'primary' : 'neutral'}
						onclick={() => goToSlide(i)}
						class="min-h-6 h-6 min-w-6 w-6 p-0"
					>
						{i + 1}
					</Button>
				{/each}
			</div>
		</div>
	{/if}
</div>
