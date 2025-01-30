<script lang="ts">
	import { toasts } from './toast.store.js';
	import Toast from './Toast.svelte';
	import { fade } from 'svelte/transition';

	const positions = [
		'top-start',
		'top-center',
		'top-end',
		'middle-start',
		'middle-center',
		'middle-end',
		'bottom-start',
		'bottom-center',
		'bottom-end'
	] as const;

	const positionClasses = {
		'top-start': 'toast toast-top toast-start',
		'top-center': 'toast toast-top toast-center',
		'top-end': 'toast toast-top toast-end',
		'middle-start': 'toast toast-middle toast-start',
		'middle-center': 'toast toast-middle toast-center',
		'middle-end': 'toast toast-middle toast-end',
		'bottom-start': 'toast toast-start',
		'bottom-center': 'toast toast-center',
		'bottom-end': 'toast toast-end'
	};
</script>

{#each positions as position}
	{#if $toasts[position].length > 0}
		<div class={positionClasses[position]}>
			{#each $toasts[position] as toast (toast.id)}
				<div transition:fade class="space-y-2">
					<Toast {toast} onClose={() => toasts.remove(toast.id, position)} />
				</div>
			{/each}
		</div>
	{/if}
{/each}
