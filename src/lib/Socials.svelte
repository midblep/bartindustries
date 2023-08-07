<script>
	import Social from "./footer/Social.svelte";
	export let type = "default";
</script>

<div class="@container grid @lg:grid-cols-2 @xl:grid-cols-3 grid-cols-1 flex-wrap gap-3">
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