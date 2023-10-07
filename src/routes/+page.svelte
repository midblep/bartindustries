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

	<div class="bg-gray-200 dark:bg-gray-800" style="height: 150px; overflow: hidden;"><svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;"><path d="M-65.62,-22.99 C146.87,168.99 238.74,166.00 589.37,-22.99 L543.74,181.99 L0.00,150.00 Z" style="stroke: none; fill: rgb(58, 83, 255);"></path></svg></div>

	<div class="bg-[#3A53FF] pt-20">
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