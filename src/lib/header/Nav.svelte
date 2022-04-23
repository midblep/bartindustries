<script>
	// @ts-nocheck
	import ThemeSwitcher from "$lib/ThemeSwitcher.svelte";

	import Button from "./Button.svelte";
	import Dropdown from "./Dropdown.svelte";
	import DropdownButton from "./DropdownButton.svelte";
</script>

<div class="flex items-center justify-between">
	<div class="flex items-center">
		<a class="flex h-16 hover:bg-white hover:bg-opacity-20 duration-300" href="/">
			<!-- <Button url="/" text="<img src='/bart.png' />" type="title" /> -->
			<img src="/bart.png" alt="Logo" class="h-full px-5 py-3 transform hover:scale-95 duration-300" />
		</a>
		<div class="hidden lg:flex h-16 baron-light">
			<Button url="/" text="Home" />
			<Button disabled="true" url="/esu" text="ESU" />
			<Button disabled="true" url="/portfolio" text="works" />
			<Button disabled="true" url="/furry" text="Furry" />
		</div>
	</div>
	<div class="hidden lg:flex h-16">
		<ThemeSwitcher />
	</div>
	<div class="flex lg:hidden h-16">
		<Dropdown text="🍔">
			<Button url="/" text="Home" />
			<Button disabled="true" url="/esu" text="ESU" />
			<Button disabled="true" url="/portfolio" text="works" />
			<Button disabled="true" url="/furry" text="Furry" />
			<ThemeSwitcher />
		</Dropdown>
	</div>
</div>