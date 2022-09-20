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
		"AWS S3"
	];

	onMount(() => {
		for(let j = 0; j < 20; j++) {
			let list = document.createElement('div');
			list.classList.add('flex', 'gap-2');

			for (let i = 0; i < 20; i++) {
				const word = words[Math.floor(Math.random() * words.length)];
				let element = document.createElement('span');
				element.innerHTML = word;
				element.classList.add("text-9xl", "p-10");

				list.appendChild(element);
			}

			document.getElementById('lists').appendChild(list);
		}
	});

	let randomBannerPic = array[Math.floor(Math.random() * array.length)];
	randomBannerPic = "/homepage/banner.png";
</script>

<main class="flex flex-col lg:flex-row gap-5 items-center pt-5 pb-52 justify-between px-6 lg:px-20 relative z-0 overflow-hidden">
	<div class="absolute inset-0 w-full h-screen flex flex-col items-center gap-1 justify-center font-bold anim" id="lists">
	</div>

	<div class="flex lg:mx-20 gap-10 items-center pt-5 pb-96 px-6 lg:px-20">
		<div class="hidden lg:block h-full w-1/3 z-10">
			<img
				src={randomBannerPic}
				alt="mid"
			/>
		</div>

		<div class="flex flex-col gap-10 justify-center lg:w-4/12 z-10">
			<span>
				<img src="/helloblue.png" alt="Hello!" class="h-20 popout" />
			</span>

			<span class="flex flex-wrap gap-2 items-end">
				<h2 class="text-4xl font-extrabold relative">I'm Midnight,</h2>
				<span class="text-3xl font-extralight">
					and I like to make things on the web
				</span>
			</span>

			<hr class="w-1/4" />

			<p class="text-gray-800 dark:text-gray-300 text-lg">
				Bart Industries is an online collection of me such as my socials, work experiences,
				past-time projects, artworks and hobbies, random blogposts, fursonas and anything else I feel proud enough of to share.
				<br/><br/>
				For my skills and experiences I implore you to visit my <a href="#portfolio" class="a">portfolio section</a>, but
				I am always excited to explore other technologies and have new experiences.
				<br/><br/>
				I am open to new opportunities and am always eager to work,
				you can reach out using one of the methods below or <a href="#contact" class="a">the contact form</a>.
			</p>

			<hr class="w-1/4" />

			<Socials />
		</div>

		<span class="flex absolute left-0 bottom-0 w-full justify-center mb-40 z-50 text-8xl float text-blue-600">
			<img src="/downarrow.png" class="w-10" />
		</span>
	</div>

	<div class="w-screen absolute bottom-0 left-0">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
			<path
				class="block dark:hidden"
				fill="rgba(229, 231, 235, 1)"
				fill-opacity="1"
				d="M0,64L34.3,85.3C68.6,107,137,149,206,165.3C274.3,181,343,171,411,160C480,149,549,139,617,133.3C685.7,128,754,128,823,154.7C891.4,181,960,235,1029,240C1097.1,245,1166,203,1234,160C1302.9,117,1371,75,1406,53.3L1440,32L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
			/>
			<path
				class="hidden dark:block"
				fill="rgba(31, 41, 55, 1)"
				fill-opacity="1"
				d="M0,64L34.3,85.3C68.6,107,137,149,206,165.3C274.3,181,343,171,411,160C480,149,549,139,617,133.3C685.7,128,754,128,823,154.7C891.4,181,960,235,1029,240C1097.1,245,1166,203,1234,160C1302.9,117,1371,75,1406,53.3L1440,32L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
			/>
		</svg>
	</div>
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
