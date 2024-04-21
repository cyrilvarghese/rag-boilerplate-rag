<script lang="ts">
    import { Button } from "$lib/components/ui/button/index.js";
    import * as Dialog from "$lib/components/ui/dialog/index.js";
    import { Input } from "$lib/components/ui/input/index.js";
    import { Label } from "$lib/components/ui/label/index.js";
    import * as Card from "$lib/components/ui/card/index.js";
    import { createEventDispatcher, onMount } from "svelte";
    import { Textarea } from "$lib/components/ui/textarea";
    const dispatch = createEventDispatcher();
    export let isOpen: boolean = false;
    export let urlString: string = "";
    $: urlArray = urlString.split(",");
    function handleOpenChange(isOpen: boolean) {
        isOpen = isOpen; // Ensuring openModal is updated with dialog's state
        if (!isOpen) {
            dispatch("closeDialog");
        }
    }
    function handleSubmit(event: any) {
        // fileStore.uploadFiles(rawFiles);
        //sunmit urlArray
    }
    onMount(() => {
        console.log(isOpen);
    });
</script>

<Dialog.Root open={isOpen} onOpenChange={handleOpenChange}>
    <Dialog.Content class="sm:max-w-[750px] sm:max-h-[80%] overflow-auto ">
        <Dialog.Header>
            <Dialog.Title>Add From URL</Dialog.Title>
            <Dialog.Description
                >Enter a website address or YouTube URL below</Dialog.Description
            >
        </Dialog.Header>
        <div class="grid gap-6 pt-2">
            <div class="grid gap-3">
                <Label for="description">URL</Label>
                <Textarea
                    id="description"
                    placeholder="you can add multiple comma separated URLs"
                    class="min-h-32"
                    bind:value={urlString}
                />
            </div>
        </div>

        <Dialog.Footer
            style="justify-content: start;"
            class="flex flex-row items-start justify-start"
        >
            <Button type="submit" on:click={handleSubmit}>Save changes</Button>
        </Dialog.Footer>
    </Dialog.Content>
</Dialog.Root>
