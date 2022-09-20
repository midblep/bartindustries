<script>
	import { onMount } from "svelte";
	import { getCookie } from "./helpers/cookies";

	let classes = "h-full py-2 px-10 text-white flex justify-center items-center uppercase group hover:bg-white hover:bg-opacity-20 font-bold text-lg duration-300";

	function switchTheme() {
		if (document.documentElement.classList.contains("dark")) {
			setLight();
		} else {
			setDark();
		}
	}

	function setLight() {
		document.documentElement.classList.remove("dark");
		document.querySelector("#theme").innerHTML = "☀️";
		document.cookie = "theme=light";
	}

	function setDark() {
		document.documentElement.classList.add("dark");
		document.querySelector("#theme").innerHTML = "🌙";
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
	<span class="transform group-hover:scale-90 duration-300">
		Dark / Light
	</span>
</button>
