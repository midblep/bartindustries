<script>
	import Footer from "$lib/footer/Footer.svelte";
	import Header from "$lib/header/Header.svelte";

	import "../app.css";
</script>

<div class="bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
	<div class="min-h-screen">
		<Header />

		<slot />
	</div>

	<Footer />
</div>
