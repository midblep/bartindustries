<script>
	import Banner from '$lib/home/Banner.svelte';
	import Blog from '$lib/home/Blog.svelte';
	import Portfolio from '$lib/home/Portfolio.svelte';
	import Sona from '$lib/home/Sona.svelte';
	import Virtual from '$lib/home/Virtual.svelte';
	import Furry from '$lib/home/Furry.svelte';
</script>

<svelte:head>
	<title>Bart Industries</title>
</svelte:head>

<main class="overflow-x-hidden flex flex-col">
	<Banner />

	<div class="bg-gray-200 dark:bg-gray-800 pb-20">
		<Blog />
	</div>

	<div
		class="bg-gradient-to-b from-gray-200 via-gray-100 dark:via-gray-900 dark:from-gray-800 w-full"
	>
		<div class="bg-[#3A53FF] rounded-t-[50px] py-20 lg:mx-5 relative">
			<div
				class="absolute inset-0 w-full h-full bg-no-repeat bg-cover bg-top rounded-t-[50px]"
				style="background-image: url('portfoliobackg.svg')"
			/>

			<Portfolio />
		</div>
	</div>

	<img class="scale-150 lg:mx-5 lg:scale-100 -mt-[1px]" src="/homepage/steps.svg" />

	<div class="py-20">
		<Sona />
	</div>

	<div class="bg-repeat-y bg-contain dotsandlines mt-20 mb-20">
		<Virtual />
	</div>

	<!-- <Furry/> -->
</main>
