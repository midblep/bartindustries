<script>
	import BigBoysClub from "$lib/BigBoysClub.svelte";

	import Socials from "$lib/Socials.svelte";
	import ThemeSwitcher from "$lib/ThemeSwitcher.svelte";
	import Social from "./Social.svelte";
</script>

<main class="flex flex-col">
	<BigBoysClub/>

	<section
		class="p-10 flex flex-col-reverse lg:flex-row justify-between gap-10 bg-gradient-to-bl from-zinc-100 to-orange-100 text-black"
	>
		<div class="flex flex-col gap-3">
			<h4 class="font-sm font-bold font-mono">Midblep // hugegrowingcat</h4>
			<p class="text-xs">Copyright 2022 Mid</p>
		</div>

		<div class="flex flex-col gap-5 lg:items-end">
			<Socials />
		</div>
	</section>
</main>
