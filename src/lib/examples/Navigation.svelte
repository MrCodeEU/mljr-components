<script lang="ts">
    import { Card, CardBody, CardTitle } from '$lib/comps/card/index.js';
    import { Tabs, TabContent } from '$lib/comps/navs/tabs/index.js';
    import { Accordion, AccordionItem } from '$lib/comps/navs/accordion/index.js';
    import { Breadcrumbs, BreadcrumbItem } from '$lib/comps/navs/breadcrumbs/index.js';
    import { Drawer, DrawerContent, DrawerSide, DrawerToggle } from '$lib/comps/navs/drawer/index.js';
    import Button from '$lib/comps/forms/Button.svelte';
    import fileplus from 'lucide-svelte/icons/file-plus';
    import folder from 'lucide-svelte/icons/folder';
    import menu from 'lucide-svelte/icons/menu';

    // Add state for drawers
    let basicDrawerOpen = false;
    let responsiveDrawerOpen = false;
    let endDrawerOpen = false;
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

    <!-- Add before the "Other Navigation" card -->
    <Card>
        <CardBody>
            <CardTitle>Breadcrumbs</CardTitle>
            <div class="space-y-4">
                <!-- Basic -->
                <div>
                    <h3 class="font-semibold mb-2">Basic Breadcrumbs</h3>
                    <Breadcrumbs>
                        <BreadcrumbItem href="home">Home</BreadcrumbItem>
                        <BreadcrumbItem href="home/documents">Documents</BreadcrumbItem>
                        <BreadcrumbItem>Add Document</BreadcrumbItem>
                    </Breadcrumbs>
                </div>

                <!-- With Icons -->
                <div>
                    <h3 class="font-semibold mb-2">Breadcrumbs with Icons</h3>
                    <Breadcrumbs>
                        <BreadcrumbItem href="home" icon={folder}>Home</BreadcrumbItem>
                        <BreadcrumbItem href="home/documents" icon={folder}>Documents</BreadcrumbItem>
                        <BreadcrumbItem icon={fileplus}>Add Document</BreadcrumbItem>
                    </Breadcrumbs>
                </div>

                <!-- Max Width -->
                <div>
                    <h3 class="font-semibold mb-2">Breadcrumbs with Max Width</h3>
                    <Breadcrumbs maxWidth>
                        <BreadcrumbItem href="section1">Long text 1</BreadcrumbItem>
                        <BreadcrumbItem href="section1/section2">Long text 2</BreadcrumbItem>
                        <BreadcrumbItem href="section1/section2/section3">Long text 3</BreadcrumbItem>
                        <BreadcrumbItem href="section1/section2/section3/section4">Long text 4</BreadcrumbItem>
                        <BreadcrumbItem>Long text 5</BreadcrumbItem>
                    </Breadcrumbs>
                </div>
            </div>
        </CardBody>
    </Card>

    <!-- Add before Other Navigation -->
    <Card>
        <CardBody>
            <CardTitle>Drawer Navigation</CardTitle>
            <div class="space-y-4">
                <!-- Basic Drawer -->
                <div>
                    <h3 class="font-semibold mb-2">Basic Drawer</h3>
                    <div class="h-64 border rounded-lg relative overflow-hidden">
                        <Drawer id="basic-drawer" bind:open={basicDrawerOpen}>
                            <DrawerContent class="flex items-center justify-center">
                                <Button onclick={() => basicDrawerOpen = !basicDrawerOpen}>
                                    Open Drawer
                                </Button>
                            </DrawerContent>
                            <DrawerSide drawerId="basic-drawer">
                                <ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                                    <li><a href="#top">Sidebar Item 1</a></li>
                                    <li><a href="#top">Sidebar Item 2</a></li>
                                </ul>
                            </DrawerSide>
                        </Drawer>
                    </div>
                </div>

                <!-- Responsive Drawer -->
                <div>
                    <h3 class="font-semibold mb-2">Responsive Drawer</h3>
                    <div class="h-64 border rounded-lg relative overflow-hidden">
                        <Drawer id="responsive-drawer" responsive bind:open={responsiveDrawerOpen}>
                            <DrawerContent class="flex items-center justify-center">
                                <Button onclick={() => responsiveDrawerOpen = !responsiveDrawerOpen} class="lg:hidden">
                                    Open Drawer
                                </Button>
                            </DrawerContent>
                            <DrawerSide drawerId="responsive-drawer">
                                <ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                                    <li><a href="#top">Sidebar Item 1</a></li>
                                    <li><a href="#top">Sidebar Item 2</a></li>
                                </ul>
                            </DrawerSide>
                        </Drawer>
                    </div>
                </div>

                <!-- Right Side Drawer -->
                <div>
                    <h3 class="font-semibold mb-2">Right Side Drawer</h3>
                    <div class="h-64 border rounded-lg relative overflow-hidden">
                        <Drawer id="end-drawer" end bind:open={endDrawerOpen}>
                            <DrawerContent class="flex items-center justify-center">
                                <Button onclick={() => endDrawerOpen = !endDrawerOpen}>
                                    Open Right Drawer
                                </Button>
                            </DrawerContent>
                            <DrawerSide drawerId="end-drawer">
                                <ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                                    <li><a href="#top">Sidebar Item 1</a></li>
                                    <li><a href="#top">Sidebar Item 2</a></li>
                                </ul>
                            </DrawerSide>
                        </Drawer>
                    </div>
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
