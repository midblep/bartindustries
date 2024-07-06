<script>
	import Socials from '$lib/Socials.svelte';
	import { onMount } from 'svelte';
	import { fade, blur, fly, slide, scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	let name = 'Midnight';

	const array = [
		'/banner1.png',
		'/banner2.png',
		'/banner3.png',
		'/banner4.png',
		'/banner5.jpeg',
		'/banner6.png',
		'/banner7.png',
		'/banner8.png'
	];

	const words = [
		'JavaScript',
		'TypeScript',
		'MySQL',
		'Laravel',
		'PHP',
		'Livewire',
		'NestJS',
		'NodeJS',
		'Unity',
		'Substance Painter',
		'Blender',
		'PostgreSQL',
		'TailwindCSS',
		'Bootstrap',
		'Fontawesome',
		'Sass',
		'Webpack',
		'Redis',
		'Svelte',
		'SvelteKit',
		'Python',
		'Django',
		'Vue',
		'Java',
		'JavaFX',
		'NGINX',
		'Docker',
		'REST',
		'GraphQL',
		'TypeORM',
		'Eloquent',
		'Express',
		'Linux',
		'Composer',
		'AlpineJS',
		'Blade',
		'JSX',
		'Pug',
		'Wordpress',
		'Vercel',
		'Netlify',
		'AWS S3',
		'Backblaze',
		'EntityFramework',
		'.NET Core'
	];

	const names = ['Pascal', 'Mid', 'Midblep', 'Midnight'];

	function calculateAge(birthday) {
		// birthday is a date
		var ageDifMs = Date.now() - birthday;
		var ageDate = new Date(ageDifMs); // miliseconds from epoch
		return Math.abs(ageDate.getUTCFullYear() - 1970);
	}

	onMount(() => {
		for (let j = 0; j < 20; j++) {
			let list = document.createElement('div');
			list.classList.add('flex', 'gap-2');

			for (let i = 0; i < 20; i++) {
				const word = words[Math.floor(Math.random() * words.length)];
				let element = document.createElement('span');
				element.innerHTML = word;
				element.classList.add('text-9xl', 'p-10', 'whitespace-nowrap');

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
	randomBannerPic = '/homepage/banner.png';
</script>

<main class="w-full h-full lg:px-2 xl:px-5 @container">
	<section
		class="bg-[#3A53FF] @2xl:rounded-t-[40px] relative overflow-hidden @container text-white"
	>
		<div
			class="absolute inset-0 w-full h-full bg-no-repeat bg-cover bg-top opacity-50 rounded-t-[40px]"
			style="background-image: url('portfoliobackg.svg')"
		/>

		<div
			class="absolute inset-0 w-full h-screen flex flex-col items-center gap-1 justify-center font-bold anim opacity-5 dark:opacity-5"
			id="lists"
		/>

		<div class="flex h-full w-full @4xl:p-20 gap-20 p-5 z-10">
			<div class="items-start @7xl:block hidden z-10 w-full">
				<img src={randomBannerPic} alt="mid" class="w-[40vw] z-10" />
			</div>

			<div class="flex flex-col py-5 h-full gap-10 z-10 w-full">
				<div class="flex flex-col gap-2">
					<p class="text-4xl font-bold"><span class="whitepigeon">Hello</span></p>
					<h2 class="text-6xl flex gap-2 font-extralight">
						I'm
						<span class="flex items-center">
							{#key name}
								<span in:scale>{name}</span>
							{/key}
						</span>
					</h2>
				</div>

				<p class="lg:text-lg @2xl:mb-10">
					I'm a {calculateAge(new Date('2001-10-30'))} year old programmer and tech enthusiast from The
					Netherlands. I have a Bachelor of Science degree in Software Engineering and run a development
					company called DubbelNull. During the week I work at Agro IT and build software that improves
					the lives of people through efficient solutions.
					<br /><br />
					Bart Industries is my public digital home. It's a collection of my socials, work experiences
					and past projects, artworks, hobbies and interests, fursonas and anything else I feel like
					sharing with the world.
					<br /><br />
					Feel free to have a look around and learn about who I am and the things I've worked on.
				</p>

				<Socials stay="light" type="default" />
			</div>
		</div>

		<div class="hidden @2xl:block">
			<svg
				class="dark:hidden block absolute left-0 bottom-0 right-0 scale-105 -ml-5"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 1440 320"
				><path
					fill="#fff"
					fill-opacity="1"
					d="M0,96L48,96C96,96,192,96,288,112C384,128,480,160,576,176C672,192,768,192,864,213.3C960,235,1056,277,1152,266.7C1248,256,1344,192,1392,160L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
				/></svg
			>
			<svg
				class="hidden dark:block absolute left-0 bottom-0 right-0 scale-105 -ml-5"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 1440 320"
				><path
					fill="#000"
					fill-opacity="1"
					d="M0,96L48,96C96,96,192,96,288,112C384,128,480,160,576,176C672,192,768,192,864,213.3C960,235,1056,277,1152,266.7C1248,256,1344,192,1392,160L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
				/></svg
			>
		</div>
	</section>
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
