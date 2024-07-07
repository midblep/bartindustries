<script>
	export let title = '';
</script>

<img
	class="scale-150 w-full -mt-20 rotate-180 lg:scale-100"
	src="/homepage/steps.svg"
	alt="Header"
/>

<div class="@container flex flex-col justify-center bg-[#3A53FF] px-10 pb-40 -mt-1" id={title}>
	<h2 class="font-bold text-4xl text-center lg:text-8xl baron mb-20 text-white">{title}</h2>

	<div
		class="grid grid-cols-1 @2xl:grid-cols-2 @4xl:grid-cols-3 @7xl:grid-cols-4 gap-5 justify-between"
	>
		<slot />
	</div>
</div>

<img class="scale-150 w-full lg:scale-100" src="/homepage/steps.svg" alt="Header" />
