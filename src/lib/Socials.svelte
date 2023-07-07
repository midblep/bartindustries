<script>
	import Social from "./footer/Social.svelte";
	export let type = "default";
</script>

{#if type == "default"}
<div class="@container grid @lg:grid-cols-5 grid-cols-1 flex-wrap gap-3">
	<Social
		url="https://mastodon.social/@midblep"
		title="My profile on the fediverse!"
		icon="🐘"
		text="Mastodon"
	/>
	<Social
		url="https://git.bartindustries.com/"
		title="Git repositories"
		icon="🦊"
		text="Git"
	/>
	<Social
		url="https://discord.com/users/191525900880183296"
		title="Mid#0001"
		icon="💬"
		text="Discord"
	/>
	<Social
		url="https://t.me/midblep"
		title="Midblep"
		icon="🗨️"
		text="Telegram"
	/>
	<Social
		url="mailto:mrrmiddynight@gmail.com"
		title="mrrmiddynight@gmail.com"
		icon="✉️"
		text="E-Mail"
	/>
</div>

{:else if type == "grid"}
<div class="grid grid-cols-4 flex-wrap gap-3">
	<div class="col-span-2 items-center justify-center flex text-xl font-bold rounded-xl bg-opacity-50 bg-slate-300 dark:bg-slate-800 duration-150 shadow">
		Social Profiles
	</div>
	<Social
		url="https://twitter.com/midblep"
		title="The Bird App"
		icon="🐦"
		text="Twitter"
	/>
	<Social
		url="https://git.bartindustries.com/"
		title="Git repositories"
		icon="🦊"
		text="Git"
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
	<div class="col-span-1 items-center justify-center flex text-xl font-bold rounded-xl bg-opacity-50 bg-slate-300 dark:bg-slate-800 duration-150 shadow">
		// EOL
	</div>
</div>
{:else if type == "list"}
<div class="grid grid-cols-1 flex-wrap gap-3">
	<Social
		url="https://twitter.com/midblep"
		title="The Bird App"
		icon="🐦"
		text="Twitter"
		justify="start"
		align="left"
	/>
	<Social
		url="https://git.bartindustries.com/"
		title="Git repositories"
		icon="🦊"
		text="Git"
	/>
	<Social
		url="https://discord.com/users/191525900880183296"
		title="Mid#0001"
		icon="💬"
		text="Discord"
		justify="start"
		align="left"
	/>
	<Social
		url="mailto:mrrmiddynight@gmail.com"
		title="mrrmiddynight@gmail.com"
		icon="✉️"
		text="E-Mail"
		justify="start"
		align="left"
	/>
</div>
{/if}