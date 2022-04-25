<script>
	export let text;
	export let icon;
	export let url;
	export let title;

	if (title == null) title = text;
</script>

<a
	href={url}
	{title}
	target="_blank"
	class="rounded-xl bg-opacity-10 bg-slate-400 hover:bg-blue-300 dark:hover:bg-blue-600 hover:scale-110 duration-150 shadow"
>
	<div class="aspect-square flex flex-col items-center justify-center p-5">
		<span class="text-5xl ">{icon}</span>
		<span class="text-gray-600 dark:text-gray-300 font-light text-base text-center">{text}</span>
	</div>
</a>
