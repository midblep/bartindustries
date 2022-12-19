<script>
	import { onMount } from "svelte";
	import { slide } from "svelte/transition";

	let texts = [
		"keep on creating",
		"work on what you love",
		"be yourself for yourself",
		"overcome your challenges",
		"push yourself forward",
		"dare to dare",
		"go out there and live"
	];
	let text = texts[0];

	onMount(() => {
		let i = 0;
		text = texts[i % 7];
		setInterval(() => {
			text = texts[i % 7];
			i++;
		}, 3000);
	});
</script>

<h3 class="italic font-light text-4xl py-5  text-center h-20 flex items-center justify-center">
    {#key text}
        <div in:slide>{text}</div>
    {/key}
</h3>