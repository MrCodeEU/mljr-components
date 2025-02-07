<script lang="ts">
	import type { Snippet } from 'svelte';
	let {
		borderClass = '',
		bgImage = '',
		children = undefined,
		...rest
	} = $props<{
		borderClass?: string;
		bgImage?: string;
		children?: Snippet;
	}>();
</script>

<div class="mockup-phone  {borderClass}" {...rest}>
	<div class="mockup-phone-camera"></div>
	<div class="mockup-phone-display">
		{#if bgImage}
			<img alt="wallpaper" src={bgImage} class="w-full h-full object-cover" />
		{:else if children}
			{@render children?.()}
		{/if}
	</div>
</div>
