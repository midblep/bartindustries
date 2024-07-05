<script>
	export let text;
	export let icon;
	export let url;
	export let title;
	export let align = 'center';
	export let justify = 'center';
	export let stay = null;

	if (title == null) title = text;
</script>

<a
	href={url}
	{title}
	target="_blank"
	class="border-2 border-white border-opacity-20 bg-opacity-10 bg-white hover:bg-opacity-40 rounded-xl duration-300"
>
	<div class="flex gap-4 items-center py-2 px-4">
		<span class="text-2xl">{icon}</span>
		<span class="font-light text-base lg:text-lg text-{align}">{text}</span>
	</div>
</a>
