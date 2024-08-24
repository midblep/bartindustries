<script>
	export let title = '';
	export let description = '';
</script>

<main class="flex flex-col">
	<!-- <img
		class="scale-150 w-full -mt-20 rotate-180 lg:scale-100"
		src="/homepage/steps.svg"
		alt="Header"
	/> -->

	<div class="@container flex flex-col justify-center" id={title}>
		<h2 class="font-bold text-4xl text-center lg:text-8xl baron px-5">{title}</h2>
		<h5 class="text-xl text-center lg:text-2xl mb-20 px-5">{description}</h5>

		<div
			class="grid grid-cols-1 @2xl:grid-cols-2 @4xl:grid-cols-3 @7xl:grid-cols-4 gap-5 justify-between"
		>
			<slot />
		</div>
	</div>

	<!-- <img class="scale-150 w-full lg:scale-100" src="/homepage/steps.svg" alt="Header" /> -->
</main>
