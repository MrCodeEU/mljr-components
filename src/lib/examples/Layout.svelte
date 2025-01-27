<script lang="ts">
	import { Card, CardBody, CardTitle } from '$lib/comps/layout/card/index.js';
	import { Collapse, CollapseTitle, CollapseContent } from '$lib/comps/layout/collapse/index.js';
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

	<Card>
		<CardBody>
			<CardTitle>Collapse Components</CardTitle>
			<div class="grid grid-cols-1 gap-4">
				<Collapse icon="arrow">
					<CollapseTitle>Click me to show/hide content</CollapseTitle>
					<CollapseContent>
						<p>This is the collapse content that can be toggled</p>
					</CollapseContent>
				</Collapse>

				<Collapse icon="plus" useFocus={false}>
					<CollapseTitle>Checkbox-based collapse with plus/minus</CollapseTitle>
					<CollapseContent>
						<p>This collapse uses a checkbox instead of focus to control state</p>
					</CollapseContent>
				</Collapse>

				<Collapse open={true}>
					<CollapseTitle>Force open collapse</CollapseTitle>
					<CollapseContent>
						<p>This collapse is forced to stay open</p>
					</CollapseContent>
				</Collapse>
			</div>
		</CardBody>
	</Card>
</div>
