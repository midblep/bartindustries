<script>
	import Banner from "$lib/home/Banner.svelte";
	import Card from "$lib/home/Card.svelte";
	import Form from "$lib/home/Form.svelte";
	import Portfolio from "$lib/home/Portfolio.svelte";
	import Quote from "$lib/home/Quote.svelte";
import Sona from "$lib/home/Sona.svelte";
	import Virtual from "$lib/home/Virtual.svelte";
</script>

<svelte:head>
	<title>Home | Bart Industries</title>
</svelte:head>

<main class="overflow-x-hidden flex flex-col gap-20">
	<Banner />

	<section class="bg-gray-200 -mt-20 dark:bg-gray-800 py-20">
		<Portfolio/>
	</section>

	<section class="py-20">
		<Sona/>
	</section>

	<hr class="container my-10 opacity-10" />

	<section class="py-20">
		<Virtual/>
	</section>

	<hr class="container my-10 opacity-10" />

	<section class="py-20 mb-40">
		<Quote/>
	</section>
</main>
