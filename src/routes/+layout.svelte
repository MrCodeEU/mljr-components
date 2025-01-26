<script lang="ts">
	import { i18n } from '$lib/i18n.js';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	let { children } = $props();
	import "../app.css";
</script>

<ParaglideJS {i18n}>
	{@render children()}
</ParaglideJS>
