<script>
	import Social from "./footer/Social.svelte";
	export let text = false;
</script>

<div class="grid {text ? "grid-cols-4" : "lg:grid-cols-6 grid-cols-3"} flex-wrap gap-3">
	{#if text}
		<div class="col-span-2 items-center justify-center flex text-xl font-bold rounded-xl bg-opacity-50 bg-slate-300 dark:bg-slate-800 duration-150 shadow">
			Social Profiles
		</div>
	{/if}
	<Social
		url="https://twitter.com/midblep"
		title="The Bird App"
		icon="🐦"
		text="Twitter"
	/>
	<Social
		url="https://gitlab.com/midblep"
		title="GitLab"
		icon="🦊"
		text="GitLab"
	/>
	<Social
		url="https://github.com/midblep"
		title="Very new, mostly empty"
		icon="🐙"
		text="GitHub"
	/>
	<Social
		url="https://discord.com/users/191525900880183296"
		title="Mid#0001"
		icon="💬"
		text="Discord"
	/>
	<Social
		url="mailto:mrrmiddynight@gmail.com"
		title="mrrmiddynight@gmail.com"
		icon="✉️"
		text="E-Mail"
	/>
	{#if text}
		<div class="col-span-1 items-center justify-center flex text-xl font-bold rounded-xl bg-opacity-50 bg-slate-300 dark:bg-slate-800 duration-150 shadow">
			// EOL
		</div>
	{/if}
</div>
