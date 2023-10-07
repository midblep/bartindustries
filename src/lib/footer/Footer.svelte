<script>
	import Form from "$lib/home/Form.svelte";
	import Socials from "$lib/Socials.svelte";
	import ThemeSwitcher from "$lib/ThemeSwitcher.svelte";
	import Social from "./Social.svelte";
</script>

<footer
	class="@container py-20 bg-white dark:bg-black dark:bg-opacity-50 text-black dark:text-white z-20 flex flex-col gap-10"
>
	<div class="absolute top-0 -mt-40" id="contact"></div>

	<section
		class="container grid grid-cols-1 @xl:grid-cols-2 gap-20 justify-between"
		id="contact"
	>
		<Form />

		<div class="@lg:flex justify-end items-start">
			<img src="/homepage/fullbody.png" class="w-[500px]" alt="contact" />
		</div>
	</section>

	<hr class="container my-10 lg:my-10 opacity-10" />

	<section
		class="container flex flex-col-reverse lg:flex-row justify-between gap-10"
	>
		<div class="flex flex-col gap-3">
			<h4 class="text-2xl font-bold">Bart Industries</h4>
			<p class="text-sm">Copyright 2022 Pascal van Ginkel. All rights reserved.</p>
			<p class="text-sm">Website made using SvelteKit, hosted on Vercel.</p>
		</div>
	</section>
</footer>
