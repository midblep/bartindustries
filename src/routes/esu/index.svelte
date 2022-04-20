<script>
import Card from "$lib/home/Card.svelte";

	import Socials from "$lib/Socials.svelte";
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<main>

	<div class="relative h-screen" style="background-image: url('/esu/banner.jpg')">
		<!-- <img class="absolute inset-0" src="/esu/banner.jpg" /> -->
		<div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white dark:to-black"></div>

		<div class="absolute h-96 inset-0 flex flex-col justify-center items-center mt-20">
			<h1 class="baron text-white text-9xl drop-shadow-xl">easter system <br/> <h2 class="baron text-white text-7xl ml-1">UNIVERSE</h2></h1>
		</div>
	</div>

	<div class="-mt-40 h-screen relative">
		<section class="mt-40 absolute inset-0 bg-white dark:bg-black">
		</section>
		<section class="absolute inset-0 triangle h-full w-2/3 mx-auto bg-gradient-to-t from-amber-500 to-red-600 z-0">
		</section>

		<div class="absolute inset-0 h-96 mt-60 flex flex-col gap-20 justify-start items-center w-1/2 mx-auto">
			<div>
				<h1 class="baron-light text-black dark:text-white text-4xl">ACT 1</h1>
				<hr class="w-1/2 my-2" />
				<h1 class="baron text-black dark:text-white text-8xl">luther's throne</h1>
			</div>
		</div>
	</div>

</main>

<style>
	.triangle {
		clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
	}
</style>