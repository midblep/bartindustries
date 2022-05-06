<script>
	export let text;
	export let url;
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
</script>

<a href={url} class={classes}>
	{text}
</a>
