<script>
	import Form from "$lib/home/Form.svelte";
	import Socials from "$lib/Socials.svelte";
	import ThemeSwitcher from "$lib/ThemeSwitcher.svelte";
	import Social from "./Social.svelte";
</script>

<footer
	class="py-20 px-2 lg:px-10 bg-white dark:bg-black dark:bg-opacity-50 text-black dark:text-white shadow z-20 flex flex-col gap-10"
>
	<section
		class="container relative overflow-hidden px-5 lg:px-0 flex flex-col lg:flex-row gap-10 h-full justify-between"
		id="contact"
	>
		<div class="absolute top-0 -mt-40" id="contact"></div>

		<div class="flex gap-10 w-full">
			<Form />
		</div>

		<img src="/homepage/fullbody.png" class="lg:block hidden lg:h-[500px] z-10" alt="contact" />
	</section>

	<hr class="container my-10 lg:my-10 opacity-10" />

	<section
		class="container flex flex-col-reverse lg:flex-row justify-between gap-10"
	>
		<div class="flex flex-col gap-3">
			<h4 class="text-2xl font-bold">Bart Industries</h4>
			<p class="text-sm">Copyright 2022 Pascal van Ginkel. All rights reserved.</p>
		</div>
	</section>
</footer>
