<script lang="ts">
    import * as Dialog from "$lib/components/ui/dialog/index.js";

    export let documentText = "";
    export let orignalSrc = "";
    export let fileSrc = "";
</script>

<Dialog.Root>
    <Dialog.Trigger>
        <slot><!-- optional fallback --></slot>
    </Dialog.Trigger>

    <Dialog.Content class="sm:max-w-[750px] sm:max-h-[80%] overflow-auto ">
        <Dialog.Header class="sticky">
            <Dialog.Title>Snippet Details</Dialog.Title>
        </Dialog.Header>

        <p class="text-md">{documentText}</p>
        <input class="h-0 m-0 p-0" style="position: absolute;" type="text" />
        <Dialog.Footer>
            <a
                class="relative rounded hover:bg-muted hover:underline px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold m-2"
                href={orignalSrc}
                target="_blank">View Original Article</a
            >
            <a
                class="relative rounded hover:bg-muted hover:underline px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold m-2"
                href={fileSrc}
                target="_blank">View File from Research Base</a
            >
        </Dialog.Footer>
    </Dialog.Content>
</Dialog.Root>
