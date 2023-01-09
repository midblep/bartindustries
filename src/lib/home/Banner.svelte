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

	function calculateAge(birthday) { // birthday is a date
		var ageDifMs = Date.now() - birthday;
		var ageDate = new Date(ageDifMs); // miliseconds from epoch
		return Math.abs(ageDate.getUTCFullYear() - 1970);
	}

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

<main class="relative overflow-hidden min-h-screen @container">
	<div class="absolute inset-0 w-full h-screen flex flex-col items-center gap-1 justify-center font-bold anim opacity-5 dark:opacity-5" id="lists">
	</div>

	<div class="flex h-full w-full @4xl:p-20 gap-10 py-10 px-5 z-10">
		<img
			src={randomBannerPic}
			alt="mid"
			class="h-[80vh] w-auto @xl:block hidden z-10"
		/>

		<div class="flex flex-col py-20 h-full gap-10 z-10">
			<div class="flex flex-col gap-10">
				<span>
					<img src="/helloblue.png" alt="Hello!" class="h-20 popout" />
				</span>

				<span class="flex gap-2 flex-wrap items-end">
					<h2 class="text-4xl flex gap-2 font-extrabold">I'm
						<span class="flex items-center">
							{#key name}
								<span in:scale>{name}</span>
							{/key}
							<h2 class="text-4xl font-extrabold">,</h2>
						</span>
					</h2>
					<span class="text-3xl font-extralight">
						and i really like to build things
					</span>
				</span>
			</div>

			<p class="text-gray-800 dark:text-gray-300 text-lg max-w-[900px]">
				I'm a {calculateAge(new Date("2001-10-30"))} year old programmer and tech enthusiast from The Netherlands.
				Be it making a website, building a computer, or designing a new protocol, I love making things with tech!
				<br/><br/>
				Bart Industries is my public digital home. It's a collection of my socials, work experiences and past projects, artworks, hobbies and interests, fursonas and anything else I feel I wanna share with the world.
				<br/><br/>
				To know more about me you can visit the <a href="#about" class="a">about section</a>.
				<br/>
				For some of my skills and experiences you can visit my <a href="#portfolio" class="a">portfolio section</a>.
				<br/>
				If you want to contact me you can reach out via one of my socials below or <a href="mailto:pascalvanginkel@outlook.com" class="a">send me an email</a>.
			</p>

			<Socials type="default" />
		</div>
	</div>

	<span class="hidden @4xl:flex absolute left-0 bottom-0 w-full justify-center mb-20 z-50 text-8xl float text-blue-600">
		<img src="/downarrow.png" class="w-10" />
	</span>
</main>

<style>
	.anim {
		user-select: none;
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
