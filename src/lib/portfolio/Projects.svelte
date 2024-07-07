<script>
	import Card from '$lib/home/Card.svelte';
	import Section from '$lib/portfolio/Section.svelte';

	const words = [
		'JavaScript',
		"<b class='text-blue-500'>TypeScript</b>",
		'MySQL',
		"<b class='text-blue-500'>Laravel</b>",
		'PHP',
		'Livewire',
		"<b class='text-blue-500'>NestJS</b>",
		'NodeJS',
		'Unity',
		'Substance Painter',
		'Blender',
		'PostgreSQL',
		'TailwindCSS',
		'Rust',
		"<b class='text-blue-500'>Blazor</b>",
		'Redis',
		"<b class='text-blue-500'>Svelte</b>",
		"<b class='text-blue-500'>SvelteKit</b>",
		'Python',
		'Django',
		'Vue',
		"<b class='text-blue-500'>Java</b>",
		"<b class='text-blue-500'>C#</b>",
		'JavaFX',
		'NGINX',
		'Docker',
		'PayPal API',
		"<b class='text-blue-500'>REST</b>",
		'GraphQL',
		'TypeORM',
		"<b class='text-blue-500'>Eloquent</b>",
		'Express',
		'Bash',
		'.NET',
		'Composer',
		'AlpineJS',
		'Blade',
		'JSX',
		'Pug',
		"<b class='text-blue-500'>Wordpress</b>",
		'Vercel',
		'SEO',
		'Netlify',
		'AWS S3',
		'Backblaze',
		'Bootstrap',
		'Fontawesome',
		'Sass',
		'.NET Core',
		'Webpack',
		"<b class='text-blue-500'>Linux</b>",
		'Grafana',
		'Prometheus'
	];
</script>

<Section title="projects">
	<span class="@xl:row-span-3">
		<Card>
			<h3 class="text-xl font-bold flex-wrap inline-flex items-center gap-3">
				<img src="/homepage/esu.png" class="h-10 rounded-full bg-black p-1" alt="esu" /> Easter System
				Universe
			</h3>
			<div class="flex flex-col pb-10">
				<p class="text-sm text-gray-800 dark:text-gray-100">
					For the past years I've worked on building and writing a universe of mysteries called ESU.
					It is now mature enough to release, with several dimensions and planets on which the
					natives speak their own unique languages.
					<br /><br />
					The universe confronts you with anomalies and alien concepts familiar enough to relate with
					as they fight for survival in an ever more technological world. Worlds collide as it becomes
					ever more apparent that the puppeteers of the world might not be who you think they are, instigating
					a battle in which you must rely on hope to make it through.
					<br /><br />
					The first written story titled "Luther's Throne" is planned to release soon and will be published
					on this website.
				</p>
			</div>
			<span class="flex items-center">
				<img src="/homepage/esubanner.png" alt="cover of act 1" />
			</span>
		</Card>
	</span>

	<span class="@2xl:row-span-2">
		<Card>
			<h3 class="text-xl font-bold flex-wrap inline-flex items-center gap-3 justify-between">
				<div class="inline-flex gap-3">⚔️ Skills</div>
			</h3>
			<p class="text-sm text-gray-800 dark:text-gray-100">
				I can work with a wide range of systems, frameworks and technologies! I have a lot of common
				knowledge around computer software and hardware that i can use to quickly adapt to new
				languages and frameworks. Here is a constantly expanding list of some of the things I am
				comfortable and like working with:
			</p>
			<div id="scroll-container" class="flex flex-wrap gap-1 w-full text-center">
				{#each words as word, key}
					<p>
						{#if key == words.length - 2}
							{@html word} and
						{:else if key == words.length - 1}
							{@html word}.
						{:else}
							{@html word},
						{/if}
					</p>
				{/each}
			</div>
			<p class="text-sm font-bold italic pt-5">... and always eager to try out new things!</p>
		</Card>
	</span>

	<span class="@xl:row-span-2 @container">
		<Card>
			<h3 class="text-xl font-bold flex-wrap inline-flex items-center gap-3 justify-between">
				<div class="inline-flex gap-3">🧑‍💻 Always open</div>
			</h3>
			<div class="h-full flex flex-col justify-between">
				<p class="text-sm text-gray-800 dark:text-gray-100">
					Beyond practical knowledge, I am also a teamplayer. I love discovering new ways and
					technologies that are proposed to me and like to share ideas and find new solutions to
					problems together.
					<br /><br />
					Most of my experiences listed have happened because people approached me with cool ideas. If
					you have something you need made and think we could provide value to each other, I would be
					glad to look at your opportunities.
				</p>
				<img src="/banner4.png" class="w-full -mb-5" alt="mid" />
			</div>
		</Card>
	</span>
</Section>
