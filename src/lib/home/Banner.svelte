<script>
	import Socials from "$lib/Socials.svelte";
	import { onMount } from "svelte";
	import { fade, blur, fly, slide, scale } from "svelte/transition";
	import { quintOut } from "svelte/easing";

	let name = "Midnight";

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
		"Unity",
		"Substance Painter",
		"Blender",
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
		"Django",
		"Vue",
		"Java",
		"JavaFX",
		"NGINX",
		"Docker",
		"REST",
		"GraphQL",
		"TypeORM",
		"Eloquent",
		"Express",
		"Linux",
		"Composer",
		"AlpineJS",
		"Blade",
		"JSX",
		"Pug",
		"Wordpress",
		"Vercel",
		"Netlify",
		"AWS S3",
		"Backblaze"
	];

	const names = [
		"Pascal",
		"Mid",
		"Midblep",
		"Midnight"
	];

	onMount(() => {
		for(let j = 0; j < 20; j++) {
			let list = document.createElement('div');
			list.classList.add('flex', "gap-2");

			for (let i = 0; i < 20; i++) {
				const word = words[Math.floor(Math.random() * words.length)];
				let element = document.createElement('span');
				element.innerHTML = word;
				element.classList.add("text-9xl", "p-10", "whitespace-nowrap");

				list.appendChild(element);
			}

			document.getElementById('lists').appendChild(list);
		}

		let i = 0;
		setInterval(() => {
			name = names[i % 4];
			i++;
		}, 3000);
	});

	let randomBannerPic = array[Math.floor(Math.random() * array.length)];
	randomBannerPic = "/homepage/banner.png";
</script>

<main class="relative overflow-hidden lg:h-screen @container">
	<div class="absolute inset-0 w-full h-screen flex flex-col items-center gap-1 justify-center font-bold anim" id="lists">
	</div>

	<div class="flex h-full w-full @4xl:p-20 gap-10 py-10 px-5 z-10">
		<img
			src={randomBannerPic}
			alt="mid"
			class="h-[80vh] w-auto @xl:block hidden z-10"
		/>

		<div class="flex flex-col py-20 h-full gap-20 z-10">
			<div class="flex flex-col gap-10">
				<span>
					<img src="/helloblue.png" alt="Hello!" class="h-20 popout" />
				</span>

				<span class="flex flex-wrap gap-2 items-end">
					<h2 class="text-4xl font-extrabold">I'm</h2>
					<span class="flex items-center">
						{#key name}
							<h2 class="text-4xl font-extrabold" in:scale>{name}</h2>
						{/key}
						<h2 class="text-4xl font-extrabold">,</h2>
					</span>
					<span class="text-3xl font-extralight">
						and I like to make things on the web
					</span>
				</span>
			</div>

			<p class="text-gray-800 dark:text-gray-300 text-lg max-w-[900px]">
				I go by many names, which is why I named this place Bart Industries. It is my public digital home, a collection of my socials, work experiences,
				past-time projects, artworks, hobbies, random blogposts, fursonas and anything else I feel I wanna share with the world.
				<br/><br/>
				For my skills and experiences I implore you to visit my <a href="#portfolio" class="a">portfolio section</a>,
				I am always excited to explore new technologies and opportunities.
				<br/><br/>
				If you are interested in my work or want to contact me
				you can reach out via one of my socials below or send me an email via the <a href="#contact" class="a">contact form</a>.
			</p>

			<Socials type="default" />
		</div>
	</div>

	<span class="hidden @2xl:flex absolute left-0 bottom-0 w-full justify-center mb-20 z-50 text-8xl float text-blue-600">
		<img src="/downarrow.png" class="w-10" />
	</span>
</main>

<style>
	.anim {
		user-select: none;
		opacity: 2%;
		animation: anim;
		animation-duration: 200s;
		animation-timing-function: linear;
		animation-iteration-count: infinite;
	}

	@keyframes anim {
		0% {
			transform: translate(100%, -100%) rotate(-30deg);
		}
		100% {
			transform: translate(-100%, 100%) rotate(-30deg);
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
		animation-duration: 2s;
		animation-iteration-count: infinite;
		animation-timing-function: ease-in-out;
	}

	@keyframes float {
		0% {
			padding-top: 0px;
			padding-bottom: 30px;
		}
		50% {
			padding-top: 10px;
			padding-bottom: 20px;
		}
		100% {
			padding-top: 0px;
			padding-bottom: 30px;
		}
	}
</style>
