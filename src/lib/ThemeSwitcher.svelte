<script>
	import { onMount } from "svelte";
	import { getCookie } from "./helpers/cookies";

	let classes =
		"w-full h-full py-1 px-5 flex justify-center items-center hover:bg-orange-200 dark:hover:bg-orange-700 duration-300";

	function switchTheme() {
		if (document.documentElement.classList.contains("dark")) {
			setLight();
		} else {
			setDark();
		}
	}

	function setLight() {
		document.documentElement.classList.remove("dark");
		document.querySelector("#theme").innerHTML = "🌙";
		document.cookie = "theme=light";
	}

	function setDark() {
		document.documentElement.classList.add("dark");
		document.querySelector("#theme").innerHTML = "☀️";
		document.cookie = "theme=dark";
	}

	onMount(() => {
		let theme = getCookie("theme");

		if (!theme) {
			document.cookie = "theme=light";
		} else {
			if (theme == "light") setLight();
			if (theme == "dark") setDark();
		}
	});
</script>

<button type="none" class={classes} on:click={switchTheme} id="theme">
	☀️ <span class="text-xs text-gray-400 px-2">/</span> 🌙
</button>
