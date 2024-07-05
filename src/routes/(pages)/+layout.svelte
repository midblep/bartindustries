<script>
	import Footer from '$lib/footer/Footer.svelte';
	import Header from '$lib/header/Header.svelte';
	import '../../app.css';
</script>

<div class="bg-white h-screen overflow-y-auto dark:bg-black text-black dark:text-white">
	<div class="w-full min-h-screen max-w-[2000px] flex flex-col mx-auto">
		<Header />
		<slot />
	</div>
	<Footer />
</div>
