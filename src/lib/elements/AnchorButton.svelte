<script>
	export let href;
	export let target;
</script>

<a
	target={target}
	href={href}
	class="py-3 px-10 text-lg font-bold font-mono bg-opacity-20 hover:bg-opacity-100 bg-black text-white rounded-full border-white hover:bg-white hover:text-black border-2 hover:shadow-inner duration-300"
>
	<slot />
</a>
