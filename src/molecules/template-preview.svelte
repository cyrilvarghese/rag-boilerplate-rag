<script lang="ts">
    import { ChevronDown, Circle, Plus } from "lucide-svelte";
    import { Button } from "$lib/components/ui/button/index.js";
    import * as Card from "$lib/components/ui/card/index.js";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
    import { Separator } from "$lib/components/ui/separator/index.js";
    import { StarIcon } from "lucide-svelte";
    export let templateName: string = "";
</script>

<Card.Root class={templateName === "Select a template..." ? "hidden" : ""}>
    <Card.Header class="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
        <div class="space-y-1">
            <Card.Title>{templateName}</Card.Title>
            <Card.Description>
                Create slides in Figma using the {templateName}
            </Card.Description>
        </div>
    </Card.Header>
    <Card.Content>
        <div class="flex space-x-4 text-sm text-muted-foreground">
            <div class="flex items-center">
                <Circle
                    class="mr-1 h-3 w-3 fill-green-400 text-sky-400 animate-pulse"
                />
                Figma Plugin Connected
            </div>
        </div>
    </Card.Content>
</Card.Root>
