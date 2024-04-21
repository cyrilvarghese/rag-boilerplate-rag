<script lang="ts">
    import { Separator } from "$lib/components/ui/separator";
    import { Checkbox } from "$lib/components/ui/checkbox";
    import { Label } from "$lib/components/ui/label";
    import type { SourceFile } from "../types";
    import { FileText } from "lucide-svelte";
    import { createEventDispatcher } from "svelte";

    let checked: boolean | "indeterminate" | undefined = false;

    /**
     * Determines the variant of the component, which affects its styling and potentially its behavior.
     * - "simple" for a basic variant without additional features.
     * - "w-checkbox" for a variant that includes a checkbox.
     *
     * @prop {'simple' | 'w-checkbox'} variant - The variant type.
     */
    export let variant: "simple" | "w-checkbox";
    export let file: SourceFile;
    /**
     * Enum for specifying the variant of the component.
     * @enum {string}
     */

    function onCheckedChange(isChecked: boolean | "indeterminate") {
        console.log(isChecked);
        checked = isChecked;
    }
    const fileItemClicked = async function () {
        //maintain a list of selected items
        //call the store methods with new list of selctedfilenames
    };
</script>

{#if variant === "w-checkbox"}
    <!-- content here -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->

    <div
        role="button"
        tabindex="0"
        on:click={fileItemClicked}
        class="items-top flex space-x-2 hover:bg-muted flex-row items-start py-1 pl-2 pr-4 my-2.5 cursor-pointer rounded-sm {checked
            ? 'bg-muted '
            : ''}"
    >
        <Checkbox id="file{file.name}" {checked} {onCheckedChange} />
        <div class="grid gap-1.5 leading-none w-[250px]">
            <Label
                for="file{file.name}"
                class="text-md hover:underline font-medium leading-none truncate "
            >
                {file.name}
            </Label>
            <p class="text-sm text-muted-foreground">
                {file.path}
            </p>
        </div>
    </div>
{:else}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
        role="button"
        tabindex="0"
        on:click={fileItemClicked}
        class="rounded-md flex flex-rowtruncate hover:bg-muted hover:underline cursor-pointer flex-start items-center border align-baseline px-4 py-3 font-mono text-sm w-[320px] mb-2 {checked
            ? 'bg-muted '
            : ''}"
    >
        <FileText class="mr-2" />
        <a href={file.path} target="_blank" class=" w-[250px] truncate"
            >{file.name}</a
        >
    </div>
{/if}
