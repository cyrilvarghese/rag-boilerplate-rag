<script lang="ts">
    import ScrollArea from "$lib/components/ui/scroll-area/scroll-area.svelte";
    import type { SourceFile } from "../types";
    import FileItem from "./file-item.svelte";
    export let files: SourceFile[] = [];
</script>

{#each files as file (file.name)}
    <FileItem variant="simple" {file} />
    <!-- More job details here -->
{/each}
