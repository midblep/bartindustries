<script>
	import Socials from "$lib/Socials.svelte";
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<main>

	<div class="relative mt-10 h-screen">
		<section class="absolute inset-0 triangle h-screen mx-auto bg-gradient-to-t from-amber-500 to-red-600 z-0"></section>

		<div class="absolute inset-0 bg-cover h-96 rounded-xl -rotate-2 mt-20 bg-center w-8/12 mx-auto shadow-2xl" style="background-image: url('/esu/banner.jpg')">
		</div>

		<div class="absolute h-96 inset-0 flex flex-col justify-center items-center mt-20">
			<h1 class="baron text-white text-9xl drop-shadow-xl">easter system <br/> <h2 class="baron text-white text-7xl ml-1">UNIVERSE</h2></h1>
		</div>
	</div>

	<div>
		<section class="h-screen bg-amber-500"></section>
	</div>

</main>

<style>
	.triangle {
		clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
	}
</style>