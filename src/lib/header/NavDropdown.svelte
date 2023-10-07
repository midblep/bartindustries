<script>
	import NavButton from "./NavButton.svelte";

	export let text = "";
	export let type = "";

	let dropdown;
	let classes = "h-full px-5 flex justify-center items-center";

	switch (type) {
		case "title":
			classes +=
				" text-xl font-bold text-white bg-amber-500 duration-300";
			break;

		default:
			classes +=
				" hover:bg-orange-200 dark:hover:bg-orange-700 duration-300";
			break;
	}

	function toggle() {
		dropdown.classList.toggle("flex");
		dropdown.classList.toggle("hidden");
	}
</script>

<main>
	<button on:click={toggle} type="none" class={classes} id="trigger">
		{text}
	</button>

	<div
		class="fixed flex-col w-screen h-screen inset-0 bg-gradient-to-br from-blue-700 to-blue-900 hidden z-50"
		bind:this={dropdown}
	>
		<NavButton text="Close Menu" on:click={toggle} />
		<hr class="bg-white" />
		<slot />
	</div>
</main>
