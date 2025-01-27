<script lang="ts">
	let {
		class: className = '',
		children,
		...rest
	} = $props<{
		class?: string;
		children?: () => any;
	}>();
</script>

<div class="card-actions {className}" {...rest}>
	{@render children?.()}
</div>
