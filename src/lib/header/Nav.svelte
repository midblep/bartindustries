<script>
	import ThemeSwitcher from '$lib/ThemeSwitcher.svelte';
	import NavButton from './NavButton.svelte';
</script>

<div class="@container">
	<div class="flex flex-col @2xl:flex-row items-center gap-2 p-2 justify-between">
		<a
			class="flex items-center rounded-xl hover:dark:bg-white hover:bg-black hover:bg-opacity-20 hover:dark:bg-opacity-20 whitepigeon duration-300 text-center text-xl @2xl:text-4xl"
			href="/"
		>
			<span class="transform hover:scale-95 duration-300 px-4 py-2">Bart Industries</span>
		</a>
		<div class="flex gap-2">
			<NavButton url="/about" text="About" />
			<NavButton url="/portfolio" text="Portfolio" />
			<NavButton url="/vr" text="VR" />
			<ThemeSwitcher />
		</div>
	</div>
</div>
