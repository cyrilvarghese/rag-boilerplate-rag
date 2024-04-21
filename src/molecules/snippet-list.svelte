<script lang="ts">
    import { cn } from "$lib/utils.js";
    import { ScrollArea } from "$lib/components/ui/scroll-area";
    import type { Tag } from "src/types/index.js";
    import { onMount } from "svelte";
    import ChunkDetails from "./snippet-details-dialog.svelte";
    import {
        snippetStore,
        type QueryRequest,
        type Snippet,
    } from "../store/chunkStore";
    let snippets: any[] = [];
    snippetStore.subscribe((relevantSnippets) => {
        debugger;
        snippets = [...relevantSnippets];
    });
</script>

<main>
    <div class="flex flex-col gap-6 p-4">
        {@debug snippets}
        {#each snippets as data}
            <ChunkDetails
                documentText={data.page_content}
                orignalSrc={data.url_source}
                fileSrc={data.file_source}
            >
                <button
                    class={cn(
                        "  flex flex-col bg-white items-start gap-2 rounded-lg shadow-sm  p-4 text-left text-sm transition-all hover:bg-accent hover:shadow",
                    )}
                >
                    <div
                        class="line-clamp-2 text-sm m-4 ml-0 text-muted-foreground"
                    >
                        {data.page_content}
                    </div>
                </button>
            </ChunkDetails>
        {/each}
    </div>
</main>
