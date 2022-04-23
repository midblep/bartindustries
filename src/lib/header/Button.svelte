<script>
	export let text;
	export let url;
	export let type;
	export let disabled;

	let classes = "h-full py-2 px-10 flex justify-center items-center lowercase group";

	switch (type) {
		case "title":
			classes +=
				" text-xl font-bold text-white bg-amber-500 duration-300";
			break;

		default:
			classes +=
				" hover:bg-white hover:bg-opacity-30 text-white font-bold text-lg duration-300";
			break;
	}

	if (disabled) {
		url = null;
		classes += " cursor-not-allowed text-white opacity-50";
	}
</script>

<a href={url} class={classes}>
	<p class="transform group-hover:scale-110 duration-300">
		{text}
	</p>
</a>
