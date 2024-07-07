<script>
	import Experience from '$lib/portfolio/Experience.svelte';
	import Professional from '$lib/portfolio/Professional.svelte';
	import Projects from '$lib/portfolio/Projects.svelte';
</script>

<svelte:head>
	<title>Bart Industries</title>
</svelte:head>

<main class="flex flex-col my-20">
	<Professional />
	<Experience />
	<Projects />
</main>
