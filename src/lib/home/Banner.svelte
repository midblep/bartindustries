<script>
	import Socials from "$lib/Socials.svelte";

	const array = [
		"/banner1.png",
		"/banner2.png",
		"/banner3.png",
		"/banner4.png",
		"/banner5.jpeg",
		"/banner6.png",
		"/banner7.png",
		"/banner8.png",
	];

	const randomBannerPic = array[Math.floor(Math.random() * array.length)];
</script>

<main class="flex gap-10 items-center justify-between px-6 lg:px-20">
	<div class="flex flex-col gap-5 justify-center w-full">
		<span>
			<img src="/hello.png" alt="Hello!" class="h-20 popout" />
		</span>

		<span class="flex flex-wrap gap-2 items-end">
			<h2 class="text-4xl font-extrabold">I'm Midnight,</h2>
			<span class="text-3xl font-extralight">
				i like to make things on the interwebs
			</span>
		</span>

		<hr class="w-1/3 my-2" />

		<span class="my-2">
			<p class="text-gray-800 dark:text-gray-300 lg:w-3/4">
				Bart Industries is a collection of my works, projects and
				ambitions <br /> including my furry characters, stories and other
				things i feel like sharing online.
			</p>
		</span>

		<Socials />
	</div>

	<div class="hidden lg:block float h-full w-2/3">
		<img
			src={randomBannerPic}
			alt="mid"
			class="rounded-xl shadow-xl w-full"
			data-tilt data-tilt-max="10" data-tilt-speed="200" data-tilt-perspective="1000"
			data-tilt-glare data-tilt-max-glare="0.8"
			data-tilt-reverse="true"
			data-tilt-reset="false"
		/>
	</div>
</main>

<style>
	.popout {
		animation: popout;
		animation-duration: 1s;
		animation-timing-function: ease-in-out;
	}

	@keyframes popout {
		0% {
			transform: scale(1) rotate(0deg);
		}
		50% {
			transform: scale(1.2) rotate(-5deg);
		}
		100% {
			transform: scale(1) rotate(0deg);
		}
	}

	@keyframes float {
		0% {
			padding-top: 0px;
			padding-bottom: 10px;
		}
		50% {
			padding-top: 10px;
			padding-bottom: 0px;
		}
		100% {
			padding-top: 0px;
			padding-bottom: 10px;
		}
	}

	.float {
		animation: float;
		animation-duration: 3s;
		animation-iteration-count: infinite;
		animation-timing-function: ease-in-out;
	}

	@keyframes float {
		0% {
			padding-top: 0px;
			padding-bottom: 10px;
		}
		50% {
			padding-top: 10px;
			padding-bottom: 0px;
		}
		100% {
			padding-top: 0px;
			padding-bottom: 10px;
		}
	}
</style>
