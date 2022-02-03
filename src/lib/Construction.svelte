<script>
	import { onMount } from "svelte";

	import { getCookie } from "./helpers/cookies";

	function close() {
		document.cookie = "closedConstruction=true";
		let classes = document.querySelector("#item").classList;
		classes.add("hidden");
	}

	function shouldShow() {
		let cookie = getCookie("closedConstruction");
		let classes = document.querySelector("#item").classList;

		console.log(cookie);

		if (cookie != "true") {
			classes.add("block");
			classes.remove("hidden");
		} else {
			classes.add("hidden");
			classes.remove("block");
		}
	}

	onMount(() => {
		shouldShow();
	});
</script>

<section
	class="relative py-2 text-center bg-amber-500 text-white hidden"
	id="item"
>
	<div
		class="container flex lg:flex-row flex-col justify-between items-center"
	>
		<h2 class="text-xl font-bold text-left">🚧 Under Construction 🏗️</h2>

		<p class="lg:text-right text-sm px-2 lg:px-0">
			I started making this a few days ago after I realized I haven't had
			a good personal website in a while. Please bear with me as I fill
			this up and make it look better!
		</p>
	</div>

	<div
		class="absolute inset-0 z-10 h-full flex items-start lg:items-center justify-end pt-2 lg:pt-0 pr-3"
	>
		<button type="none" on:click={close}> ❌ </button>
	</div>
</section>
