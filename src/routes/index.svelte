<script>
	import Banner from "$lib/home/Banner.svelte";
	import Card from "$lib/home/Card.svelte";
	import Dash from "$lib/Dash.svelte";
	import Form from "$lib/home/Form.svelte";
</script>

<svelte:head>
	<title>Mid's Domain</title>
</svelte:head>

<main class="relative">
	<!-- <section class="container py-20">
		<Banner />
	</section>

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

	<section class="bg-gray-200 dark:bg-gray-800 -mt-1">
		<div class="container px-5 flex flex-col gap-10 justify-center">
			<h2 class="text-2xl font-bold italic">Places I'm a part of</h2>

			<div class="grid grid-cols-1 lg:grid-cols-3 gap-10 justify-between">
				<Card
					buttonHref="https://puppypride.social"
					buttonText="🌐 Visit Puppy Pride"
					color="bg-gradient-to-br from-blue-300 to-blue-400 dark:bg-gradient-to-br dark:from-blue-700 dark:to-blue-900"
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
						I was the sole developer of the new Puppy Pride social
						network over the course of 2021, and continuing on to
						this day. The whole site was built from the ground up
						using the TALL stack in PHP.
						<br /><br />
						The network sports a whole array of social features including
						blogging, picture albums, statuses, extensive user profiles,
						events, customizable groups with roles and custom pages,
						instant messaging, various networking tools like friending
						and blocking, notifications through channels like push and
						mail, live feed, subscriptions and views, extensive comment
						sections, discussions, and much more.
						<br /><br />
						The project is nearing completion and will be released soon.
						Puppy Pride is the world's leading pup play community and
						has tens of thousands of members across the globe.
					</p>
				</Card>

				<Card
					buttonHref="https://discord.gg/ygw4DNnKvt"
					buttonText="🚪 Join the Discord"
					color="bg-gradient-to-br from-orange-300 to-orange-400 dark:bg-gradient-to-br dark:from-orange-700 dark:to-orange-900"
				>
					<h3
						class="text-xl font-bold inline-flex items-center gap-3"
					>
						<img
							src="/moonlitden.png"
							class="h-8"
							alt="moonlitden"
						/> The Moonlit Den
					</h3>
					<p class="text-sm text-gray-800 dark:text-gray-100">
						Successor to the wildly popular Wumpus' Universe, a
						cornerstone of Discord's early fanatic community, The
						Moonlit Den is a small piece of what it once was. Today,
						it continues to do much of the same it always did,
						becoming more sophisticated and professional as it's
						main sponsor DubbelNull improves.
						<br /><br />
						Moonlit Den is a generalistic Discord community aimed at
						being a friendly place to make your home online. We run various
						gameservers, have game nights together, and overall just
						like to chat about whatever.
					</p>
				</Card>

				<Card
					buttonHref="https://dubbelnull.com"
					buttonText="➡️ Go to DubbelNull.com"
				>
					<h3
						class="text-xl font-bold inline-flex items-center gap-3"
					>
						<img
							src="/dubbelnull.png"
							class="h-10 -my-2"
							alt="dubbelnull"
						/> DubbelNull
					</h3>
					<p class="text-sm text-gray-800 dark:text-gray-100">
						I am the founder and CTO of DubbelNull, and do most of
						the programming and technological work there today. We
						run our own server architecture and sponsor several
						communities to do what they want, such as run their
						gameservers, websites, scripts and services.
						<br /><br />
						DubbelNull currently offers specialized website design and
						construction of any type, be it a webapp or simple portfolio.
						We focus on efficiency in communication and satisfaction
						of the end result.
						<br /><br />
						We are also expanding into the SaaS business with our own Cloud Storage solution built on top
						of Nextcloud and a communication platform in the works called Flame.
					</p>
				</Card>
			</div>

			<br class="my-5"/>

			<h2 class="text-2xl font-bold italic">Things I built</h2>

			<div class="grid grid-cols-1 lg:grid-cols-3 gap-10 justify-between">
				<Card
					buttonHref="https://sivkyne.xyz"
					buttonRedirect="_blank"
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
					</p>
				</Card>

				<Card
				>
					<h3
						class="text-xl font-bold inline-flex items-center gap-3"
					>
						More here soon...
					</h3>
					<p class="text-sm text-gray-800 dark:text-gray-100">
						I am still working on this website, and adding my previous works to this as I go. I have done many more things than this though!
					</p>
				</Card>
			</div>
		</div>
	</section>

	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
		<path
			class="block dark:hidden"
			fill="rgba(229, 231, 235, 1)"
			fill-opacity="1"
			d="M0,320L34.3,288C68.6,256,137,192,206,186.7C274.3,181,343,235,411,229.3C480,224,549,160,617,128C685.7,96,754,96,823,112C891.4,128,960,160,1029,170.7C1097.1,181,1166,171,1234,160C1302.9,149,1371,139,1406,133.3L1440,128L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
		/>
		<path
			class="hidden dark:block"
			fill="rgba(31, 41, 55, 1)"
			fill-opacity="1"
			d="M0,320L34.3,288C68.6,256,137,192,206,186.7C274.3,181,343,235,411,229.3C480,224,549,160,617,128C685.7,96,754,96,823,112C891.4,128,960,160,1029,170.7C1097.1,181,1166,171,1234,160C1302.9,149,1371,139,1406,133.3L1440,128L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
		/>
	</svg>

	<section
		class="container px-5 lg:px-0 pb-20 flex flex-col lg:flex-row gap-10 justify-between items-center lg:items-start"
	>
		<img src="/contact.png" class="lg:w-1/3 h-full" alt="contact" />

		<div class="lg:w-1/3">
			<Form />
		</div>
	</section> -->
</main>
