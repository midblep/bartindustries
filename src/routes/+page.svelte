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

	<section class="flex flex-col">
		<div class="bg-gray-200 dark:bg-gray-800 py-20">
			<Blog/>
		</div>

		<svg class="hidden dark:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1f2937" fill-opacity="1" d="M0,224L48,186.7C96,149,192,75,288,69.3C384,64,480,128,576,133.3C672,139,768,85,864,101.3C960,117,1056,203,1152,234.7C1248,267,1344,245,1392,234.7L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
		<svg class="dark:hidden block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#e5e7eb" fill-opacity="1" d="M0,224L48,186.7C96,149,192,75,288,69.3C384,64,480,128,576,133.3C672,139,768,85,864,101.3C960,117,1056,203,1152,234.7C1248,267,1344,245,1392,234.7L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
	</section>

	<div class="flex flex-col gap-40 pb-40">
		<Portfolio/>

		<div class="flex flex-col">
			<img class="dark:hidden block scale-150 lg:scale-100" src="/homepage/aboutwhite.svg" />
			<img class="hidden dark:block scale-150 lg:scale-100" src="/homepage/aboutdark.svg" />

			<div class="bg-gray-200 dark:bg-gray-800 py-20 lg:-mt-20">
				<Sona/>
			</div>

			<img class="dark:hidden block rotate-180 lg:-mt-10 scale-150 lg:scale-100" src="/homepage/aboutwhite.svg" />
			<img class="hidden dark:block rotate-180 lg:-mt-10 scale-150 lg:scale-100" src="/homepage/aboutdark.svg" />
		</div>

		<div class="bg-repeat-y bg-contain dotsandlines">
			<Virtual/>
		</div>

		<!-- <hr class="container opacity-10 mx-auto w-1/2"/>

		<Furry/> -->
	</div>
</main>