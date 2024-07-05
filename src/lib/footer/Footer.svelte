<script>
	import Form from '$lib/home/Form.svelte';
	import Socials from '$lib/Socials.svelte';
	import ThemeSwitcher from '$lib/ThemeSwitcher.svelte';
	import Social from './Social.svelte';
</script>

<footer
	class="@container py-20 lg:mt-40 bg-gradient-to-t from-blue-500 dark:from-blue-900 text-black dark:text-white z-20 flex flex-col gap-10"
>
	<section class="container flex flex-col justify-between gap-5">
		<h4 class="text-2xl font-bold">Bart Industries</h4>
		<div class="flex flex-col">
			<p class="text-sm">Copyright 2022 Pascal van Ginkel. All rights reserved.</p>
			<p class="text-sm">Website made using SvelteKit, hosted on Vercel.</p>
		</div>
	</section>
</footer>
