<script lang="ts">
	import { browser } from "$app/env";
	import Preview from "$lib/blog/Preview.svelte";
	import { onMount } from "svelte";

    let posts: BlogPost[] = [
        {
            image: "/blog/releasingpuppypride.png",
            title: "Releasing Puppy Pride",
            content: "It has taken me a while to develop, actually over 2.5 years of solo fullstack development with zero experience, but I finally managed to release and deploy the new Puppy Pride social network. There have definitely been ups an downs, and in this post I'd like to touch a little on what it took to get here and the lessons I learned along the way.",
            url: "/blog/releasing-puppy-pride",
            date: "August 11th 2023",
            isNew: true,
        },
        // {
        //     image: "/blog/thepowerofvr.png",
        //     title: "The power of VR",
        //     content: "This website is a testament to my love of VR, I have a whole section dedicated to it after all. But in this post I'd like to touch a little more on why that is, on why I've created such a deep bond with a world that isn't even real to most, or at best a failed dream of out of touch billionares.",
        //     url: "/blog/the-power-of-vr",
        //     date: "August 1st 2023",
        //     isNew: true,
        // },
        // {
        //     image: "/blog/myinternshipatagroit.png",
        //     title: "My internship at Agro IT",
        //     content: "My year 3 internship as part of my study at Saxion University, I chose to work for Agro IT, a small company that creates software solutions for several types of businesses. At the end of it, I was asked to launch what I made and was offered a job. In this post I'd like to touch a little more on what went right or wrong, and what the lessons were I learned while working there.",
        //     url: "/blog/my-internship-at-agro-it",
        //     date: "August 1st 2023",
        //     isNew: true,
        // },
        {
            image: "/blog/centeringadiv.png",
            title: "Centering a div",
            content: "On the web...",
            url: "/blog/centering-a-div",
            date: "August 11th 2023",
            isNew: true,
        }
    ];

    onMount(() => {
        if(browser) {
            const slider: HTMLElement = document.querySelector('.items');
            let isDown = false;
            let startX;
            let scrollLeft;

            slider.addEventListener('mousedown', (e) => {
                isDown = true;
                slider.classList.add('active');
                startX = e.pageX - slider.offsetLeft;
                scrollLeft = slider.scrollLeft;
            });
            slider.addEventListener('mouseleave', () => {
                isDown = false;
                slider.classList.remove('active');
            });
            slider.addEventListener('mouseup', () => {
                isDown = false;
                slider.classList.remove('active');
            });
            slider.addEventListener('mousemove', (e) => {
                if(!isDown) return;
                e.preventDefault();
                const x = e.pageX - slider.offsetLeft;
                const walk = (x - startX) * 1; //scroll-fast
                slider.scrollLeft = scrollLeft - walk;
                console.log(walk);
            });
            slider.addEventListener('wheel', (evt) => {
                evt.preventDefault();
                slider.scrollLeft += evt.deltaY;
            });
        }
    });
</script>

{#if posts.length > 0}
    <section class="relative container flex flex-col gap-5 lg:gap-20">
        <div class="absolute top-0 -mt-40" id="blog"></div>

        <h2 class="text-center w-full text-4xl lg:text-6xl tracking-[0.2em] lg:tracking-[1em] font-bold">&lt;-- BLOG --&gt;</h2>

        <div class="flex flex-col lg:flex-row gap-5 overflow-visible">

            <span>
                <Preview url={posts[0].url} title={posts[0].title} preview={posts[0].content.substring(0, 255) + ( posts[0].content.length > 255 ? "..." : "")} date={posts[0].date} image={posts[0].image} featured={true} isNew={posts[0].isNew} />
            </span>

            {#if posts.length == 1}
                <p class="p-10 text-sm opacity-50">No more posts to show...</p>
            {:else}
                <div class="grid grid-flow-col grid-rows-2 grid-cols-[repeat(12, 400px)] w-full gap-5 overflow-x-scroll pb-5 scrollbar scrollbar-thumb-white dark:scrollbar-thumb-black scrollbar-h-3 scrollbar-track-transparent scrollbar-thumb-rounded-full items">
                    {#each posts as post, key}
                        {#if key != 0}
                            <Preview url={post.url} title={post.title} date={post.date} image={post.image} featured={false} isNew={post.isNew} />
                        {/if}
                    {/each}
                </div>
            {/if}
        </div>

    </section>
{:else}
    <section class="relative container flex flex-col gap-5 lg:gap-20">
        <div class="absolute top-0 -mt-40" id="blog"></div>

        <h2 class="text-center w-full text-4xl lg:text-6xl tracking-[0.2em] lg:tracking-[1em] font-bold">&lt;-- BLOG --&gt;</h2>

        <p class="p-10 text-sm opacity-50 text-center w-full">No posts to show...</p>
    </section>
{/if}