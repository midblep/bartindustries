<script lang="ts">
    export let title: string = "";
    export let image: string = "";
    export let date: string = "";
</script>

<article class="flex flex-col gap-5 lg:gap-10 text-base text-gray-900 dark:text-gray-100">
    <img src={image} class="rounded-xl w-full aspect-[2/1] lg:aspect-[4/1] object-cover" />

    <div class="flex flex-col gap-2 lg:gap-5">
        <h1 class="text-2xl lg:text-6xl font-bold lg:tracking-wide">{title}</h1>
        <div class="flex gap-5 text-sm opacity-50">Posted {date} by Pascal</div>
    </div>

    <hr class="opacity-10 w-1/2 lg:w-1/4"/>

    <div class="prose dark:prose-invert max-w-[1000px]">
        <slot/>
    </div>

    <hr class="opacity-10 w-1/2 lg:w-1/4"/>

    <div class="flex gap-5">Posted {date} by Pascal</div>
</article>