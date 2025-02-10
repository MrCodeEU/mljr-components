<script lang="ts">
	import Avatar from '$lib/comps/media/Avatar.svelte';

	// Keep-alive constant for Tailwind purge - DO NOT REMOVE
	const _ = [
		'chat chat-start chat-end',
		'chat-bubble-neutral chat-bubble-primary chat-bubble-secondary chat-bubble-accent',
		'chat-bubble-info chat-bubble-success chat-bubble-warning chat-bubble-error'
	].join(' ');

	let {
		position = 'start',
		color = undefined,
		avatar = undefined,
		avatarSize = '12',
		header = undefined,
		footer = undefined,
		timestamp = undefined,
		author = undefined,
		class: className = '',
		children,
		...rest
	} = $props<{
		position?: 'start' | 'end';
		color?:
			| 'neutral'
			| 'primary'
			| 'secondary'
			| 'accent'
			| 'info'
			| 'success'
			| 'warning'
			| 'error';
		avatar?: string;
		avatarSize?: string;
		header?: string;
		footer?: string;
		timestamp?: Date;
		author?: string;
		class?: string;
		children?: () => any;
	}>();

	let classes = $derived(['chat', `chat-${position}`, className].filter(Boolean).join(' '));

	let bubbleClasses = $derived(
		['chat-bubble', 'clay', 'clay-lg', 'clay-rounded-lg', color && `chat-bubble-${color}`]
			.filter(Boolean)
			.join(' ')
	);

	let formattedTime: string = $derived.by(() => {
		if (!timestamp) return '';
		return timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
	});
</script>

<div class={classes} {...rest}>
	{#if avatar}
		<div class="chat-image avatar">
			<div class="w-{avatarSize} rounded-full">
				<Avatar src={avatar} size={avatarSize} roundedFull />
			</div>
		</div>
	{/if}

	{#if header || author || timestamp}
		<div class="chat-header">
			{#if author}{author}{/if}
			{#if timestamp}
				<time class="text-xs opacity-50">{formattedTime}</time>
			{/if}
			{#if header && (author || timestamp)}<br />{/if}
			{#if header}{header}{/if}
		</div>
	{/if}

	<div class={bubbleClasses}>
		{@render children?.()}
	</div>

	{#if footer}
		<div class="chat-footer opacity-50">
			{footer}
		</div>
	{/if}
</div>
