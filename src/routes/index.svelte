<script>
	import Banner from "$lib/home/Banner.svelte";
	import Card from "$lib/home/Card.svelte";
	import Form from "$lib/home/Form.svelte";
import Sona from "$lib/home/Sona.svelte";
</script>

<svelte:head>
	<title>Home | Bart Industries</title>
</svelte:head>

<main class="overflow-x-hidden">
	<Banner />

	<div class="relative h-56 lg:h-80 -mt-80 overflow-hidden scale-x-150">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="absolute inset-0 h-96 w-full scale-x-150">
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

	<section class="bg-gray-200 pt-10 dark:bg-gray-800 z-20" id="works">
		<div class="container px-5 flex flex-col gap-10 justify-center">
			<div class="flex flex-col gap-5">
				<h2 class="font-bold text-4xl">I do a lot of things</h2>
				<p>
					Like any aspiring developer my ambitions are great, and so I tend to be part of a lot of places.
					<br/>
					Below are some of the things I do and develop for, resulting in experience with a range of technologies and people.
				</p>
			</div>

			<div class="grid grid-cols-1 lg:grid-cols-3 gap-10 justify-between">
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
						I was the developer of the new Puppy Pride social
						network over the course of 2021, and continue to support and expand
						it to this day. The site was built from the ground up
						using the TALL stack in PHP.
						<br /><br />
						The site sports a whole array of social features including
						blogging, picture albums, statuses, user profiles, forums,
						events, groups with roles and custom pages, location data,
						instant messaging, various networking tools like friending
						and blocking, notifications through channels like push and
						mail, live feed, subscriptions and viewcounts, comment
						sections, likes and followers, and much more.
						<br /><br />
						The project is nearing completion and will be released soon.
						You may find a beta release public at <a target="_blank" class="a" href="https://beta.puppypride.social">beta.puppypride.social</a>.
					</p>
				</Card>

				<Card
					buttonHref="https://discord.gg/ygw4DNnKvt"
					buttonText="🚪 Join the Discord"
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
					</p>
				</Card>
			</div>

			<hr class="my-10 opacity-10" />

			<div class="flex flex-col gap-5">
				<h2 class="font-bold text-4xl">I make stunning pages that fit</h2>
				<p>
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
				>
					<h3
						class="text-xl font-bold inline-flex items-center gap-3"
					>
						Upcoming: Sona Factory
					</h3>
					<p class="text-sm text-gray-800 dark:text-gray-100">
						I am currently working on developing a portfolio site called Sona Factory,
						featuring an open folder directory containing arts and works, a gallery and contact form,
						and unique page designs for various characters displayed on the site called fursonas.
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
		class="relative container overflow-hidden px-5 lg:px-0 flex flex-col lg:flex-row gap-10 h-full justify-center items-center"
		id="contact"
	>
		<div class="lg:w-1/3 z-10">
			<Form />
		</div>

		<img src="/homepage/fullbody.png" class="lg:block hidden lg:w-1/3 h-full z-10" alt="contact" />

		<div class="absolute inset-0 w-full h-full opacity-80 bg-contain bg-no-repeat bg-center dark:hidden lg:block hidden" style="background-image: url('homepage/blob2-light.svg')"></div>
		<div class="absolute inset-0 w-full h-full opacity-20 bg-contain bg-no-repeat bg-center hidden dark:block lg:block" style="background-image: url('homepage/blob2-dark.svg')"></div>
	</section>

	<div class="relative h-56 lg:h-80 overflow-hidden scale-x-150 rotate-180 -mb-80 mt-40 z-30">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="absolute inset-0 h-96 w-full scale-x-150">
			<path
				class="block dark:hidden"
				fill="rgb(243 244 246)"
				fill-opacity="1"
				d="M0,64L34.3,85.3C68.6,107,137,149,206,165.3C274.3,181,343,171,411,160C480,149,549,139,617,133.3C685.7,128,754,128,823,154.7C891.4,181,960,235,1029,240C1097.1,245,1166,203,1234,160C1302.9,117,1371,75,1406,53.3L1440,32L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
			/>
			<path
				class="hidden dark:block"
				fill="rgb(17 24 39)"
				fill-opacity="1"
				d="M0,64L34.3,85.3C68.6,107,137,149,206,165.3C274.3,181,343,171,411,160C480,149,549,139,617,133.3C685.7,128,754,128,823,154.7C891.4,181,960,235,1029,240C1097.1,245,1166,203,1234,160C1302.9,117,1371,75,1406,53.3L1440,32L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
			/>
		</svg>
	</div>

	<section class="bg-gray-200 dark:bg-gray-800 relative" id="works">
		<div class="inset-0 absolute flex justify-end overflow-hidden">
			<img src="/homepage/sona/back.png" class="-mr-80 h-full w-auto" alt='background' />
		</div>
		<div class="inset-0 absolute bg-gradient-to-r dark:from-black dark:via-black from-white via-white"></div>
		<div class="container px-5 flex pb-40 flex-col gap-10 justify-center pt-80">
			<Sona/>
		</div>
	</section>
</main>
