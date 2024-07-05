<script>
	import Social from './footer/Social.svelte';
	export let type = 'default';
</script>

<div class="@container grid grid-cols-2 @2xl:grid-cols-3 flex-wrap gap-5">
	<!-- <Social
		url="https://mastodon.social/@midblep"
		title="My profile on the fediverse!"
		icon="🐘"
		text="Mastodon"

	/>
	<Social
		url="https://mastodon.social/@midblep"
		title="Bird app (or X?)"
		icon="🐦"
		text="Twitter (X)"

	/> -->
	<Social url="https://git.bartindustries.com/" title="Git repositories" icon="🗃️" text="Git" />
	<Social url="https://gitlab.com/midblep" title="GitLab repositories" icon="🦊" text="GitLab" />
	<Social url="https://github.com/midblep" title="GitHub repositories" icon="🐙" text="GitHub" />
	<Social url="https://discord.com/invite/FBUv2SXF" title="Midblep" icon="💬" text="Discord" />
	<Social url="https://t.me/midblep" title="Midblep" icon="🗨️" text="Telegram" />
	<Social
		url="mailto:mrrmiddynight@gmail.com"
		title="mrrmiddynight@gmail.com"
		icon="✉️"
		text="E-Mail"
	/>
</div>
