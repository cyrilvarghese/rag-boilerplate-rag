<script lang="ts">
    import * as Table from "$lib/components/ui/table/index.js";
    import { Button } from "$lib/components/ui/button/index.js";
    import * as Dialog from "$lib/components/ui/dialog/index.js";
    import { Input } from "$lib/components/ui/input/index.js";
    import { Label } from "$lib/components/ui/label/index.js";
    import { fileStore } from "../store/fileStore";

    import { createEventDispatcher, onMount } from "svelte";
    const dispatch = createEventDispatcher();
    export let isOpen: boolean = false;
    export let rawFiles: FileList | null;
    $: filesToUpload = rawFiles ? Array.from(rawFiles) : [];
    let fromPgNm: number;
    let toPgNm: number;
    function handleOpenChange(isOpen: boolean) {
        isOpen = isOpen; // Ensuring openModal is updated with dialog's state
        if (!isOpen) {
            dispatch("closeDialog");
        }
    }
    function handleSubmit(event: any) {
        fileStore.uploadFiles(rawFiles);
    }
    onMount(() => {
       
        console.log(isOpen);
    });
</script>

<Dialog.Root open={isOpen} onOpenChange={handleOpenChange}>
    <Dialog.Content class="sm:max-w-[750px] sm:max-h-[80%] overflow-auto ">
        <Dialog.Header>
            <Dialog.Title>Upload Files</Dialog.Title>
            <Dialog.Description>Select files to be uploaded</Dialog.Description>
        </Dialog.Header>

        <Table.Root>
            <Table.Header>
                <Table.Row>
                    <Table.Head class="w-[500px]">Name</Table.Head>
                    <Table.Head>From Page</Table.Head>
                    <Table.Head>To Page</Table.Head>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {#each filesToUpload as file}
 
                    <Table.Row>
                        <Table.Cell class="font-semibold"
                            >{file.name}</Table.Cell
                        >
                        <Table.Cell>
                            <Label for="price-1" class="sr-only"
                                >From Page Number</Label
                            >
                            <Input
                                id="frmPg"
                                type="number"
                                bind:value={fromPgNm}
                            />
                        </Table.Cell>
                        <Table.Cell>
                            <Label for="stock-1" class="sr-only"
                                >To Page Number</Label
                            >
                            <Input
                                id="toPg"
                                type="number"
                                bind:value={toPgNm}
                            />
                        </Table.Cell>
                    </Table.Row>
                {/each}
            </Table.Body>
        </Table.Root>

        <Dialog.Footer>
            <Button type="submit" on:click={handleSubmit}>Save changes</Button>
        </Dialog.Footer>
    </Dialog.Content>
</Dialog.Root>
