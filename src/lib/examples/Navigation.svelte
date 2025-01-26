<script lang="ts">
    import { Card, CardBody, CardTitle } from '$lib/comps/card/index.js';
    import { Tabs, TabContent } from '$lib/comps/navs/tabs/index.js';
    import { Accordion, AccordionItem } from '$lib/comps/navs/accordion/index.js';
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

    <!-- Accordion Examples -->
    <Card>
        <CardBody>
            <CardTitle>Basic Accordion</CardTitle>
            <Accordion>
                <AccordionItem name="basic-demo" title="How do I create an account?" checked>
                    Click the "Sign Up" button in the top right corner and follow the registration process.
                </AccordionItem>
                <AccordionItem name="basic-demo" title="I forgot my password. What should I do?">
                    Click on "Forgot Password" on the login page and follow the instructions sent to your email.
                </AccordionItem>
                <AccordionItem name="basic-demo" title="How do I update my profile information?">
                    Go to "My Account" settings and select "Edit Profile" to make changes.
                </AccordionItem>
            </Accordion>
        </CardBody>
    </Card>

    <Card>
        <CardBody>
            <CardTitle>Accordion with Arrow Icons</CardTitle>
            <Accordion>
                <AccordionItem name="arrow-demo" variant="arrow" title="How do I create an account?" checked>
                    Click the "Sign Up" button in the top right corner and follow the registration process.
                </AccordionItem>
                <AccordionItem name="arrow-demo" variant="arrow" title="I forgot my password. What should I do?">
                    Click on "Forgot Password" on the login page and follow the instructions sent to your email.
                </AccordionItem>
                <AccordionItem name="arrow-demo" variant="arrow" title="How do I update my profile information?">
                    Go to "My Account" settings and select "Edit Profile" to make changes.
                </AccordionItem>
            </Accordion>
        </CardBody>
    </Card>

    <Card>
        <CardBody>
            <CardTitle>Joined Accordion with Plus Icons</CardTitle>
            <Accordion joined>
                <AccordionItem name="plus-demo" variant="plus" title="How do I create an account?" checked class="join-item">
                    Click the "Sign Up" button in the top right corner and follow the registration process.
                </AccordionItem>
                <AccordionItem name="plus-demo" variant="plus" title="I forgot my password. What should I do?" class="join-item">
                    Click on "Forgot Password" on the login page and follow the instructions sent to your email.
                </AccordionItem>
                <AccordionItem name="plus-demo" variant="plus" title="How do I update my profile information?" class="join-item">
                    Go to "My Account" settings and select "Edit Profile" to make changes.
                </AccordionItem>
            </Accordion>
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
