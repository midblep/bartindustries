<script>
	import Socials from "$lib/Socials.svelte";
	import { onMount } from "svelte";

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

	const words = [
		"JavaScript",
		"TypeScript",
		"MySQL",
		"Laravel",
		"PHP",
		"Livewire",
		"NestJS",
		"NodeJS",
		"PostgreSQL",
		"TailwindCSS",
		"Bootstrap",
		"Fontawesome",
		"Sass",
		"Webpack",
		"Redis",
		"Svelte",
		"SvelteKit",
		"Python",
		"Java",
		"JavaFX",
		"NGINX",
		"Docker",
		"REST",
		"GraphQL",
		"TypeORM",
		"Eloquent"
	];

	onMount(() => {
		for(let j = 0; j < 20; j++) {
			let list = document.createElement('div');
			list.classList.add('flex', 'gap-2');

			for (let i = 0; i < 20; i++) {
				const word = words[Math.floor(Math.random() * words.length)];
				let element = document.createElement('span');
				element.innerHTML = word;

				list.appendChild(element);
			}

			document.getElementById('lists').appendChild(list);
		}
	});

	let randomBannerPic = array[Math.floor(Math.random() * array.length)];
	randomBannerPic = "/banner.png";
</script>

<main class="flex gap-5 items-center pt-5 pb-60 justify-between px-6 lg:px-20 relative z-0 overflow-hidden">
	<div class="absolute inset-0 w-full h-full flex flex-col items-center gap-1 justify-center font-bold anim text-xs" id="lists"></div>

	<div class="container flex gap-5 items-center pt-5 pb-20 justify-between px-6 lg:px-20">
		<div class="hidden lg:block h-full w-1/2 z-10">
			<img
				src={randomBannerPic}
				alt="mid"
			/>
		</div>

		<div class="flex flex-col gap-5 justify-center w-3/5 z-10">
			<span>
				<img src="/helloblue.png" alt="Hello!" class="h-20 popout" />
			</span>

			<span class="flex flex-wrap gap-2 items-end">
				<h2 class="text-4xl font-extrabold">I'm Midnight,</h2>
				<span class="text-3xl font-extralight">
					i like to make things on the web
				</span>
			</span>

			<hr class="w-1/3 my-2" />

			<span class="my-2">
				<p class="text-gray-800 dark:text-gray-300 lg:w-3/4">
					Bart Industries is a collection of everything I've done such as my projects, involvements and ambitions,
					but also other things such as my furry side, stories and everything else I feel like sharing.
					<br/><br/>
					I am open for work opportunities,
					If you want to reach out you can use one of the methods below or <a href="#contact" class="a">use the contact form</a>.
				</p>
			</span>

			<Socials />
		</div>
	</div>
</main>

<style>
	.anim {
		user-select: none;
		opacity: 2%;
		overflow: hidden;
		animation: anim;
		animation-duration: 200s;
		animation-timing-function: linear;
		animation-iteration-count: infinite;
	}

	@keyframes anim {
		0% {
			transform: scale(10) translate(100px, -100px) rotate(-45deg);
		}
		100% {
			transform: scale(10) translate(-100px, 100px) rotate(-45deg);
		}
	}
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
