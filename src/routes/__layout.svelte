<script>
	import Construction from "$lib/Construction.svelte";
	import Footer from "$lib/footer/Footer.svelte";
	import Header from "$lib/header/Header.svelte";

	import "../app.css";
</script>

<main class="bg-black">
	<div class="container">
		<Construction />

		<div class="min-h-screen bg-neutral-900 text-white">
			<Header />

			<div class="p-10">
				<slot />
			</div>
		</div>

		<Footer />
	</div>
</main>
