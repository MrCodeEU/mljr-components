<script lang="ts">
    import { Card, CardBody, CardTitle } from '$lib/comps/card/index.js';
    import { Tabs, TabContent } from '$lib/comps/tabs/index.js';
</script>

<div class="space-y-4">
    <!-- Tabs Example -->
    <Card>
        <CardBody>
            <CardTitle>Tabs Components</CardTitle>
            <div class="flex flex-col lg:flex-row gap-4">
                <div class="flex-1">
                    <Tabs style="box">
                        <input type="radio" name="TabExample" role="tab" class="tab" aria-label="Tab 1" checked />
                        <TabContent>
                            Content 1
                        </TabContent>
                        <input type="radio" name="TabExample" role="tab" class="tab" aria-label="Tab 2" />
                        <TabContent>
                            Content 2
                        </TabContent>
                        <input type="radio" name="TabExample" role="tab" class="tab" aria-label="Tab 3" />
                        <TabContent>
                            Content 3
                        </TabContent>
                    </Tabs>
                </div>
                <div class="flex-1">
                    <Tabs style="lift">
                        <input type="radio" name="TabExample2" role="tab" class="tab" aria-label="Tab 1" checked />
                        <TabContent>
                            Content 1
                        </TabContent>
                        <input type="radio" name="TabExample2" role="tab" class="tab" aria-label="Tab 2" />
                        <TabContent>
                            Content 2
                        </TabContent>
                        <input type="radio" name="TabExample2" role="tab" class="tab" aria-label="Tab 3" />
                        <TabContent>
                            Content 3
                        </TabContent>
                    </Tabs>
                </div>
            </div>
        </CardBody>
    </Card>

    <!-- Other Navigation -->
    <Card>
        <CardBody>
            <CardTitle>Other Navigation Components</CardTitle>
            <p class="text-base-content/70">More navigation components coming soon...</p>
        </CardBody>
    </Card>
</div>
