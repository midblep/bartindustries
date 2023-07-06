<script>
	import { onMount } from "svelte";
	import { slide } from "svelte/transition";

	let texts = [
		"keep on creating, creativitiy is our humanity",
		"work on what you love and the rest will come later",
		"be yourself, for yourself",
		"stand by yourself"
	];
	let text = texts[0];

	onMount(() => {
		let i = 0;
		text = texts[i % 7];
		setInterval(() => {
			text = texts[i % texts.length];
			i++;
		}, 5000);
	});
</script>

<h3 class="italic font-light text-4xl py-5  text-center h-20 flex items-center justify-center">
    {#key text}
        <div in:slide>{text}</div>
    {/key}
</h3>