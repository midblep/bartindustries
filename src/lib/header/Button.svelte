<script>
	import { page } from "$app/stores";

	export let text;
	export let url;
	export let disabled;
	export let id;

	let classes;
	let active;

	page.subscribe(value => {
		active = value.url.pathname === url;
		init();
	});

	function init() {
		classes = "border-transparent active:shadow-inner text-center hover:border-neutral-600 active:border-neutral-600 border-opacity-50 border-2 rounded-full py-1 px-4 flex items-center justify-center h-10 duration-300";

		if(id) {
			url = $page.url.pathname + "#" + id;
		}

		if (active) {
			classes += " bg-neutral-600 bg-opacity-30"
		}

		if (disabled) {
			url = null;
			classes += " cursor-not-allowed";
		}
	}

	init();
</script>

<a href={url} class={classes}>
	{text}
</a>
