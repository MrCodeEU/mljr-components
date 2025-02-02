<script lang="ts">
	import { Card, CardBody, CardTitle } from '$lib/comps/layout/card/index.js';
	import Browser from '$lib/comps/mockups/Browser.svelte';
</script>

<Card>
	<CardTitle>Browser</CardTitle>
	<CardBody>
        <Browser url="https://www.google.com">
            <div class="flex flex-col gap-4 p-6 border-t border-base-300">
                <div class="flex justify-center">
                    <div class="w-2/3">
                        <input type="text" placeholder="Search..." class="w-full px-4 py-2 rounded-full border border-gray-300">
                    </div>
                </div>
                <div class="grid grid-cols-3 gap-4">
                    <div class="p-4 bg-base-200 rounded-lg aspect-video flex items-center justify-center">
                        <span class="text-4xl">📱</span>
                        <span class="text-4xl">Mobile</span>
                    </div>
                    <div class="p-4 bg-base-200 rounded-lg aspect-video flex items-center justify-center">
                        <span class="text-4xl">💻</span>
                        <span class="text-4xl">Laptop</span>
                    </div>
                    <div class="p-4 bg-base-200 rounded-lg aspect-video flex items-center justify-center">
                        <span class="text-4xl">🖥️</span>
                        <span class="text-4xl">Desktop</span>
                    </div>
                </div>
            </div>
        </Browser>
	</CardBody>
</Card>
