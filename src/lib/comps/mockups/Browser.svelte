<script lang="ts">
	import type { Snippet } from 'svelte';
	let {
		url = 'https://www.google.com',
		children = undefined,
		...rest
	} = $props<{
		url?: string;
		children?: Snippet;
	}>();
</script>

<div class="mockup-browser border border-base-300 w-full clay clay-lg clay-rounded-lg">
	<div class="mockup-browser-toolbar mb-10">
		<div class="input">{url}</div>
	</div>
	{#if children}
		{@render children?.()}
	{/if}
</div>
