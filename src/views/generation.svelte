<script lang="ts">
    import Check from "lucide-svelte/icons/check";
    import ChevronsUpDown from "lucide-svelte/icons/chevrons-up-down";
    import * as Command from "$lib/components/ui/command/index.js";
    import * as Popover from "$lib/components/ui/popover/index.js";
    import { Button } from "$lib/components/ui/button/index.js";
    import { cn } from "$lib/utils.js";
    import { tick } from "svelte";
    import TemplatePreview from "../molecules/template-preview.svelte";
    import { questionString, selectedSnippets } from "../store/chunkStore";
    import { llmQueryStore } from "../store/LLMQueryStore";
    let snippets: any;
    let question: string;
    let additionalPrompt: string;
    let creativity: number[];
    let isLoading: boolean = false;
    selectedSnippets.subscribe((selectedSnippets) => {
        snippets = selectedSnippets;
    });
    questionString.subscribe((questionString) => {
        question = questionString;
    });
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

    function generateAnswer(e: any): void {
        isLoading = true;
        let selectedTemplate = templates.filter((item) => {
            return item.label === selectedValue;
        })[0];
        llmQueryStore.queryLlmWithTemplate(
            snippets,
            question + "\n" + additionalPrompt,
            selectedTemplate.value,
            0.8,
        );
        isLoading = false;
    }
    import { Slider } from "$lib/components/ui/slider/index.js";
    import { Label } from "$lib/components/ui/label";
    import { Textarea } from "$lib/components/ui/textarea";
    import { LoaderCircle } from "lucide-svelte";
</script>

<div class="p-4 flex flex-col gap-6">
    <form>
        <fieldset disabled={isLoading}>
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
                        <ChevronsUpDown
                            class="ml-2 h-4 w-4 shrink-0 opacity-50"
                        />
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
            <div class="grid gap-3">
                <Label for="description">Additional instructions</Label>
                <Textarea
                    disabled={selectedValue === "Select a template..."}
                    id="description"
                    placeholder="Any last minute instructions like number of slides etc.."
                    class="min-h-32"
                    bind:value={additionalPrompt}
                />
            </div>
        </fieldset>
    </form>
    {#if isLoading}
        <Button size="sm" class="ml-auto gap-1.5 " disabled>
            <LoaderCircle class="mr-2 h-4 w-4 animate-spin " />
            Generating Slides.Please wait...
        </Button>
    {:else}
        <Button
            on:click={generateAnswer}
            disabled={selectedValue === "Select a template..."}
            >Generate Slides</Button
        >
    {/if}
</div>
