<script>
	import { page } from '$app/stores';

	export let text = '';
	export let url = '';
	export let type = '';
	export let disabled = false;

	let classes;

	initButton($page.url.pathname);

	function initButton(givenUrl) {
		let current;
		classes =
			'h-full xl:py-2 py-1 xl:px-10 px-5 flex justify-center items-center uppercase group rounded-xl';

		switch (type) {
			case 'title':
				classes += ' text-xl font-bold bg-amber-500 duration-300';
				break;

			default:
				classes +=
					' hover:bg-black hover:dark:bg-white hover:bg-opacity-20 hover:dark:bg-opacity-20 font-bold text-lg duration-300';
				break;
		}

		if (disabled) {
			url = null;
			classes += ' cursor-not-allowed opacity-50 select-none';
		}

		if (url == '/') current = givenUrl == '/';
		if (url != '/') current = givenUrl.includes(url);

		current = false;

		if (current == true) {
			classes += ' text-black dark:text-white bg-white bg-opacity-10';
		} else {
			classes += ' text-gray-900 dark:text-gray-200';
		}
	}

	page.subscribe((value) => {
		initButton(value.url.pathname);
	});
</script>

<a href={url} class={classes} on:click>
	<p class="transform duration-300 {!disabled ? 'group-hover:scale-110' : ''}">
		{text}
	</p>
</a>
