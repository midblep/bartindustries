<script lang="ts">
	function calculateAge(birthday) {
		// birthday is a date
		var ageDifMs = Date.now() - birthday;
		var ageDate = new Date(ageDifMs); // miliseconds from epoch
		return Math.abs(ageDate.getUTCFullYear() - 1970);
	}
</script>

<main class="flex flex-col gap-10 lg:gap-20 container relative fira">
	<div class="absolute top-0 -mt-40" id="about" />

	<h3 class="flex gap-5 lg:gap-10 items-end">
		<span class="text-3xl lg:text-8xl text-blue-500 font-bold"><b>$</b>about_me</span>
		<span class="text-lg lg:text-4xl font-extrabold">== "over mij"</span>
	</h3>
	<div class="grid lg:grid-cols-5 gap-5">
		<div class="lg:col-span-3 flex flex-col gap-5">
			<div class="flex flex-wrap gap-2 bg-blue-500 bg-opacity-20 dark:bg-opacity-40 p-5">
				<p class="font-bold">
					Hey there! I'm Pascal, but my internet name is Mid. Nice to have you here on my website.
					I'm a {calculateAge(new Date('2001-10-30'))} year old programmer and tech enthusiast from The
					Netherlands. If you wanna know a little more about me then here are some of the things I like
					to do. For my past experience and portfolio visit
					<a href="/portfolio" class="a">my portfolio section</a>.
				</p>
			</div>

			<div
				class="flex flex-col gap-5 relative text-sm p-5 border-gray-400 border-opacity-20 dark:border-opacity-20 border-4"
			>
				<span id="about-computers" class="absolute top-0 -mt-40" />

				<h4 class="text-lg font-bold">🖥 Computers</h4>

				<p>
					I love everything tech, as was probably obvious. But it goes beyond creating software. I
					also built my own computer, and like to maintain hardware. At home I run a server rack
					equipped with a few Dell processing servers, doing my own research and hosting webservers,
					bots, multiplayer games and more using software like TrueNAS, Proxmox and Linux.
					<br /><br />
					I daily-drive Linux as my operating systems out of a passion for FOSS and often tinker around
					with things like RAID and backups and getting all my favorite games to run.
				</p>

				<img src="/homepage/proxmox.png" alt="proxmox environment" />
			</div>

			<div
				class="flex flex-col gap-5 relative text-sm p-5 border-gray-400 border-opacity-20 dark:border-opacity-20 border-4"
			>
				<span id="about-furry" class="absolute top-0 -mt-40" />

				<h4 class="text-lg font-bold">🦊 Furry</h4>

				<p>
					Being a furry is an important hobby and a creative outlet for me. In the digital world I
					express myself as Mid, an anthropomorphic cat with black fur and blue hair. You'll see him
					in some places on this website. There are also Martin the pine marten, Seffy the protogen,
					Koffie the rexouium and many more. I am currently working on a section that details more
					about my fluffy life and all of my characters.
					<!-- For more about my fluffy side there's a section about it <a href="#furry" class="a">here</a>. -->
				</p>

				<div class="grid lg:grid-cols-3 gap-1">
					<img src="/homepage/sona/hai.png" alt="mid" />
					<img src="/homepage/sona/martintrans.png" alt="martin" />
					<img src="/homepage/sona/leonard.png" alt="leonard" />
				</div>
			</div>

			<div
				class="flex flex-col gap-5 relative text-sm p-5 border-gray-400 border-opacity-20 dark:border-opacity-20 border-4"
			>
				<span id="about-drones" class="absolute top-0 -mt-40" />

				<h4 class="text-lg font-bold">🛩️ Drones</h4>

				<p>
					I like to go out there and make drone videos and pictures with my DJI drones, enjoying
					nature outdoors and capturing its beauty. More recently I've made some videos for
					Allroadevents.nl during a few offroading trips.
				</p>

				<div class="grid grid-cols-2 gap-1">
					<img src="/homepage/drone.jpeg" class="object-cover @6xl:aspect-[2/1]" alt="drone shot" />
					<img
						src="/homepage/drone2.jpeg"
						class="object-cover @6xl:aspect-[2/1]"
						alt="drone shot"
					/>
				</div>
			</div>

			<div
				class="flex flex-col gap-5 relative text-sm p-5 border-gray-400 border-opacity-20 dark:border-opacity-20 border-4"
			>
				<span id="about-coding" class="absolute top-0 -mt-40" />

				<h4 class="text-lg font-bold">🖥️ Coding</h4>

				<p>
					I have an inherent distate to the endless tools, buildsteps and abstraction layers of the
					modern world. Especially prelevant in fields like front-end webdevelopment. My philosophy
					on the matter can not be explained better than by Emma Essex, creator of Halley Labs, who
					wrote the following on their website:
				</p>

				<div class="bg-neutral-200 dark:bg-neutral-900 p-5 flex gap-5">
					<p class="text-6xl font-extrabold">"</p>
					<blockquote cite="https://msx.horse/about.php">
						as time has gone on, i have become fairly exhausted with the unnecesary bloat in all
						things. my desire to better optimize, to work with fewer layers of abstraction, and so
						on, continue to lead me back to a strong desire for utilitarian design. there is a
						common misconception that stripping things to their roots robs them of personality, or
						soul. this is naturally catastrophically untrue. it's just that when you get to that
						point, the soul in all things is so bare that you have no choice but to really try to
						understand it and interface with it. everything that goes on top is very cute and fun,
						but attire is primarily cultural shorthand. as a people, we are better than needing
						shorthand to understand or appreciate the soul in things. i encourage everybody to
						search for the inherent soul in all things.
					</blockquote>
				</div>

				<p>
					I love working with a limited set of tools and create my own way of doing things. Per
					example, working around the limitations of chat-based bots on Discord to build out my own
					UI and functionalities. Unusual but robus solutions motivate me to continue.
				</p>
			</div>
		</div>

		<div class="lg:col-span-2 flex flex-col gap-5 overflow-x-hidden pt-10">
			<div
				class="flex flex-col gap-1 text-sm p-5 border-gray-400 border-opacity-20 dark:border-opacity-20 border-dashed border-4"
			>
				<h4
					class="-mt-12 lg:-mt-16 lg:text-lg bg-white dark:bg-black -mx-3 text-blue-500 overflow-x-hidden"
				>
					<b
						>////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////</b
					><br />
					<b>//</b> user details<br />
					<b
						>////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////</b
					>
				</h4>

				<span class="h-2" />
				<span
					>&lt;age&gt; <bold class="font-bold text-base"
						>{calculateAge(new Date('2001-10-30'))}</bold
					> &lt;/age&gt;</span
				>
				<span
					>&lt;pronouns&gt; <bold class="font-bold lg:text-base">he / him</bold> &lt;/pronouns&gt;</span
				>
				<span
					>&lt;profession&gt; <bold class="font-bold lg:text-base">software engineer</bold> &lt;/profession&gt;</span
				>
				<span
					>&lt;nationality&gt; <bold class="font-bold lg:text-base">dutch 🇳🇱</bold> &lt;/nationality&gt;</span
				>
				<span class="h-5" />
				<a href="#about-coding" class="group"
					>&lt;hobby&gt; <bold class="font-bold lg:text-base group-hover:underline text-[#2563EB]"
						>coding</bold
					> &lt;/hobby&gt;</a
				>
				<span>&lt;hobby&gt; <bold class="font-bold lg:text-base">gaming</bold> &lt;/hobby&gt;</span>
				<a href="#about-furry" class="group"
					>&lt;hobby&gt; <bold class="font-bold lg:text-base group-hover:underline text-[#2563EB]"
						>furry</bold
					> &lt;/hobby&gt;</a
				>
				<span class="h-5" />
				<span
					>&lt;favorite&gt; <bold class="font-bold lg:text-base">coffee</bold> &lt;/favorite&gt;</span
				>
				<a href="#about-computers" class="group"
					>&lt;favorite&gt; <bold
						class="font-bold lg:text-base group-hover:underline text-[#2563EB]">computers</bold
					> &lt;/favorite&gt;</a
				>
				<a href="#about-drones" class="group"
					>&lt;favorite&gt; <bold
						class="font-bold lg:text-base group-hover:underline text-[#2563EB]">drones</bold
					> &lt;/favorite&gt;</a
				>
				<span
					>&lt;favorite&gt; <bold class="font-bold lg:text-base">3D printing</bold> &lt;/favorite&gt;</span
				>
				<span class="h-5" />

				<span>&lt;me credits="Digitalizer"&gt;</span>
				<img src="/homepage/sona/peaceful.png" alt="fursona" />
				<span>&lt;/me&gt;</span>
			</div>
		</div>
	</div>
</main>
