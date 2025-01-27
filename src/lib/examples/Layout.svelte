<script lang="ts">
	import { Card, CardBody, CardTitle } from '$lib/comps/card/index.js';
</script>

<div class="space-y-4">
	<Card>
		<CardBody>
			<CardTitle>Card Components</CardTitle>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
				<Card style="border">
					<CardBody>
						<CardTitle>Border Style</CardTitle>
						<p>Card with border style</p>
					</CardBody>
				</Card>
				<Card modifier="side" class="h-32">
					<figure>
						<img src="https://picsum.photos/100/100" alt="Side" />
					</figure>
					<CardBody>
						<CardTitle>Side Image</CardTitle>
						<p>Card with side image</p>
					</CardBody>
				</Card>
			</div>
		</CardBody>
	</Card>
</div>
