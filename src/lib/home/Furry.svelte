<script lang="ts">
	import { browser } from "$app/environment";
	import { onMount } from "svelte";

    onMount(() => {
        if(browser) {
            const slider: HTMLElement = document.querySelector('.items');
            let isDown = false;
            let startX;
            let scrollLeft;
            let lastKnownScrollLeft;

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
            });
            slider.addEventListener('wheel', (evt) => {
                slider.scrollLeft += evt.deltaY;
                if(slider.scrollLeft != lastKnownScrollLeft) evt.preventDefault();
                lastKnownScrollLeft = slider.scrollLeft;
            });
        }
    });
</script>

<main class="flex flex-col gap-20 relative @container">
    <div class="absolute top-0 -mt-40" id="furry"></div>

	<div class="flex flex-col gap-10">
        <h3 class="whitepigeon text-blue-600 text-center -rotate-3 font-bold text-6xl @2xl:text-8xl">Party animal</h3>

        <p class="text-center opacity-80 text-xl max-w-6xl mx-auto">
            Being a furry is a big part of my life, and my most expensive hobby.
            Furries are people who really like the cartoon animals from shows and movies, and come together to celebrate the creativity of human individuals.
            I created several characters that I use to express myself, one of which is the black cat on this website called Mid.
            Below are some of my adventures as a furry with the people I love being around.
        </p>

        <div class="flex gap-5 overflow-x-auto p-10 scrollbar scrollbar-thumb-white dark:scrollbar-thumb-black scrollbar-h-3 scrollbar-track-transparent scrollbar-thumb-rounded-full items">
            <img src="/homepage/furry/2.jpg" class="rounded-xl shadow-xl h-[60vh]" alt="ended" />
            <img src="/homepage/furry/3.jpg" class="rounded-xl shadow-xl h-[60vh]" alt="ended" />
            <video class="rounded-xl shadow-xl h-[60vh]" controls autoplay muted loop height="60vh" width="auto">
                <source src="/homepage/furry/4.mp4" type="video/mp4">
                    Your browser does not support the video tag.
            </video>
            <img src="/homepage/furry/6.jpg" class="rounded-xl shadow-xl h-[60vh]" alt="ended" />
            <video class="rounded-xl shadow-xl h-[60vh]" controls autoplay muted loop height="60vh" width="auto">
                <source src="/homepage/furry/5.mp4" type="video/mp4">
                    Your browser does not support the video tag.
            </video>
            <video class="rounded-xl shadow-xl h-[60vh]" controls autoplay muted loop height="60vh" width="auto">
                <source src="/homepage/furry/7.mp4" type="video/mp4">
                    Your browser does not support the video tag.
            </video>
        </div>
    </div>
</main>