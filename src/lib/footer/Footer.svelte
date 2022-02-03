<script>
	import Socials from "$lib/Socials.svelte";
	import ThemeSwitcher from "$lib/ThemeSwitcher.svelte";
	import Social from "./Social.svelte";
</script>

<main
	class="py-10 px-2 lg:px-10 bg-white dark:bg-black dark:bg-opacity-50 text-black dark:text-white shadow"
>
	<section
		class="container flex flex-col-reverse lg:flex-row justify-between gap-10"
	>
		<div class="flex flex-col gap-3">
			<h4 class="font-sm font-bold">Bart Industries</h4>
			<hr />
			<p class="text-xs">Copyright 2022 Mid</p>
		</div>

		<div class="flex flex-col gap-5 lg:items-end">
			<Socials />
			<div class="text-amber-500 flex gap-2 items-center font-bold">
				<span class="text-xs">Theme:</span>
				<span class="bg-gray-100 dark:bg-gray-800"
					><ThemeSwitcher /></span
				>
			</div>
		</div>
	</section>
</main>
