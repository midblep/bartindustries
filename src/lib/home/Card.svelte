<script>
	export let buttonText = '';
	export let buttonRedirect = '_blank';
	export let buttonHref = null;
	export let buttonImage = null;
	export let center = false;

	let classes =
		'z-10 flex flex-col group relative h-full hover:shadow-xl duration-150 hover:scale-[101%] hover:-translate-y-1';
</script>

<div class={classes}>
	<span class="h-2 bg-gray-300 dark:bg-gray-700 rounded-t-xl duration-300" />

	<div
		class="flex-grow {center
			? 'justify-center'
			: ''} flex flex-col gap-5 w-full relative px-10 py-5 duration-300 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800"
	>
		<slot />
	</div>

	{#if buttonText != null && buttonHref != null}
		<a
			href={buttonHref}
			target={buttonRedirect}
			class="rounded-b-xl bg-gray-300 dark:bg-gray-700 py-3 px-5 hover:bg-opacity-100 dark:hover:bg-blue-600 hover:bg-blue-200 duration-300 text-base lg:text-lg font-bold z-40 h-14 inline-flex items-center"
		>
			<div class="inline-flex items-center px-5 gap-2">
				{#if buttonImage}
					<img src={buttonImage} class="h-8" />
				{/if}
				<span>{buttonText}</span>
			</div>
		</a>
	{:else}
		<span class="h-2 bg-gray-300 dark:bg-gray-700 rounded-b-xl duration-300 z-40" />
	{/if}
</div>
