<script>
	export let buttonText = '';
	export let buttonRedirect = '_blank';
	export let buttonHref = null;
	export let buttonImage = null;
	export let center = false;
	export let highlighted = false;

	let classes =
		'z-10 flex flex-col group relative h-full hover:shadow-xl duration-150 hover:scale-[101%] hover:-translate-y-1';
</script>

<div class={classes}>
	<div
		class="flex-grow rounded-t-xl {center
			? 'justify-center'
			: ''} flex flex-col gap-5 w-full relative px-10 py-5 duration-300 {highlighted
			? 'bg-blue-500'
			: 'bg-gray-100 dark:bg-gray-900'}"
	>
		<slot />
	</div>

	{#if buttonText != null && buttonHref != null}
		<a
			href={buttonHref}
			target={buttonRedirect}
			class="rounded-b-xl {highlighted
				? 'bg-blue-500'
				: 'bg-gray-300 dark:bg-gray-700'} py-3 px-5 hover:bg-opacity-100 dark:hover:bg-blue-600 hover:bg-blue-200 duration-300 text-base lg:text-lg font-bold z-40 h-14 inline-flex items-center"
		>
			<div class="inline-flex items-center px-5 gap-2">
				{#if buttonImage}
					<img src={buttonImage} class="h-8" />
				{/if}
				<span>{buttonText}</span>
			</div>
		</a>
	{:else}
		<span
			class="h-2 {highlighted
				? 'bg-blue-500'
				: 'bg-gray-300 dark:bg-gray-700'} rounded-b-xl duration-300 z-40"
		/>
	{/if}
</div>
