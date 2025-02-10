<script lang="ts">
	import type { Snippet } from 'svelte';
	let {
		bgClass = '',
		borderClass = 'border-base-300',
		children = undefined,
		...rest
	} = $props<{
		bgClass?: string;
		borderClass?: string;
		children?: Snippet;
	}>();
</script>

<div
	class="mockup-window border clay clay-lg clay-rounded-lg {borderClass} w-full {bgClass}"
	{...rest}
>
	<div class="grid place-content-center border-t {borderClass} h-80">
		{#if children}
			{@render children?.()}
		{/if}
	</div>
</div>
