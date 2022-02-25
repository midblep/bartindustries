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
	class="text-xs flex flex-col justify-center hover:scale-110 duration-150"
>
	<span class="text-4xl ">{icon}</span>
	<span class="text-gray-600 dark:text-gray-300 font-light text-center">{text}</span>
</a>
