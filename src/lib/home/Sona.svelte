<script lang="ts">
	function calculateAge(birthday) { // birthday is a date
		var ageDifMs = Date.now() - birthday;
		var ageDate = new Date(ageDifMs); // miliseconds from epoch
		return Math.abs(ageDate.getUTCFullYear() - 1970);
	}
</script>

<main class="flex flex-col gap-10 lg:gap-20 container relative fira">
	<div class="absolute top-0 -mt-40" id="about"></div>

    <h3 class="flex gap-5 lg:gap-10 items-end">
        <span class="text-3xl lg:text-8xl text-blue-500 font-bold"><b>$</b>about_me</span>
		<span class="text-lg lg:text-4xl font-extrabold">== "over mij"</span>
    </h3>
    <div class="grid lg:grid-cols-5 gap-5">
		<div class="lg:col-span-3 flex flex-col gap-5">
			<div class="flex flex-wrap gap-2 bg-black bg-opacity-5 dark:bg-opacity-50 p-5">
				<p class="font-bold">
					Hey there! I'm Pascal, but my internet name is Mid. Nice to have you here on my website. I'm a {calculateAge(new Date("2001-10-30"))} year old programmer and tech enthusiast from The Netherlands.
					If you wanna know a little more about me then here are some of the things I like to do. For my past experience and portfolio visit <a href="#portfolio" class="a">my portfolio section</a>.
				</p>
			</div>

			<div class="flex flex-col gap-5 relative text-sm p-5 border-black border-opacity-10 dark:border-opacity-60 border-4">
				<span id="about-computers" class="absolute top-0 -mt-40"></span>

				<h4 class="text-lg font-bold">🖥 Computers</h4>

				<p>
					I love everything tech, as was probably obvious. But it goes beyond creating software.
					I also built my own computer, and like to maintain hardware. At home I run a server rack equipped with a few Dell processing servers, doing my own research and hosting webservers, bots, multiplayer games and more using software like TrueNAS, Proxmox and Linux.
					<br/><br/>
					I daily-drive Linux as my operating systems out of a passion for FOSS and often tinker around with things like RAID and backups and getting all my favorite games to run.
				</p>

				<img src="/homepage/proxmox.png" alt="proxmox environment" />
			</div>

			<div class="flex flex-col gap-5 relative text-sm p-5 border-black border-opacity-10 dark:border-opacity-60 border-4">
				<span id="about-furry" class="absolute top-0 -mt-40"></span>

				<h4 class="text-lg font-bold">🦊 Furry</h4>

				<p>
					Being a furry is an important hobby and a creative outlet for me. In the digital world I express myself as Mid, an anthropomorphic cat with black fur and blue hair. You'll see him in some places on this website. There are also Martin the pine marten, Seffy the protogen, Koffie the rexouium and many more.
					I am currently working on a section that details more about my fluffy life and all of my characters.
					<!-- For more about my fluffy side there's a section about it <a href="#furry" class="a">here</a>. -->
				</p>

				<div class="grid lg:grid-cols-3 gap-1">
					<img src="/homepage/sona/hai.png" alt="mid" />
					<img src="/homepage/sona/martintrans.png" alt="martin" />
					<img src="/homepage/sona/leonard.png" alt="leonard" />
				</div>
			</div>

			<div class="flex flex-col gap-5 relative text-sm p-5 border-black border-opacity-10 dark:border-opacity-60 border-4">
				<span id="about-drones" class="absolute top-0 -mt-40"></span>

				<h4 class="text-lg font-bold">🛩️ Drones</h4>

				<p>
					I like to go out there and make drone videos and pictures with my DJI drones, enjoying nature outdoors and capturing its beauty. More recently I've made some videos for Allroadevents.nl during a few offroading trips.
				</p>

				<div class="grid grid-cols-2 gap-1">
					<img src="/homepage/drone.jpeg" class="object-cover @6xl:aspect-[2/1]" alt="drone shot" />
					<img src="/homepage/drone2.jpeg" class="object-cover @6xl:aspect-[2/1]" alt="drone shot" />
				</div>
			</div>
		</div>

		<div class="lg:col-span-2 flex flex-col gap-5 overflow-x-hidden pt-10">
			<div class="flex flex-col gap-1 text-sm p-5 border-black border-opacity-20 dark:border-opacity-60 border-dashed border-4">
				<h4 class="-mt-12 lg:-mt-16 lg:text-lg bg-gray-200 dark:bg-gray-800 -mx-3 text-blue-500 overflow-x-hidden">
					<b>////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////</b><br/>
					<b>//</b> user details<br/>
					<b>////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////</b>
				</h4>

				<span class="h-2"></span>
				<span>&lt;age&gt; <bold class="font-bold text-base">{calculateAge(new Date("2001-10-30"))}</bold> &lt;/age&gt;</span>
				<span>&lt;pronouns&gt; <bold class="font-bold lg:text-base">he / him</bold> &lt;/pronouns&gt;</span>
				<span>&lt;profession&gt; <bold class="font-bold lg:text-base">software engineer</bold> &lt;/profession&gt;</span>
				<span>&lt;nationality&gt; <bold class="font-bold lg:text-base">dutch 🇳🇱</bold> &lt;/nationality&gt;</span>
				<span class="h-5"></span>
				<span>&lt;hobby&gt; <bold class="font-bold lg:text-base">coding</bold> &lt;/hobby&gt;</span>
				<span>&lt;hobby&gt; <bold class="font-bold lg:text-base">gaming</bold> &lt;/hobby&gt;</span>
				<a href="#about-furry" class="group">&lt;hobby&gt; <bold class="font-bold lg:text-base group-hover:underline text-[#2563EB]">furry</bold> &lt;/hobby&gt;</a>
				<span class="h-5"></span>
				<span>&lt;favorite&gt; <bold class="font-bold lg:text-base">coffee</bold> &lt;/favorite&gt;</span>
				<a href="#about-computers" class="group">&lt;favorite&gt; <bold class="font-bold lg:text-base group-hover:underline text-[#2563EB]">computers</bold> &lt;/favorite&gt;</a>
				<a href="#about-drones" class="group">&lt;favorite&gt; <bold class="font-bold lg:text-base group-hover:underline text-[#2563EB]">drones</bold> &lt;/favorite&gt;</a>
				<span>&lt;favorite&gt; <bold class="font-bold lg:text-base">3D printing</bold> &lt;/favorite&gt;</span>
				<span class="h-5"></span>

				<span>&lt;me credits="Digitalizer"&gt;</span>
				<img src="/homepage/sona/peaceful.png" alt="fursona" />
				<span>&lt;/me&gt;</span>
			</div>
		</div>
    </div>
</main>