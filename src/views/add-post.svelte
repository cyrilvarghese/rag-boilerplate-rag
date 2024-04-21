<script lang="ts">
    import * as Resizable from "$lib/components/ui/resizable";
    import type { SourceFile } from "src/types";
    import { onMount } from "svelte";
    import { fileStore } from "../store/fileStore";
    import SourceList from "../molecules/source-list.svelte";
    import Button from "$lib/components/ui/button/button.svelte";
    import EmptyState from "../molecules/empty-state.svelte";
    import AddFileDialog from "./add-file-dialog.svelte";
    import AddNoteDialog from "./add-note-dialog.svelte";
    import AddFromURLDialog from "./add-from-url.svelte";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
    import { ChevronDown } from "lucide-svelte";

    import { ScrollArea } from "$lib/components/ui/scroll-area";
    import Separator from "$lib/components/ui/separator/separator.svelte";
    import Generation from "./generation.svelte";
    import SnippetContainer from "./snippet-container.svelte";

    export let id: string;
    let showFilesDialog: boolean = false;
    let showNoteDialog: boolean = false;
    let showURLDialog: boolean = false;
    onMount(async () => {
        console.log(id);
        await fileStore.fetchFileList();
    });
    let sourceFiles: SourceFile[];
    fileStore.subscribe((fileList) => {
        sourceFiles = fileList;
    });
    let files: FileList | null = null;

    function handleSubmit(
        event: SubmitEvent & { currentTarget: EventTarget & HTMLFormElement },
    ) {
        fileStore.uploadFiles(files);
    }

    function handleFileSelected(
        event: Event & { currentTarget: EventTarget & HTMLInputElement },
    ) {
        showFilesDialog = true;
    }

    function updateShowFlag(e: CustomEvent<any>): void {
        const form = document.getElementById(
            "file-form",
        ) as HTMLFormElement | null;

        console.log("asdasd");
        showFilesDialog = false;

        if (form) {
            form.reset();
        }
    }
    function updateNoteFlag(e: any) {
        showNoteDialog = false;
    }
    function updateFromURLFlag(e: any) {
        showURLDialog = false;
    }
    function uploadFileClick(e: any): void {
        const input = document.getElementById(
            "file-input",
        ) as HTMLFormElement | null;
        input?.click();
    }
</script>

<main class="grid gap-4 p-4 lg:gap-6 lg:p-6">
    <div class="flex items-center">
        <h1 class="text-lg font-semibold md:text-2xl">Create A Post</h1>
    </div>
    <div
        class="flex flex-row grid-row-3 items-start justify-start rounded-lg border border-dashed shadow-sm h-full w-full"
    >
        <!-- column 1 -->
        <div class="w-[25%]">
            <p class=" p-4 pb-0 text-xl text-muted-foreground">
                You Research Base
            </p>
            <form
                id="file-form"
                on:submit|preventDefault={handleSubmit}
                class="grid w=[340px] items-start gap-6 w-[250px]"
            >
                <input
                    type="file"
                    class="hidden h-10 rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-slate-400 hover:bg-slate-500 cursor-pointer w-[250px] text-slate-200"
                    id="file-input"
                    multiple
                    bind:files
                    on:change={handleFileSelected}
                />
                <AddFileDialog
                    on:closeDialog={updateShowFlag}
                    rawFiles={files}
                    isOpen={showFilesDialog}
                />
                <AddFromURLDialog
                    on:closeDialog={updateFromURLFlag}
                    isOpen={showURLDialog}
                />
                <AddNoteDialog
                    on:closeDialog={updateNoteFlag}
                    isOpen={showNoteDialog}
                />
            </form>
            <div class="p-4">
                <DropdownMenu.Root>
                    <DropdownMenu.Trigger
                        ><Button variant="secondary" class="w-[220px]"
                            >Add To Research Base <ChevronDown
                                class="w-4 h-4 ml-4"
                            /></Button
                        ></DropdownMenu.Trigger
                    >
                    <DropdownMenu.Content side="bottom-end" class="w-[220px]">
                        <DropdownMenu.Group>
                            <DropdownMenu.Item on:click={uploadFileClick}
                                >Upload A File</DropdownMenu.Item
                            >
                            <DropdownMenu.Item
                                on:click={() => {
                                    showNoteDialog = true;
                                }}>Add A Note</DropdownMenu.Item
                            >
                            <DropdownMenu.Item
                                on:click={() => {
                                    showURLDialog = true;
                                }}>Add From A URL</DropdownMenu.Item
                            >
                        </DropdownMenu.Group>
                    </DropdownMenu.Content>
                </DropdownMenu.Root>
            </div>
            <div class="p-4 w-[100%]">
                <ScrollArea class=" h-[calc(100vh-312px)] w-[screen]">
                    <SourceList files={sourceFiles} />
                </ScrollArea>
            </div>
        </div>
        <Separator orientation="vertical" />
        <!-- column 2 -->
        <div class="w-[45%]">
            <SnippetContainer />
        </div>
        <Separator orientation="vertical" />

        <!-- column 3 -->
        <div class="w-[30%]">
            <p class=" p-4 pb-0 text-xl text-muted-foreground">Generation</p>
            <Generation />
        </div>
    </div>
</main>
