<script lang="ts">
	import { goto } from '$app/navigation';
	import type { Icon as IconType } from 'lucide-svelte';

	let {
		href = '',
		icon = undefined,
		baseUrl = '/webapp/lists',
		class: className = '',
		children,
		...rest
	} = $props<{
		href?: string;
		icon?: typeof IconType;
		baseUrl?: string;
		class?: string;
		children?: () => any;
	}>();

	function handleClick() {
		if (href) {
			goto(`${baseUrl}/${href}`);
		}
	}

	let isLink = $derived(!!href);
</script>

{#if isLink}
	<li>
		<a {href} onclick={handleClick} class={className} {...rest}>
			<span class="inline-flex items-center gap-2">
				{#if icon}
					{@const Icon = icon}
					<Icon aria-label="enabled" class="h-4 w-4 shrink-0" />
				{/if}
				{@render children?.()}
			</span>
		</a>
	</li>
{:else}
	<li>
		<span class="inline-flex items-center gap-2">
			{#if icon}
				{@const Icon = icon}
				<Icon aria-label="enabled" class="h-4 w-4 shrink-0" />
			{/if}
			{@render children?.()}
		</span>
	</li>
{/if}
