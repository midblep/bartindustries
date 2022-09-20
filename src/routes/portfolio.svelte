<script>
	import Card from "$lib/home/Card.svelte";
	import Socials from "$lib/Socials.svelte";
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<main>
	<section class="bg-opacity-50 relative h-80">
		<div class="absolute left-0 h-full w-full bg-blue-600 opacity-50"></div>

		<div class="container absolute inset-0 pt-20">
			<h1 class="text-8xl font-bold baron-light">portfolio</h1>
		</div>
	</section>

	<div class="container">
		<section class="py-20 flex gap-10 flex-col items-between">
			<section class="w-1/3 flex flex-col gap-5">
				<h2 class="font-bold text-4xl">Puppy Pride</h2>

				<Card
					buttonHref="https://puppypride.social"
					buttonText="🌐 Visit Puppy Pride"
				>
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
			</section>

			<section class="w-1/2 h-96">
				<h2 class="font-bold text-4xl">The Moonlit Den</h2>
			</section>

			<section class="w-1/2 h-96">
				<h2 class="font-bold text-4xl">The Moonlit Den</h2>
			</section>

			<section class="w-1/2 h-96">
				<h2 class="font-bold text-4xl">The Moonlit Den</h2>
			</section>
		</section>
	</div>
</main>
