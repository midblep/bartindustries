<script>
	import ThemeSwitcher from '$lib/ThemeSwitcher.svelte';

	import NavButton from './NavButton.svelte';
	import NavDropdown from './NavDropdown.svelte';
</script>

<div class="flex items-center justify-between">
	<div class="flex items-center">
		<a class="flex h-16 hover:bg-white hover:bg-opacity-20 duration-300" href="/">
			<img
				src="/bart.png"
				alt="Logo"
				class="h-full px-5 py-3 transform hover:scale-95 duration-300"
			/>
		</a>
		<div class="hidden lg:flex h-16">
			<NavButton url="/" text="Home" />
			<NavButton url="/#blog" text="Blog" />
			<NavButton url="/#portfolio" text="Portfolio" />
			<NavButton url="/#about" text="About" />
			<NavButton url="/#vr" text="VR" />
			<!-- <NavButton url="/#furry" text="Furry" /> -->
			<NavButton url="/#contact" text="Contact" />
		</div>
	</div>
	<div class="hidden lg:flex h-16">
		<ThemeSwitcher />
	</div>
	<div class="flex lg:hidden h-16">
		<NavDropdown text="🍔">
			<NavButton url="/" text="Home" />
			<NavButton url="/#blog" text="Blog" />
			<NavButton url="/#portfolio" text="Portfolio" />
			<NavButton url="/#about" text="About" />
			<NavButton url="/#vr" text="VR" />
			<!-- <NavButton url="/#furry" text="Furry" /> -->
			<NavButton url="/#contact" text="Contact" />
			<hr class="bg-white" />
			<ThemeSwitcher />
		</NavDropdown>
	</div>
</div>
