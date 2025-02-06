<script lang="ts">
	import Alert from '$lib/comps/feedback/Alert.svelte';
	import Progress from '$lib/comps/feedback/Progress.svelte';
	import Button from '$lib/comps/forms/Button.svelte';
	import X from 'lucide-svelte/icons/x';
	import type { Toast } from './toast.store.js';

	let { toast, onClose } = $props<{
		toast: Toast;
		onClose: () => void;
	}>();

	let progressValue = $state(100);
	let startTime = Date.now();

	$effect(() => {
		if (toast.showProgress && toast.duration !== Infinity) {
			const interval = setInterval(() => {
				const elapsed = Date.now() - startTime;
				progressValue = Math.max(0, 100 - (elapsed / toast.duration!) * 100);
				if (progressValue <= 0) clearInterval(interval);
			}, 10);

			return () => clearInterval(interval);
		}
	});
</script>

<div class="relative">
    <Alert color={toast.type === 'custom' ? 'info' : toast.type}  >
		<!-- Progress bar moved outside the flex container -->
		{#if toast.showProgress && toast.duration !== Infinity}
			<div class="absolute bottom-0 left-0 right-0 px-3">
				<Progress 
					value={progressValue} 
					size="xs" 
				/>
			</div>
		{/if}
		<div class="flex justify-between items-center gap-2 -me-6">
			{#if toast.icon}
				{@const Icon = toast.icon}
				<Icon class="h-6 w-6 shrink-0" />
			{/if}			
			<div class="flex-1">
				{#if toast.title}
					<h4 class="font-bold">{toast.title}</h4>
				{/if}
				<p>{toast.message}</p>
				{#if toast.action}
					<div class="mt-2">
						<Button size="sm" onclick={toast.action.onClick}>{toast.action.label}</Button>
					</div>
				{/if}
			</div>

			<Button style="ghost" modifier="circle" size="sm" onclick={onClose}>
				<X class="h-4 w-4" />
			</Button>
		</div>
    </Alert>
</div>
