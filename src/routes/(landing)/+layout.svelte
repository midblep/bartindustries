<script>
	import Header from '$lib/header/Header.svelte';
	import '../../app.css';
</script>

<div class="bg-white h-screen overflow-y-auto dark:bg-black text-black dark:text-white">
	<div class="w-full max-h-screen overflow-hidden max-w-[2000px] flex flex-col gap-5 mx-auto">
		<Header />
		<slot />
	</div>
</div>
