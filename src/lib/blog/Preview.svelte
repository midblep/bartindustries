<script lang="ts">
    export let url = "";
    export let title = "";
    export let preview = "";
    export let date = "";
    export let image = "";
    export let featured: boolean = false;
    export let isNew: boolean = false;
</script>

{#if featured}
    <a href={url} class="flex flex-col gap-2 w-full lg:w-[600px] flex-none p-3 hover:bg-opacity-50 bg-opacity-0 dark:bg-opacity-0 relative hover:dark:bg-opacity-50 dark:bg-black bg-white duration-200 rounded-xl">
        {#if image.length > 0}
            <img src={image} class="rounded-lg w-full aspect-[2/1] object-cover" alt={title} />
        {/if}
        {#if isNew}
            <div class="absolute top-0 right-0 text-xl bg-blue-500 text-white font-bold px-5 rounded-full blob">New!</div>
        {/if}
        <h4 class="font-bold text-lg w-full text-justify">{title}</h4>
        <p class="text-xs lg:text-sm">
            {preview}
        </p>
        <sub class="text-xs">{date}</sub>
    </a>
{:else}
    <a href={url} class="flex flex-col gap-2 w-full relative flex-none p-3 hover:bg-opacity-50 bg-opacity-0 dark:bg-opacity-0 hover:dark:bg-opacity-50 dark:bg-black bg-white duration-200 rounded-xl">
        {#if image.length > 0}
            <img src={image} class="rounded-lg w-full aspect-[2/1] object-cover" alt={title} />
        {/if}
        {#if isNew}
            <div class="absolute top-2 right-0 bg-blue-500 text-white font-bold px-5 rounded-full blob">New!</div>
        {/if}
        <h4 class="font-bold text-lg w-full text-justify">{title}</h4>
        <sub class="text-xs">{date}</sub>
    </a>
{/if}

<style>
    .blob {
        animation-name: blob;
        animation-duration: 2s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
    }

    @keyframes blob {
        0% {
            transform: scale(1) rotate(10deg);
        }
        50% {
            transform: scale(1.1) rotate(10deg);
        }
        100% {
            transform: scale(1) rotate(10deg);
        }
    }
</style>