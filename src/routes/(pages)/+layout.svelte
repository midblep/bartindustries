<script>
	import Footer from '$lib/footer/Footer.svelte';
	import Header from '$lib/header/Header.svelte';
	import '../../app.css';
</script>

<div class="bg-white h-screen overflow-y-auto dark:bg-black text-black dark:text-white relative">
	<div class="w-full min-h-screen max-w-[2000px] px-2 lg:px-0 flex flex-col mx-auto">
		<Header />
		<slot />
	</div>
	<Footer />
</div>
