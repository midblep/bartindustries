<script>
	import Banner from "$lib/home/Banner.svelte";
	import Blog from "$lib/home/Blog.svelte";
	import Portfolio from "$lib/home/Portfolio.svelte";
	import Sona from "$lib/home/Sona.svelte";
	import Virtual from "$lib/home/Virtual.svelte";
	import Furry from "$lib/home/Furry.svelte";
</script>

<svelte:head>
	<title>Bart Industries</title>
</svelte:head>

<main class="overflow-x-hidden flex flex-col">
	<Banner />

	<div class="bg-gray-200 dark:bg-gray-800">
		<Blog/>
	</div>

	<img class="dark:hidden block scale-100" src="/homepage/topfadelight.svg" />
    <img class="hidden dark:block scale-100" src="/homepage/topfadedark.svg" />

	<div class="bg-[#3A53FF]">
		<Portfolio/>
	</div>

	<img class="dark:hidden block scale-150 lg:scale-100 bg-[#3A53FF]" src="/homepage/aboutwhite.svg" />
	<img class="hidden dark:block scale-150 lg:scale-100 bg-[#3A53FF]" src="/homepage/aboutdark.svg" />

	<div class="bg-gray-200 dark:bg-gray-800 pt-20 lg:-mt-20">
		<Sona/>
	</div>

	<div class="dotsandlines">
		<div class="h-[400px] bg-gradient-to-b from-gray-200 dark:from-gray-800"></div>
	</div>

	<div class="bg-repeat-y bg-contain dotsandlines pb-20">
		<Virtual/>
	</div>

	<!-- <Furry/> -->
</main>