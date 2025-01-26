<script lang="ts">
    import { Card, CardBody, CardTitle } from '$lib/comps/card/index.js';
    import { Tabs, TabContent } from '$lib/comps/navs/tabs/index.js';
    import { Accordion, AccordionItem } from '$lib/comps/navs/accordion/index.js';
    import { Breadcrumbs, BreadcrumbItem } from '$lib/comps/navs/breadcrumbs/index.js';
    import fileplus from 'lucide-svelte/icons/file-plus';
    import folder from 'lucide-svelte/icons/folder';

    const folderIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="h-4 w-4 stroke-current">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
    </svg>`;

    const addDocIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="h-4 w-4 stroke-current">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
    </svg>`;
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

    <!-- Other Navigation -->
    <Card>
        <CardBody>
            <CardTitle>Other Navigation Components</CardTitle>
            <p class="text-base-content/70">More navigation components coming soon...</p>
        </CardBody>
    </Card>
</div>
