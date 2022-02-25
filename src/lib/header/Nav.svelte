<script>
	// @ts-nocheck
	import Button from "./Button.svelte";
</script>

<div class="flex flex-col justify-center gap-2 items-center">
	<a class="flex text-6xl items-center font-mono font-bold" href="/">
		Mid's Domain
	</a>
	<div class="flex lg:flex-row flex-col gap-5 items-center font-mono">
		<Button url="/" text="About" />
		<Button url="/macromarch" text="Macro March" />
		<Button url="/characters" text="Characters" />
	</div>
</div>