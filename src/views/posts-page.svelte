<script lang="ts">
    import { onMount } from "svelte";
    import { activeRoute } from "../store/routerStore";
    import { Badge } from "$lib/components/ui/badge";
    import * as Card from "$lib/components/ui/card/index.js";
    import * as Table from "$lib/components/ui/table/index.js";
    import EmptyState from "../molecules/empty-state.svelte";
    import { Button } from "$lib/components/ui/button";
    import { Link } from "svelte-routing";
    import { Plus } from "lucide-svelte";

    onMount(() => {
        let location = window.location;
        activeRoute.set(location.href);
    });
</script>

<main class="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
    <div class="flex flex-row justify-between">
        <h1 class="text-lg font-semibold md:text-2xl">Posts</h1>
        <Link to="/posts/new">
            <Button>
                <Plus class="w-4 h-4 mr-2" />
                Add New Post
            </Button>
        </Link>
    </div>
    <div
        class="flex flex-1 hidden items-start justify-start rounded-lg shadow-sm"
    >
        <EmptyState
            title="You have no Files"
            description=" Start by creating by Creating a Job to upload files"
            addButtonText="Add Job"
            showAddAction
        />
    </div>

    <Card.Root class="pt-4">
        <Card.Content>
            <Table.Root>
                <Table.Header>
                    <Table.Row class="bg-accent">
                        <Table.Head>Post Content</Table.Head>
                        <Table.Head class="hidden sm:table-cell"
                            >Platform</Table.Head
                        >
                        <Table.Head class="hidden sm:table-cell"
                            >Status</Table.Head
                        >
                        <Table.Head class="hidden md:table-cell"
                            >Scheduled Date</Table.Head
                        >
                        <Table.Head class="text-right">Engagement</Table.Head>
                    </Table.Row>
                </Table.Header>

           
                <Table.Body>
                    <!-- Row 1 -->
                    <Table.Row  >
                        <Table.Cell>
                            <div class="font-medium">
                                Exciting product launch next week!
                            </div>
                            <div
                                class="hidden text-sm text-muted-foreground md:inline"
                            >
                                #NewRelease #Tech
                            </div>
                        </Table.Cell>
                        <Table.Cell class="hidden sm:table-cell"
                            >Twitter</Table.Cell
                        >
                        <Table.Cell class="hidden sm:table-cell">
                            <Badge class="text-xs" variant="secondary"
                                >Scheduled</Badge
                            >
                        </Table.Cell>
                        <Table.Cell class="hidden md:table-cell"
                            >2023-07-01</Table.Cell
                        >
                        <Table.Cell class="text-right"
                            >120 Likes, 30 Retweets</Table.Cell
                        >
                    </Table.Row>
                    <!-- Row 2 -->
                    <Table.Row>
                        <Table.Cell>
                            <div class="font-medium">
                                Join our webinar on AI innovations.
                            </div>
                            <div
                                class="hidden text-sm text-muted-foreground md:inline"
                            >
                                Register now! #AIWebinar
                            </div>
                        </Table.Cell>
                        <Table.Cell class="hidden sm:table-cell"
                            >Facebook</Table.Cell
                        >
                        <Table.Cell class="hidden sm:table-cell">
                            <Badge class="text-xs" variant="secondary"
                                >Published</Badge
                            >
                        </Table.Cell>
                        <Table.Cell class="hidden md:table-cell"
                            >2023-06-29</Table.Cell
                        >
                        <Table.Cell class="text-right"
                            >200 Likes, 50 Shares</Table.Cell
                        >
                    </Table.Row>
                    <!-- Row 3 -->
                    <Table.Row>
                        <Table.Cell>
                            <div class="font-medium">
                                Tips for a healthier lifestyle!
                            </div>
                            <div
                                class="hidden text-sm text-muted-foreground md:inline"
                            >
                                #HealthTips #Wellness
                            </div>
                        </Table.Cell>
                        <Table.Cell class="hidden sm:table-cell"
                            >Instagram</Table.Cell
                        >
                        <Table.Cell class="hidden sm:table-cell">
                            <Badge class="text-xs" variant="outline"
                                >Scheduled</Badge
                            >
                        </Table.Cell>
                        <Table.Cell class="hidden md:table-cell"
                            >2023-07-05</Table.Cell
                        >
                        <Table.Cell class="text-right"
                            >300 Likes, 80 Comments</Table.Cell
                        >
                    </Table.Row>
                    <!-- Row 4 -->
                    <Table.Row>
                        <Table.Cell>
                            <div class="font-medium">
                                Spotlight on our top employees this month!
                            </div>
                            <div
                                class="hidden text-sm text-muted-foreground md:inline"
                            >
                                Celebrating success! #EmployeeOfTheMonth
                            </div>
                        </Table.Cell>
                        <Table.Cell class="hidden sm:table-cell"
                            >LinkedIn</Table.Cell
                        >
                        <Table.Cell class="hidden sm:table-cell">
                            <Badge class="text-xs" variant="secondary"
                                >Published</Badge
                            >
                        </Table.Cell>
                        <Table.Cell class="hidden md:table-cell"
                            >2023-06-30</Table.Cell
                        >
                        <Table.Cell class="text-right"
                            >150 Likes, 40 Shares</Table.Cell
                        >
                    </Table.Row>
                    <!-- Row 5 -->
                    <Table.Row>
                        <Table.Cell>
                            <div class="font-medium">
                                Our new store opening soon in your city!
                            </div>
                            <div
                                class="hidden text-sm text-muted-foreground md:inline"
                            >
                                #GrandOpening #NewStore
                            </div>
                        </Table.Cell>
                        <Table.Cell class="hidden sm:table-cell"
                            >Instagram</Table.Cell
                        >
                        <Table.Cell class="hidden sm:table-cell">
                            <Badge class="text-xs" variant="secondary"
                                >Scheduled</Badge
                            >
                        </Table.Cell>
                        <Table.Cell class="hidden md:table-cell"
                            >2023-07-10</Table.Cell
                        >
                        <Table.Cell class="text-right"
                            >450 Likes, 100 Comments</Table.Cell
                        >
                    </Table.Row>
                    <!-- Row 6 -->
                    <Table.Row>
                        <Table.Cell>
                            <div class="font-medium">
                                Discover our latest product features!
                            </div>
                            <div
                                class="hidden text-sm text-muted-foreground md:inline"
                            >
                                #Innovation #Tech
                            </div>
                        </Table.Cell>
                        <Table.Cell class="hidden sm:table-cell"
                            >YouTube</Table.Cell
                        >
                        <Table.Cell class="hidden sm:table-cell">
                            <Badge class="text-xs" variant="secondary"
                                >Published</Badge
                            >
                        </Table.Cell>
                        <Table.Cell class="hidden md:table-cell"
                            >2023-06-28</Table.Cell
                        >
                        <Table.Cell class="text-right"
                            >500 Views, 200 Likes</Table.Cell
                        >
                    </Table.Row>
                    <!-- Row
                
                 7 -->
                    <Table.Row>
                        <Table.Cell>
                            <div class="font-medium">
                                How to use our products to solve everyday
                                problems!
                            </div>
                            <div
                                class="hidden text-sm text-muted-foreground md:inline"
                            >
                                #HowTo #Solutions
                            </div>
                        </Table.Cell>
                        <Table.Cell class="hidden sm:table-cell"
                            >Blog</Table.Cell
                        >
                        <Table.Cell class="hidden sm:table-cell">
                            <Badge class="text-xs" variant="outline"
                                >Draft</Badge
                            >
                        </Table.Cell>
                        <Table.Cell class="hidden md:table-cell"
                            >To be decided</Table.Cell
                        >
                        <Table.Cell class="text-right">0 Views</Table.Cell>
                    </Table.Row>
                    <!-- Row 8 -->
                    <Table.Row>
                        <Table.Cell>
                            <div class="font-medium">
                                Celebrate our community's achievements this
                                year!
                            </div>
                            <div
                                class="hidden text-sm text-muted-foreground md:inline"
                            >
                                #Community #Achievements
                            </div>
                        </Table.Cell>
                        <Table.Cell class="hidden sm:table-cell"
                            >Facebook</Table.Cell
                        >
                        <Table.Cell class="hidden sm:table-cell">
                            <Badge class="text-xs" variant="secondary"
                                >Scheduled</Badge
                            >
                        </Table.Cell>
                        <Table.Cell class="hidden md:table-cell"
                            >2023-07-03</Table.Cell
                        >
                        <Table.Cell class="text-right"
                            >100 Likes, 25 Shares</Table.Cell
                        >
                    </Table.Row>
                    <!-- Row 9 -->
                    <Table.Row>
                        <Table.Cell>
                            <div class="font-medium">
                                Flash sale this weekend only!
                            </div>
                            <div
                                class="hidden text-sm text-muted-foreground md:inline"
                            >
                                Don't miss out! #FlashSale
                            </div>
                        </Table.Cell>
                        <Table.Cell class="hidden sm:table-cell"
                            >Twitter</Table.Cell
                        >
                        <Table.Cell class="hidden sm:table-cell">
                            <Badge class="text-xs" variant="secondary"
                                >Published</Badge
                            >
                        </Table.Cell>
                        <Table.Cell class="hidden md:table-cell"
                            >2023-06-27</Table.Cell
                        >
                        <Table.Cell class="text-right"
                            >300 Likes, 100 Retweets</Table.Cell
                        >
                    </Table.Row>
                    <!-- Row 10 -->
                    <Table.Row>
                        <Table.Cell>
                            <div class="font-medium">
                                Behind the scenes at our latest event.
                            </div>
                            <div
                                class="hidden text-sm text-muted-foreground md:inline"
                            >
                                #Event #BehindTheScenes
                            </div>
                        </Table.Cell>
                        <Table.Cell class="hidden sm:table-cell"
                            >Instagram</Table.Cell
                        >
                        <Table.Cell class="hidden sm:table-cell">
                            <Badge class="text-xs" variant="outline"
                                >Draft</Badge
                            >
                        </Table.Cell>
                        <Table.Cell class="hidden md:table-cell"
                            >To be decided</Table.Cell
                        >
                        <Table.Cell class="text-right">0 Likes</Table.Cell>
                    </Table.Row>
                </Table.Body>
             
            </Table.Root>
        </Card.Content>
    </Card.Root>
</main>
