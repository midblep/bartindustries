<script>
	export let text;
	export let type;

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

	function openMenu() {
		let dropdown = document.querySelector("#dropdown");
		console.log(dropdown);
		dropdown.classList.toggle("block");
		dropdown.classList.toggle("hidden");
	}
</script>

<main class="relative">
	<!-- <MenuIcon /> -->
	<button on:click={openMenu} type="none" class={classes} id="trigger">
		{text}
	</button>

	<div
		class="absolute w-screen right-0 bg-white dark:bg-black hidden z-50"
		id="dropdown"
	>
		<slot />
	</div>
</main>
