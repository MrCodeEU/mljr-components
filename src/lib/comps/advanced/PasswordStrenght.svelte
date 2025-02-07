<script lang="ts">
    import Progress from '$lib/comps/feedback/Progress.svelte';

		import zxcvbn from 'zxcvbn';

        let {
                password = "",
                minLabel = "weal",
                maxLabel = "very strong",
                strengthLabels = ["weak", "not good", "good", "strong", "perfect"],
                colors = ["error", "warning", "info", "accent", "success"],
		} = $props<{
			password?: string;
			minLabel?: string;
			maxLabel?: string;
			strengthLabel?: string[];
			value?: number;
		}>();

    const max = 5;
		let result = $derived(zxcvbn(password))
		let value = $derived(result.score+1)

		let strengthLabel = $derived(strengthLabels[value-1])
		let color = $derived(colors[value-1])
</script>

<Progress value={value} max={max} color={color} size="lg"/>
{strengthLabel}