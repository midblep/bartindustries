<script>
	import Card from '$lib/home/Card.svelte';
	import Section from '$lib/portfolio/Section.svelte';
</script>

<Section title="current" description="Some of the stuff that currently occupies my time.">
	<span class="@2xl:row-span-2">
		<Card>
			<h3 class="text-xl font-bold flex-wrap inline-flex items-center gap-3 justify-between">
				<div class="inline-flex gap-3">
					<img src="/agroit.png" class="h-8" alt="agroit" /> Agro IT
				</div>
				<span class="text-sm font-light">Full-Stack Developer since 2023</span>
			</h3>
			<p class="text-sm text-gray-800 dark:text-gray-100">
				During an internship at Agro IT I developed a web environment for RVDM, a realtime manure
				transport compliance system. The company liked what I built and hired me to develop it
				further as a sidejob. I then developed another system for hour and work registration for my
				graduation project, and was hired to continue as a software engineer after my studies. Now I
				help Agro IT transition their products to the cloud and develop new systems for customers.
			</p>
			<img src="/rvdm.png" class="rounded-xl" alt="Picture of some people from the DevOps Team" />
		</Card>
	</span>

	<span class="@2xl:row-span-3">
		<Card
			buttonHref="https://puppypride.social"
			buttonText="🌐 Visit the Puppy Pride social network"
		>
			<div class="flex flex-col gap-5">
				<span class="flex flex-col gap-5">
					<h3 class="text-xl flex-wrap font-bold inline-flex items-center gap -3 justify-between">
						<div class="inline-flex gap-3">
							<img src="/puppypride.png" class="h-8" alt="puppypride" /> Puppy Pride
						</div>
						<span class="text-sm font-light">Head of IT since 2021</span>
					</h3>
					<p class="text-sm text-gray-800 dark:text-gray-100">
						I am the lead developer of Puppy Pride since January of 2021. I develop and maintain
						Puppy Pride's social network, servers and events.
						<br /><br />
						The site was built from the ground up using the TALL (Laravel) stack and sports a large array
						of features such as blogging, albums, subscriptions, events, instant messaging, customizable
						profiles, feeds, groups and advanced group management, and so on.
						<br /><br />
						Furthermore I have gotten experience with a lot of real concepts such as advanced dockerization,
						deployment, load balancing, caching, server maintenance and more.
						<br /><br />
						<b>Warning:</b> Puppy Pride is an adult themed social network for people into petplay based
						in England. Explicit imagery may be present. Due to the site's content, logging in is required
						to view the majority of its features.
					</p>
				</span>
				<span class="flex items-center">
					<img src="/homepage/pp.png" alt="puppypride profile page" />
				</span>
			</div>
		</Card>
	</span>

	<span>
		<Card buttonHref="https://dubbelnull.com/showcase" buttonText="➡️ View DubbelNull showcase">
			<h3 class="text-xl font-bold flex-wrap inline-flex items-center gap-3 justify-between">
				<div class="inline-flex gap-3">
					<img src="/dubbelnull.png" class="h-10 -my-1 -ml-1" alt="dubbelnull" /> DubbelNull
				</div>
				<span class="text-sm font-light">CTO since 2020</span>
			</h3>
			<p class="text-sm text-gray-800 dark:text-gray-100">
				DubbelNull is a family business that does internet based development for small and medium
				sized companies, such as creating websites, manage hosting, advice and other similar things.
				I have made several websites for clients under this name, and you can find more of my works
				on the DubbelNull website.
			</p>
		</Card>
	</span>

	<span class="@2xl:row-span-2">
		<Card buttonHref="https://furality.org/" buttonText="🦊 Visit furality.org">
			<div class="w-full flex flex-col gap-5">
				<h3
					class="w-full text-xl font-bold flex-wrap inline-flex items-center gap-3 justify-between"
				>
					<div class="inline-flex gap-3">
						<img src="/fox.png" class="h-8" alt="furality" /> Furality
					</div>
					<span class="text-sm font-light">Back-End Developer since 2023</span>
				</h3>
				<p class="text-sm text-gray-800 dark:text-gray-100">
					Furality is a nonprofit organisation that organises Furality Online Experience (F.O.X.),
					the largest online furry convention in the world hosted inside VRChat.
					<br /><br />
					Since December 2023 I volunteer for Furality Inc. as a Backend Developer. I work together with
					the rest of the DevOps Department to work on APIs and systems that use things such as TypeScript,
					NestJS, Grafana, Prometheus, RabbitMQ, Authentik, C#, Unity, and more.
					<br /><br />
					I am mainly tasked with developing Furality's in-house OIDC system, and expanding Furality's
					Unity plugins. But I also work on upgrading and scaling queue runners, updating existing APIs
					that connect with Discord, Patreon, VRChat and others to run the convention itself, and maintaining
					databases and infrastructure surrounding the systems.
				</p>
			</div>
		</Card>
	</span>

	<span class="@2xl:col-span-1">
		<Card buttonHref="https://reffurence.com/" buttonText="🦊 Visit reffurence.com">
			<div class="w-full flex flex-col gap-5">
				<h3
					class="w-full text-xl font-bold flex-wrap inline-flex items-center gap-3 justify-between"
				>
					<div class="inline-flex gap-3">
						<img src="/reffurence.png" class="h-8" alt="furality" /> Reffurence
					</div>
					<span class="text-sm font-light">Lead Front-End since 2024</span>
				</h3>
				<p class="text-sm text-gray-800 dark:text-gray-100">
					Reffurence is a Dutch physical furry convention. I started volunteering as their Lead
					Front-End developer in 2024 and work on maintaining and updating their website,
					dashboards, CMS and other front-end tools used during the convention.
				</p>
			</div>
		</Card>
	</span>

	<Card buttonHref="https://prideunbound.uk" buttonText="🦮 See the Pride Unbound site">
		<div class="flex flex-col gap-5">
			<h3 class="text-xl font-bold flex-wrap inline-flex items-center gap-3 justify-between">
				<div class="inline-flex gap-3">
					<img src="/prideunbound.png" class="h-8 rounded-full" alt="prideunbound" /> Pride Unbound
				</div>
				<span class="text-sm font-light">Head of IT since 2022</span>
			</h3>
			<p class="text-sm text-gray-800 dark:text-gray-100">
				Pride Unbound is a convention based in London ran by Puppy Pride. I create and maintain
				their software and server infrastructure. The website is custom made with Laravel and has a
				registration system, payment system, scheduling system, booking system and CMS pages system
				all managed by the event organisers through a dashboard.
			</p>
		</div>
	</Card>

	<Card buttonHref="https://flamesoftware.com" buttonText="🔥 Check out the website">
		<div class="flex flex-col gap-5">
			<h3 class="text-xl font-bold flex-wrap inline-flex items-center gap-3 justify-between">
				<div class="inline-flex gap-3">
					<img src="/flame.png" class="h-8" alt="flame" /> Flame Software
				</div>
				<span class="text-sm font-light">CTO since 2022</span>
			</h3>
			<p class="text-sm text-gray-800 dark:text-gray-100">
				Flame Software is a company that focuses on developing the next era of instant messaging.
				Where we currently have innovations being made in federated and independent social media
				structures like Bluesky and Mastodon, the same is still lacking for more personal
				communication platforms. Flame aims to be the first federated network of private messaging.
			</p>
		</div>
	</Card>
</Section>
