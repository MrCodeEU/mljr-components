<script lang="ts">
	import PasswordStrength from '$lib/comps/advanced/PasswordStrenght.svelte';
	import { Card, CardBody, CardTitle } from '$lib/comps/layout/card/index.js';
	import TextInput from '$lib/comps/forms/input/TextInput.svelte';
	import FloatingLabel from '$lib/comps/utils/FloatingLabel.svelte';

	let password = $state('');
</script>

<Card class="m-10">
	<CardBody>
		<CardTitle>Advanced Components</CardTitle>
		<div class="w-1/2">
			<FloatingLabel text="Password" >
				<TextInput bind:value={password} class="mb-5"/>
			</FloatingLabel>
			<PasswordStrength password={password} />
		</div>
	</CardBody>
</Card>