<script>
	export let text;
	export let icon;
	export let url;
	export let title;
	export let align = "center";
	export let justify = "center";

	if (title == null) title = text;
</script>

<a
	href={url}
	{title}
	target="_blank"
	class="rounded-xl bg-opacity-50 hover:bg-opacity-100 bg-slate-300 dark:bg-slate-800 hover:bg-blue-400 dark:hover:bg-blue-600 hover:scale-110 duration-150 shadow"
>
	<div class="flex flex-wrap gap-1 items-center justify-{justify} p-3 lg:p-5">
		<span class="text-2xl lg:text-5xl">{icon}</span>
		<span class="text-gray-700 dark:text-gray-300 font-light text-base lg:text-lg text-{align}">{text}</span>
	</div>
</a>
