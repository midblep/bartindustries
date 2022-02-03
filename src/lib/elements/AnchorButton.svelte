<script>
	export let href;
</script>

<a
	{href}
	class="py-2 px-5 bg-white dark:bg-black bg-opacity-70 dark:bg-opacity-50 rounded-lg hover:bg-opacity-100 dark:hover:bg-opacity-100 duration-150 text-gray-800 hover:text-black dark:text-gray-200 dark:hover:text-white"
>
	<slot />
</a>
