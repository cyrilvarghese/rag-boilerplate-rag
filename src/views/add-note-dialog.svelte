<script lang="ts">
    import * as Table from "$lib/components/ui/table/index.js";
    import { Button } from "$lib/components/ui/button/index.js";
    import * as Dialog from "$lib/components/ui/dialog/index.js";
    import { Input } from "$lib/components/ui/input/index.js";
    import { Label } from "$lib/components/ui/label/index.js";
    import { fileStore } from "../store/fileStore";
    import * as Card from "$lib/components/ui/card/index.js";
    import { Textarea } from "$lib/components/ui/textarea/index.js";
    import { createEventDispatcher, onMount } from "svelte";
    const dispatch = createEventDispatcher();
    export let isOpen: boolean = false;

    function handleOpenChange(isOpen: boolean) {
        isOpen = isOpen; // Ensuring openModal is updated with dialog's state
        if (!isOpen) {
            dispatch("closeDialog");
        }
    }
    function handleSubmit(event: any) {
        // fileStore.uploadFiles(rawFiles);
    }
    onMount(() => {
        
        console.log(isOpen);
    });
</script>

<Dialog.Root open={isOpen} onOpenChange={handleOpenChange} >
    <Dialog.Content class="sm:max-w-[750px] sm:max-h-[80%] overflow-auto ">
        <Dialog.Header>
            <Dialog.Title>Add A Note</Dialog.Title>
            <Dialog.Description
                >Add a note or text you want to be part of your research
                documents</Dialog.Description
            >
        </Dialog.Header>

        <div class="grid gap-6 pt-2">
            <div class="grid gap-3">
                <Label for="description">Note Text</Label>
                <Textarea
                    id="description"
                    placeholder="Lorem ipsum dolor sit."
                    class="min-h-32"
                />
            </div>
        </div>

        <Dialog.Footer style="justify-content: start;">
            <Button type="submit" on:click={handleSubmit}>Save changes</Button>
        </Dialog.Footer>
    </Dialog.Content>
</Dialog.Root>
