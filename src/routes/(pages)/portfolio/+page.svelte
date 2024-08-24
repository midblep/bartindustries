<script>
	import Current from '$lib/portfolio/Current.svelte';
	import Study from '$lib/portfolio/Study.svelte';
</script>

<svelte:head>
	<title>Bart Industries</title>
</svelte:head>

<main class="flex flex-col my-20 gap-20 2xl:gap-40">
	<Current />
	<Study />
</main>
