<script lang="ts">
    import Check from "lucide-svelte/icons/check";
    import ChevronsUpDown from "lucide-svelte/icons/chevrons-up-down";
    import * as Command from "$lib/components/ui/command/index.js";
    import * as Popover from "$lib/components/ui/popover/index.js";
    import { Button } from "$lib/components/ui/button/index.js";
    import { cn } from "$lib/utils.js";
    import { tick } from "svelte";
    import TemplatePreview from "../molecules/template-preview.svelte";

    const templates = [
        {
            value: "branding",
            label: "Branding Slides",
        },
        {
            value: "creativity",
            label: "Creativity Slides",
        },
        {
            value: "goals",
            label: "Goals Slides",
        },
        {
            value: "innovation",
            label: "Innovation Slides",
        },
        {
            value: "statistics",
            label: "Statistics Slides",
        },
        {
            value: "statistics-specific",
            label: "Statistics Template specific",
        },
    ];
    let open = false;
    let value = "";

    $: selectedValue =
        templates.find((f) => f.value === value)?.label ??
        "Select a template...";

    // We want to refocus the trigger button when the user selects
    // an item from the list so users can continue navigating the
    // rest of the form with the keyboard.
    function closeAndFocusTrigger(triggerId: string) {
        open = false;
        tick().then(() => {
            document.getElementById(triggerId)?.focus();
        });
    }
</script>

<div class="p-4 flex flex-col gap-6">
    <Popover.Root bind:open let:ids>
        <Popover.Trigger asChild let:builder class="">
            <Button
                builders={[builder]}
                variant="outline"
                role="combobox"
                aria-expanded={open}
                class="w-[300px]  flex flex-row justify-between"
            >
                {selectedValue}
                <ChevronsUpDown class="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
        </Popover.Trigger>
        <Popover.Content class="w-[300px] p-0">
            <Command.Root>
                <Command.Input placeholder="Search template..." />
                <Command.Empty>No template found.</Command.Empty>
                <Command.Group>
                    {#each templates as template}
                        <Command.Item
                            value={template.value}
                            onSelect={(currentValue) => {
                                value = currentValue;
                                closeAndFocusTrigger(ids.trigger);
                            }}
                        >
                            <Check
                                class={cn(
                                    "mr-2 h-4 w-4",
                                    value !== template.value &&
                                        "text-transparent",
                                )}
                            />
                            {template.label}
                        </Command.Item>
                    {/each}
                </Command.Group>
            </Command.Root>
        </Popover.Content>
    </Popover.Root>

    <TemplatePreview templateName={selectedValue} />
</div>
