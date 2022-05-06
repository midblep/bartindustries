<script>
	export let buttonText = "";
	export let buttonRedirect = "_blank";
	export let buttonHref = null;

	let classes = "z-10 flex flex-col group relative";
</script>

<div class={classes}>
	<span class="h-4 group-hover:-translate-y-1 bg-blue-600 rounded-t-xl duration-300"></span>

	<div class="flex-grow flex flex-col gap-2 w-full relative p-10 group-hover:-translate-y-1 duration-300 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-700">
		<slot />
	</div>

	{#if buttonText != null && buttonHref != null}
		<a
			href={buttonHref}
			target={buttonRedirect}
			class="rounded-b-xl bg-white dark:bg-gray-900 bg-opacity-50 p-5 group-hover:-translate-y-1 hover:bg-opacity-100 dark:hover:bg-blue-600 hover:bg-blue-200 duration-300 text-base lg:text-lg font-bold z-40"
		>
			<span class="px-5">{buttonText}</span>
		</a>
	{:else}
		<span class="h-4 bg-opacity-50 group-hover:-translate-y-1 bg-white dark:bg-gray-900 rounded-b-xl duration-300"></span>
	{/if}
</div>