<script>
	// @ts-nocheck
	import ThemeSwitcher from "$lib/ThemeSwitcher.svelte";

	import Button from "./Button.svelte";
	import Dropdown from "./Dropdown.svelte";
	import DropdownButton from "./DropdownButton.svelte";
</script>

<div class="flex justify-between items-center">
	<a class="flex h-14" href="/">
		<!-- <Button url="/" text="<img src='/bart.png' />" type="title" /> -->
		<img src="/bart.png" alt="Logo" class="h-full px-5 py-2 bg-amber-500" />
	</a>
	<div class="hidden lg:flex h-14">
		<Button url="/" text="🏠 Home" />
		<Button disabled="true" url="/esu" text="📒 ESU" />
		<Button disabled="true" url="/portfolio" text="🧰 works" />
		<Button disabled="true" url="/furry" text="🐈‍⬛ Furry" />
		<Button disabled="true" url="http://ad.localhost" text="🔞 AD Site" />
		<span><ThemeSwitcher /></span>
	</div>
	<div class="flex lg:hidden h-14">
		<Dropdown text="🍔">
			<Button url="/" text="🏠 Home" />
			<Button disabled="true" url="/esu" text="📒 ESU" />
			<Button disabled="true" url="/portfolio" text="🧰 works" />
			<Button disabled="true" url="/furry" text="🐈‍⬛ Furry" />
			<Button
				disabled="true"
				url="http://ad.localhost"
				text="🔞 AD Site"
			/>
			<ThemeSwitcher />
		</Dropdown>
	</div>
</div>
