<script lang="ts">
	let {
		type = undefined,
		width = undefined,
		height = undefined,
		class: className = '',
		children,
		...rest
	} = $props<{
		type?: 'avatar' | 'card' | 'list' | 'table' | 'article';
		width?: string;
		height?: string;
		class?: string;
		children?: () => any;
	}>();

	let classes = $derived([className].filter(Boolean).join(' '));
	let style = $derived([
		width ? `width: ${width}` : '',
		height ? `height: ${height}` : ''
	].filter(Boolean).join(';'));
</script>

{#if children}
	<div class={classes} style={style} {...rest}>
		{@render children?.()}
	</div>
{:else}
	{#if type === 'avatar'}
		<div class="flex w-52 flex-col gap-4">
			<div class="flex items-center gap-4">
				<div class="skeleton h-16 w-16 shrink-0 rounded-full"></div>
				<div class="flex flex-col gap-4">
					<div class="skeleton h-4 w-20"></div>
					<div class="skeleton h-4 w-28"></div>
				</div>
			</div>
			<div class="skeleton h-32 w-full"></div>
		</div>
	{:else if type === 'card'}
		<div class="flex w-52 flex-col gap-4">
			<div class="skeleton h-32 w-full"></div>
			<div class="skeleton h-4 w-28"></div>
			<div class="skeleton h-4 w-full"></div>
			<div class="skeleton h-4 w-full"></div>
		</div>
	{:else if type === 'list'}
		<div class="flex w-full flex-col gap-4">
			{#each Array(3) as _}
				<div class="flex items-center gap-4">
					<div class="skeleton h-12 w-12 shrink-0 rounded-full"></div>
					<div class="flex flex-col gap-2 flex-1">
						<div class="skeleton h-4 w-1/3"></div>
						<div class="skeleton h-4 w-full"></div>
					</div>
				</div>
			{/each}
		</div>
	{:else if type === 'table'}
		<div class="flex w-full flex-col gap-4">
			<div class="skeleton h-8 w-full"></div>
			{#each Array(4) as _}
				<div class="flex gap-4">
					<div class="skeleton h-4 w-28"></div>
					<div class="skeleton h-4 flex-1"></div>
					<div class="skeleton h-4 w-20"></div>
				</div>
			{/each}
		</div>
	{:else if type === 'article'}
		<div class="flex w-full flex-col gap-4">
			<div class="skeleton h-8 w-2/3"></div>
			<div class="skeleton h-32 w-full"></div>
			{#each Array(3) as _}
				<div class="skeleton h-4 w-full"></div>
			{/each}
			<div class="skeleton h-4 w-2/3"></div>
		</div>
	{:else}
		<div class={classes} style={style} {...rest}>
            <div class="skeleton h-4 w-full"></div>
        </div>
	{/if}
{/if}
