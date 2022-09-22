<script>
	import Banner from "$lib/home/Banner.svelte";
	import Card from "$lib/home/Card.svelte";
	import Form from "$lib/home/Form.svelte";
import Sona from "$lib/home/Sona.svelte";
</script>

<svelte:head>
	<title>Home | Bart Industries</title>
</svelte:head>

<main class="overflow-x-hidden flex flex-col gap-20">
	<Banner />

	<section class="pb-40 -mt-20 z-20 relative bg-gray-200 dark:bg-gray-800">
		<div class="absolute top-0 -mt-40" id="blog"></div>
		<div class="container px-5 flex flex-col gap-10 justify-center">
			<h2 class="text-2xl font-bold">🚧 Blog under construction 🏗️</h2>
			<p>No posts available...</p>
		</div>
	</section>

	<section class="pb-20 z-20 relative">
		<div class="absolute top-0 -mt-40" id="portfolio"></div>
		<div class="container px-5 flex flex-col gap-10 justify-center">
			<div class="flex flex-col gap-5">
				<h2 class="font-bold text-4xl">I do a lot of things</h2>
				<p class="text-lg">
					Below are some of the things I work on and currently occupy the majority of my time.
				</p>
			</div>

			<div class="grid grid-cols-1 lg:grid-cols-3 gap-10 justify-between">
				<Card
					buttonHref="https://flamesoftware.net/"
					buttonText="🔥 Visit early website"
				>
					<h3
						class="text-xl font-bold inline-flex items-center gap-3"
					>
						<img
							src="/logo.png"
							class="h-8"
							alt="flame"
						/> Flame Software
					</h3>
					<p class="text-sm text-gray-800 dark:text-gray-100">
						Flame Software is a Software-as-a-Service company that is developing a new communications app
						that intends to revolutionize the way we talk and socialize online.
						Our mission is to make the net more connected, more privacy focused, and more healthy for your mind.
						<br/><br/>
						We are currently in our early development stage, where I work as the CTO to lay down the groundworks
						for this new app, which will be built using a combination of languages like Rust and TypeScript.
					</p>
				</Card>

				<Card
					buttonHref="https://puppypride.social"
					buttonText="🌐 Visit Puppy Pride"
				>
					<h3
						class="text-xl font-bold inline-flex items-center gap-3"
					>
						<img
							src="/puppypride.png"
							class="h-8"
							alt="puppypride"
						/> Puppy Pride
					</h3>
					<p class="text-sm text-gray-800 dark:text-gray-100">
						I am the core developer of the new Puppy Pride social
						network since January 2021, and continue to support and expand
						it to this day. The site was built from the ground up
						using the TALL stack in PHP (Tailwindcss, Alpine, Livewire and Laravel)
						and gave me a lot of experience working with not just PHP and every field inside Laravel,
						but also a very large array of different kinds of features and business processes at each step of development.
						<br /><br />
						Puppy Pride is an adult themed England based social network for people into petplay.
						The project is nearing its completion and will be released soon.
						You may find a beta release public at <a target="_blank" class="a" href="https://beta.puppypride.social">beta.puppypride.social</a>.
					</p>
				</Card>

				<Card
					buttonHref="https://saxion.nl"
					buttonText="🎓 Open Website"
				>
					<h3
						class="text-xl font-bold inline-flex items-center gap-3"
					>
						<img
							src="/saxion.png"
							class="h-8 rounded-full"
							alt="puppypride"
						/> Saxion University
					</h3>
					<p class="text-sm text-gray-800 dark:text-gray-100">
						I am a year 3 student at the Saxion University of Applied Sciences in The Netherlands majoring in Software Engineering. The study keeps me plenty busy, but now I am combining the study with a Minor Entrepeneurship to build a SaaS product at my new company Flame Software.
						<br/><br/>
						Even though the university has taught me much about the business life and how to professionally work in teams, nearly all my programming knowledge is self taught at home.
					</p>
				</Card>
			</div>

			<div class="flex flex-col gap-5 pt-10">
				<h2 class="font-bold text-4xl">I make stunning pages that fit</h2>
				<p class="text-lg">
					I love to make personalized websites for small creators and businesses that truly show their personality to the world with unique design.
				</p>
			</div>

			<div class="grid grid-cols-1 lg:grid-cols-3 gap-10 justify-between">
				<Card
					buttonHref="https://sivkyne.xyz"
					buttonText="🌐 Visit Website"
				>
					<h3
						class="text-xl font-bold inline-flex items-center gap-3"
					>
						<img
							src="/sivkyne.png"
							class="h-8 rounded-full"
							alt="siv kyne"
						/> Siv Kyne
					</h3>
					<p class="text-sm text-gray-800 dark:text-gray-100">
						I developed this website in exchange for artistic goods.
						It is hosted on Vercel and built on top of SvelteKit.
						It features a fully mobile compatible design that catches your eye from the moment you visit the homepage.
						Great detail went into making sure no part of the site is boring, such as giving buttons that extra pop and even making a little blurred leaf pattern for the background on pages that get very long.
					</p>
				</Card>

				<Card
					buttonHref="https://invesvpo.com"
					buttonText="🌐 Visit Website"
				>
					<h3
						class="text-xl font-bold inline-flex items-center gap-3"
					>
						<img
							src="/invesvpo.png"
							class="h-10 -my-2"
							alt="invesvpo"
						/>
						Invesvpo
					</h3>
					<p class="text-sm text-gray-800 dark:text-gray-100">
						I made a website for a friend called Invesvpo, who wanted a place to show to people to redirect them to his social media, and also to tell them what kind of stuff he does.
						It was created with the NextJS on React in 2021 by me entirely.
					</p>
				</Card>

				<span class="row-span-3">
					<Card
					>
						<h3
							class="text-xl font-bold inline-flex items-center gap-3"
						>
							🙋
							Want your own?
						</h3>
						<p class="text-sm text-gray-800 dark:text-gray-100">
							My focus is on making people ''wow'' when they open your site with a design that is something truly unique and representing of you and your brand. <br/><br/>
							Anything is possible! Your site can have your socials, a blog, an email contact form, a gallery, and anything else.
							In some cases a site's upkeep can be entirely free forever, too! <br/><br/>
							I am open to requests so if you want to explore the possibilities of having your own website and what one can do for you, please feel free to <a class="a" href="#contact">contact me</a>.
							<br/><br/>
							If you are a larger business, have complicated needs or desire a more formal agreement please <a class="a" href="https://dubbelnull.com" target="_blank">contact me via my company DubbelNull</a>.
						</p>
						<img src="/banner4.png" class="w-full -mb-10"/>
					</Card>
				</span>

				<Card
					buttonHref="https://trickthefox.com/"
					buttonText="🌐 Visit Website"
				>
					<h3
						class="text-xl font-bold inline-flex items-center gap-3"
					>
						<img
							src="/trick.png"
							class="h-8 rounded-full"
							alt="trick"
						/>
						Trick The Fox
					</h3>
					<p class="text-sm text-gray-800 dark:text-gray-100">
						Trick The Fox was made with NextJS using React in 2021. It had several updates over time later on and features some nice secrets.
						It connects to an Airtable database to store simple data such as gallery entries, which can then be managed by the client with Airtable's easy spreadsheet-like interface.
						Hosted with Vercel, this package is completely free to run and maintain thanks to Airtable's free tier and its only cost are that of the domain.
					</p>
				</Card>

				<Card
					buttonHref="https://dubbelnull.com/showcase"
					buttonText="➡️ View DubbelNull showcase"
				>
					<h3
						class="text-xl font-bold inline-flex items-center gap-3"
					>
						<img
							src="/dubbelnull.png"
							class="h-10 -my-1 -ml-1"
							alt="dubbelnull"
						/> More at DubbelNull
					</h3>
					<p class="text-sm text-gray-800 dark:text-gray-100">
						I am the Lead Developer at DubbelNull and do most of
						the programming and technological work there today. DubbelNull
						primarily designs, creates and hosts websites for clients, but we also
						maintain and operate our own servers. We focus on efficiency in communication and satisfaction
						of the end result.
						You can find several other examples of past happy clients on our website's showcase page.
					</p>
				</Card>
			</div>
		</div>
	</section>

	<hr class="container my-10 opacity-10" />

	<section class="mb-40">
		<Sona/>
	</section>
</main>
