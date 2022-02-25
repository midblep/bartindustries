<script>
	export let text;
	export let url;
	export let type;
	export let disabled;

	let classes = "h-full py-2 px-5 flex justify-center items-center lowercase";

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

	if (disabled) {
		url = null;
		classes += " cursor-not-allowed";
	}
</script>

<a href={url} class={classes}>
	{text}
</a>
