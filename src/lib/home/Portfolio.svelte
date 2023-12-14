<script>
	import Card from './Card.svelte';

	const words = [
		'JavaScript',
		"<b class='text-blue-500'>TypeScript</b>",
		'MySQL',
		"<b class='text-blue-500'>Laravel</b>",
		'PHP',
		'Livewire',
		"<b class='text-blue-500'>NestJS</b>",
		'NodeJS',
		'Unity',
		'Substance Painter',
		'Blender',
		'PostgreSQL',
		'TailwindCSS',
		'Rust',
		"<b class='text-blue-500'>Blazor</b>",
		'Redis',
		"<b class='text-blue-500'>Svelte</b>",
		"<b class='text-blue-500'>SvelteKit</b>",
		'Python',
		'Django',
		'Vue',
		"<b class='text-blue-500'>Java</b>",
		"<b class='text-blue-500'>C#</b>",
		'JavaFX',
		'NGINX',
		'Docker',
		'PayPal API',
		"<b class='text-blue-500'>REST</b>",
		'GraphQL',
		'TypeORM',
		"<b class='text-blue-500'>Eloquent</b>",
		'Express',
		'Bash',
		'.NET',
		'Composer',
		'AlpineJS',
		'Blade',
		'JSX',
		'Pug',
		"<b class='text-blue-500'>Wordpress</b>",
		'Vercel',
		'SEO',
		'Netlify',
		'AWS S3',
		'Backblaze',
		'Bootstrap',
		'Fontawesome',
		'Sass',
		'.NET Core',
		'Webpack',
		"<b class='text-blue-500'>Linux</b>",
		'Grafana',
		'Prometheus'
	];
</script>

<section class="relative">
	<div class="@container flex flex-col justify-center">
		<div class="flex flex-col gap-2 whitepigeon text-white text-center">
			<h2 class="font-bold text-4xl lg:text-8xl">Portfolio</h2>
			<p class="lg:text-lg">
				A collection of some of the projects and experiences I am most proud of
			</p>
		</div>

		<div
			class="container my-5 lg:my-20 grid grid-cols-1 @2xl:grid-cols-2 @6xl:grid-cols-3 gap-5 justify-between"
		>
			<div class="absolute top-0 -mt-40" id="portfolio" />

			<Card>
				<h3 class="text-xl font-bold flex-wrap inline-flex items-center gap-3 justify-between">
					<div class="inline-flex gap-3">
						<img src="/agroit.png" class="h-8" alt="puppypride" /> Agro IT
					</div>
					<span class="text-sm font-light">2023 and ongoing</span>
				</h3>
				<p class="text-sm text-gray-800 dark:text-gray-100">
					During my study's internship at Agro IT I developed a user friendly web environment for
					their RVDM.<br /><br />
					The company liked what I built and wanted to expand upon it, so they hired me after the internship
					to finish the prototype and roll it out to clients. Now I work on creating web versions for
					all their products.<br /><br />
				</p>
				<img src="/rvdm.png" class="rounded-xl" alt="Picture of some people from the DevOps Team" />
			</Card>

			<span class="@2xl:row-span-2">
				<Card
					buttonHref="https://puppypride.social"
					buttonText="🌐 Visit the Puppy Pride social network"
				>
					<div class="flex flex-col gap-5">
						<span class="flex flex-col gap-5">
							<h3
								class="text-xl flex-wrap font-bold inline-flex items-center gap -3 justify-between"
							>
								<div class="inline-flex gap-3">
									<img src="/puppypride.png" class="h-8" alt="puppypride" /> Puppy Pride
								</div>
								<span class="text-sm font-light">2021 and ongoing</span>
							</h3>
							<p class="text-sm text-gray-800 dark:text-gray-100">
								I am the lead developer of Puppy Pride since January of 2021. I develop and maintain
								Puppy Pride's social network, servers and events.
								<br /><br />
								The site was built from the ground up using the TALL (Laravel) stack and sports a large
								array of features such as blogging, albums, subscriptions, events, instant messaging,
								customizable profiles, feeds, groups and advanced group management, and so on.
								<br /><br />
								Furthermore I have gotten experience with a lot of real concepts such as advanced dockerization,
								deployment, load balancing, caching, server maintenance and more.
								<br /><br />
								<b>Warning:</b> Puppy Pride is an adult themed social network for people into petplay
								based in England. Explicit imagery may be present. Due to the site's content, logging
								in is required to view the majority of its features.
							</p>
						</span>
						<span class="flex items-center">
							<img src="/homepage/pp.png" alt="puppypride profile page" />
						</span>
					</div>
				</Card>
			</span>

			<Card buttonHref="https://saxion.nl" buttonText="🎓 Open Website">
				<h3 class="text-xl font-bold flex-wrap inline-flex items-center gap-3 justify-between">
					<div class="inline-flex gap-3">
						<img src="/saxion.png" class="h-8 rounded-full" alt="puppypride" /> Saxion University
					</div>
					<span class="text-sm font-light">2020 to 2024</span>
				</h3>
				<p class="text-sm text-gray-800 dark:text-gray-100">
					I am a year 4 student at the Saxion University of Applied Sciences in The Netherlands
					majoring in Software Engineering and expected to graduate in July of 2024.
					<br /><br />
					During the study I've done several projects for real clients and worked in teams comprised
					of people with lots of different backgrounds. I have mostly worked with Java, JavaScript, Python
					and C#.
				</p>
				<img src="homepage/computer.png" class="w-40" />
			</Card>

			<span>
				<Card buttonHref="https://dubbelnull.com/showcase" buttonText="➡️ View DubbelNull showcase">
					<h3 class="text-xl font-bold flex-wrap inline-flex items-center gap-3 justify-between">
						<div class="inline-flex gap-3">
							<img src="/dubbelnull.png" class="h-10 -my-1 -ml-1" alt="dubbelnull" /> DubbelNull
						</div>
						<span class="text-sm font-light">2020 and ongoing</span>
					</h3>
					<p class="text-sm text-gray-800 dark:text-gray-100">
						DubbelNull is a family business that does internet based development for small and
						medium sized companies, such as creating websites, manage hosting, advice and other
						similar things. I have made several websites for clients under this name, and you can
						find more of my works on the DubbelNull website.
					</p>
				</Card>
			</span>

			<span class="@xl:row-span-3 @container">
				<Card>
					<h3 class="text-xl font-bold flex-wrap inline-flex items-center gap-3 justify-between">
						<div class="inline-flex gap-3">🏢 Internships</div>
					</h3>

					<div class="flex flex-col gap-2">
						<span class="flex justify-between items-end"
							><b class="text-lg">Agro IT - Graduation project</b>
							<p class="text-sm">2024</p></span
						>
						<p class="text-sm text-gray-800 dark:text-gray-100">
							I also did my graduation project at Agro IT, where I will build a complete system
							around employee management, time tracking and employee payouts that integrates with
							existing infrastructure and streamline the administrative process within the company
							as well as for customers.
						</p>
					</div>

					<div class="flex flex-col gap-2">
						<span class="flex justify-between items-end"
							><b class="text-lg">Agro IT</b>
							<p class="text-sm">2023</p></span
						>
						<p class="text-sm text-gray-800 dark:text-gray-100">
							Agro IT is an agricultural software company in The Netherlands. In my 5 month long
							internship I developed a new modern web app that connected to their existing APIs and
							made it possible for customers to use their systems from anywhere.
						</p>
					</div>

					<div class="flex flex-col gap-2">
						<span class="flex justify-between items-end"
							><b class="text-lg">Witteveen+Bos</b>
							<p class="text-sm">2022</p></span
						>
						<p class="text-sm text-gray-800 dark:text-gray-100">
							Witteveen+Bos is a major worldwide agricultural software company. During my internship
							me and my team developed a generic authentication system in Django that would be used
							as a customized plug-in template for new projects at the company.
						</p>
					</div>

					<div class="flex flex-col gap-2">
						<span class="flex justify-between items-end"
							><b class="text-lg">AgroVision</b>
							<p class="text-sm">2021</p></span
						>
						<p class="text-sm text-gray-800 dark:text-gray-100">
							AgroVision is a Dutch software company for farmers. During my internship I worked on
							an app that generates reports about CO2 usage on farms and informs the farmer on how
							to reduce thecir emmissions.
						</p>
					</div>

					<div class="flex flex-col gap-2">
						<span class="flex justify-between items-end"
							><b class="text-lg">SuiteSeven</b>
							<p class="text-sm">2019</p></span
						>
						<p class="text-sm text-gray-800 dark:text-gray-100">
							SuitSeven is a local webdevelopment studio. During my internship I worked on the
							design for a client's website.
						</p>
					</div>

					<div class="flex flex-col gap-2">
						<span class="flex justify-between items-end"
							><b class="text-lg">Profity</b>
							<p class="text-sm">2018</p></span
						>
						<p class="text-sm text-gray-800 dark:text-gray-100">
							Profity is a software company creating ERP suites for the Dutch steel industry. During
							my internship I learned the dynamics of a team and the different processes involved in
							software development.
						</p>
					</div>
				</Card>
			</span>

			<span class="@2xl:col-span-2">
				<Card
					buttonHref="https://furality.org/"
					buttonImage="/fox.png"
					buttonText="Visit furality.org"
				>
					<div class="grid grid-cols-2 gap-10">
						<div class="w-full">
							<h3
								class="w-full text-xl font-bold flex-wrap inline-flex items-center gap-3 justify-between"
							>
								<div class="inline-flex gap-3">
									<img src="/furality.png" class="h-10 -my-1 -ml-1" alt="dubbelnull" />
								</div>
								<span class="text-sm font-light">2023 and ongoing</span>
							</h3>
							<p class="text-sm text-gray-800 dark:text-gray-100">
								Furality is a nonprofit event for the furry fandom held inside VRChat. It is the
								largest furcon worldwide by attendees and uses proprietary technology in order to
								run its events.
								<br /><br />
								Since December 2023 I volunteer for Furality Inc. as a Backend Developer. I work together
								with the rest of the DevOps Department to work on APIs and systems that use things such
								as TypeScript, NestJS, Grafana, Prometheus, RabbitMQ, Authentik, C#, Unity, and more.
								<br /><br />
								I am mainly tasked with developing Furality's in-house OIDC system and expanding Unity
								plugins and tooling.
							</p>
						</div>
						<img
							src="/furality-luma.png"
							class="rounded-xl w-full"
							alt="Picture of some people from the DevOps Team"
						/>
					</div>
				</Card>
			</span>

			<span class="@xl:row-span-3">
				<Card>
					<h3 class="text-xl font-bold flex-wrap inline-flex items-center gap-3">
						<img src="/homepage/esu.png" class="h-10 rounded-full bg-black p-1" alt="esu" /> Easter System
						Universe
					</h3>
					<div class="flex flex-col pb-10">
						<p class="text-sm text-gray-800 dark:text-gray-100">
							For the past years I've worked on building and writing a universe of mysteries called
							ESU. It is now mature enough to release, with several dimensions and planets on which
							the natives speak their own unique languages.
							<br /><br />
							The universe confronts you with anomalies and alien concepts familiar enough to relate
							with as they fight for survival in an ever more technological world. Worlds collide as
							it becomes ever more apparent that the puppeteers of the world might not be who you think
							they are, instigating a battle in which you must rely on hope to make it through.
							<br /><br />
							The first written story titled "Luther's Throne" is planned to release soon and will be
							published on this website.
						</p>
					</div>
					<span class="flex items-center">
						<img src="/homepage/esubanner.png" alt="cover of act 1" />
					</span>
				</Card>
			</span>

			<span class="@2xl:row-span-2">
				<Card>
					<h3 class="text-xl font-bold flex-wrap inline-flex items-center gap-3 justify-between">
						<div class="inline-flex gap-3">⚔️ Skills</div>
					</h3>
					<p class="text-sm text-gray-800 dark:text-gray-100">
						I can work with a wide range of systems, frameworks and technologies! I have a lot of
						common knowledge around computer software and hardware that i can use to quickly adapt
						to new languages and frameworks. Here is a constantly expanding list of some of the
						things I am comfortable and like working with:
					</p>
					<div id="scroll-container" class="flex flex-wrap gap-1 w-full text-center">
						{#each words as word, key}
							<p>
								{#if key == words.length - 2}
									{@html word} and
								{:else if key == words.length - 1}
									{@html word}.
								{:else}
									{@html word},
								{/if}
							</p>
						{/each}
					</div>
					<p class="text-sm font-bold italic pt-5">... and always eager to try out new things!</p>
				</Card>
			</span>

			<span class="@xl:row-span-2 @container">
				<Card>
					<h3 class="text-xl font-bold flex-wrap inline-flex items-center gap-3 justify-between">
						<div class="inline-flex gap-3">🧑‍💻 Always open</div>
					</h3>
					<div class="h-full flex flex-col justify-between">
						<p class="text-sm text-gray-800 dark:text-gray-100">
							Beyond practical knowledge, I am also a teamplayer. I love discovering new ways and
							technologies that are proposed to me and like to share ideas and find new solutions to
							problems together.
							<br /><br />
							Most of my experiences listed have happened because people approached me with cool ideas.
							If you have something you need made and think we could provide value to each other, I would
							be glad to look at your opportunities.
						</p>
						<img src="/banner4.png" class="w-full -mb-5" alt="mid" />
					</div>
				</Card>
			</span>

			<Card
				buttonHref="https://prideunbound.uk"
				buttonText="📂 See archived 2023 Pride Unbound site"
			>
				<div class="flex flex-col gap-5">
					<h3 class="text-xl font-bold flex-wrap inline-flex items-center gap-3 justify-between">
						<div class="inline-flex gap-3">
							<img src="/prideunbound.png" class="h-8 rounded-full" alt="prideunbound" /> Pride Unbound
						</div>
						<span class="text-sm font-light">2023 and ongoing</span>
					</h3>
					<p class="text-sm text-gray-800 dark:text-gray-100">
						Pride Unbound is a convention based in London ran by Puppy Pride. I create and maintain
						their software and server infrastructure. The website is custom made with Laravel and
						has a registration system, payment system, scheduling system, booking system and CMS
						pages system all managed by the event organisers through a dashboard.
					</p>
				</div>
			</Card>
		</div>
	</div>
</section>
