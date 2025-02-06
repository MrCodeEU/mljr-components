<script lang="ts">
	import Button from '../forms/Button.svelte';
	// Keep-alive constant for Tailwind purge - DO NOT REMOVE
	const _ = ['modal-top modal-middle modal-bottom modal-start modal-end', 'modal-open'].join(' ');

	let {
		id,
		open = $bindable(false),
		placement = undefined,
		width = undefined,
		closeOnClickOutside = true,
		cornerButton = false,
		class: className = '',
		children,
		...rest
	} = $props<{
		id: string;
		open?: boolean;
		placement?: 'top' | 'middle' | 'bottom' | 'start' | 'end';
		width?: string;
		closeOnClickOutside?: boolean;
		cornerButton?: boolean;
		class?: string;
		children?: () => any;
	}>();

	let dialogRef: HTMLDialogElement;
	let classes = $derived(
		['modal', placement ? `modal-${placement}` : '', open ? 'modal-open' : '', className]
			.filter(Boolean)
			.join(' ')
	);

	$effect(() => {
		if (open && dialogRef) {
			dialogRef.showModal();
		} else if (dialogRef && dialogRef.open) {
			dialogRef.close();
		}
	});

	function handleFormSubmit(e: Event) {
		e.preventDefault();
		open = false;
	}
</script>

<dialog bind:this={dialogRef} {id} class={classes} onclose={() => (open = false)} {...rest}>
	<div
		class="modal-box clay clay-lg clay-rounded-lg !relative"
		class:w-full={width}
		style={width ? `max-width: ${width}` : ''}
	>
		{#if cornerButton}
			<Button style="ghost" modifier="circle" size="sm" class="float-end" onclick={handleFormSubmit}
				>✕</Button
			>
		{/if}
		<div class="modal-content">
			{@render children?.()}
		</div>
	</div>
	{#if closeOnClickOutside}
		<form method="dialog" class="modal-backdrop" onsubmit={handleFormSubmit}>
			<button>close</button>
		</form>
	{/if}
</dialog>

<svelte:window
	onkeydown={(e) => {
		if (e.key === 'Escape' && open) {
			open = false;
		}
	}}
/>
