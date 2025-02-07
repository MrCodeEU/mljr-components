<script lang="ts">
	// Keep-alive constant for Tailwind purge - DO NOT REMOVE
	const _ = [
		'w-32 w-24 w-20 w-16 w-12 w-8',
		'rounded rounded-xl rounded-full',
		'mask mask-squircle mask-hexagon mask-triangle',
		'avatar-online avatar-offline',
		'ring-primary ring-secondary ring-accent ring-info ring-success ring-warning ring-error',
		'text-3xl text-xl text-xs'
	].join(' ');

	let {
		src = '',
		alt = '',
		size = '24',
		rounded = false,
		roundedFull = false,
		mask = '',
		status = '',
		ring = false,
		ringColor = 'primary',
		placeholder = '',
		group = false,
		class: className = '',
		children,
		...rest
	} = $props<{
		src?: string;
		alt?: string;
		size?: '32' | '24' | '20' | '16' | '12' | '8';
		rounded?: boolean;
		roundedFull?: boolean;
		mask?: 'squircle' | 'hexagon' | 'triangle';
		status?: 'online' | 'offline';
		ring?: boolean;
		ringColor?: 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error';
		placeholder?: string;
		group?: boolean;
		children?: () => any;
		class?: string;
	}>();

	let containerClass = $derived(
		['avatar',  status && `avatar-${status}`, placeholder && 'avatar-placeholder', className]
			.filter(Boolean)
			.join(' ')
	);

	let imageClass = $derived(
		[
			`w-${size} h-${size}`, // Add height to match width
			placeholder
				? 'rounded-full'
				: rounded
					? 'rounded-xl'
					: roundedFull
						? 'rounded-full'
						: !mask && 'rounded',
			mask && `mask mask-${mask}`,
			ring && `ring ring-${ringColor} ring-offset-base-100 ring-offset-2`,
			placeholder && 'bg-neutral text-neutral-content flex items-center justify-center'
		]
			.filter(Boolean)
			.join(' ')
	);

	let placeholderTextClass = $derived(
		size === '32' || size === '24'
			? 'text-3xl'
			: size === '20' || size === '16'
				? 'text-xl'
				: size === '8'
					? 'text-xs'
					: ''
	);
</script>

{#if group}
	<div class="avatar-group -space-x-6">
		{@render children?.()}
	</div>
{:else}
	<div class={containerClass} {...rest}>
		<div class={imageClass}>
			{#if placeholder}
				<span class={placeholderTextClass}>
					{placeholder}
				</span>
			{:else}
				<img {src} {alt} class="w-full h-full object-cover" />
			{/if}
		</div>
	</div>
{/if}
