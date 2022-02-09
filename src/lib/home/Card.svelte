<script>
	export let color = "bg-gradient-to-br from-gray-200 to-gray-400 dark:bg-gradient-to-br dark:from-gray-500 dark:to-gray-700";
	export let rotation = "";
	export let buttonText;
	export let buttonRedirect = "";
	export let buttonHref;
	let skew;

	switch (rotation) {
		case "left":
			skew = "skew-x-1 lg:skew-x-6";
			break;

		case "right":
			skew = "-skew-x-1 lg:-skew-x-6";
			break;
	}
</script>

<div class="flex flex-col gap-2 w-full relative py-8 px-8 lg:px-12 lg:py-10 group hover:scale-105 hover:-translate-y-5 duration-300">
	<div
		class="{skew} {color} absolute inset-0 z-0 w-full shadow-lg rounded-xl flex flex-col justify-end group-hover:shadow-2xl duration-300"
	>
		{#if buttonText != null && buttonHref != null}
			<a
				href={buttonHref}
				target={buttonRedirect}
				class="rounded-b-xl bg-white bg-opacity-50 p-5 hover:bg-opacity-100 duration-150 text-base lg:text-lg font-bold dark:text-black z-40"
			>
				<span class="p-5 z-10">{buttonText}</span>
			</a>
		{/if}
	</div>

	<div class="z-10 flex flex-col gap-5 flex-grow">
		<slot />

		{#if buttonText != null && buttonHref != null}
			<span class="h-16 lg:h-10" />
		{/if}
	</div>
</div>