<script>
	import Card from "./Card.svelte";

	function calculateAge(birthday) { // birthday is a date
		var ageDifMs = Date.now() - birthday;
		var ageDate = new Date(ageDifMs); // miliseconds from epoch
		return Math.abs(ageDate.getUTCFullYear() - 1970);
	}
</script>

<main class="@container container flex flex-col gap-20 relative">
	<div class="absolute top-0 -mt-40" id="about"></div>

	<section class="grid grid-cols-1 @6xl:grid-cols-4 px-5 gap-5">
		<div class="@6xl:col-span-2 p-5 flex flex-col gap-10">
			<h3 class="whitepigeon text-blue-600 font-bold text-4xl @2xl:text-6xl">About me</h3>
			<h4 class="font-normal text-lg">
				Hello, I'm Pascal, but my internet name is Mid. Nice to have you here on my website! I'm a {calculateAge(new Date("2001-10-30"))} year old programmer and tech enthusiast from The Netherlands.
				If you want to know a little more about me, here are some details. :)
			</h4>
		</div>

		<img src="/homepage/sona/pink.png" class="rounded-xl object-cover @6xl:aspect-square" alt="fursona" />

		<img src="/homepage/sona/MidFingers.jpg" class="rounded-xl object-cover @6xl:aspect-square" alt="fursona"/>

		<img src="/homepage/proxmox.png" class="rounded-xl @6xl:col-span-2" alt="proxmox environment" />

		<span class="@6xl:col-span-2 flex flex-col gap-2">
			<Card>
				<b class="text-xl">🖥 Computer tech</b>
				<p>
					I love everything tech, as was probably obvious. But it goes beyond creating software.
					I also built my own computer, and like to maintain hardware. At home I run a server rack equipped with a few Dell processing servers, doing my own research and hosting webservers, bots, multiplayer games and more using software like TrueNAS, Proxmox and Linux.
					<br/><br/>
					I daily-drive Linux as my operating systems out of a passion for FOSS and often tinker around with things like RAID and backups and getting all my favorite games to run.
				</p>
			</Card>
		</span>

		<img src="/homepage/sona/martin.png" class="rounded-xl object-cover @6xl:aspect-square" alt="fursona" />

		<img src="/homepage/sona/koffie.png" class="rounded-xl object-cover @6xl:aspect-square w-full" alt="fursona" />

		<img src="/homepage/sona/vr.png" class="@6xl:col-span-2 @6xl:row-span-3 rounded-xl object-cover h-full" alt="fursona" />

		<span class="@6xl:col-span-2">
			<Card>
				<b class="text-xl">🦊 Furry fandom</b>

				<p>
					Being a furry is an important hobby and a creative outlet for me. In the digital world I express myself as Mid, he is an anthropomorphic cat with black fur and blue hair and some unusually large whiskers, and he's my main character. You'll see Mid in some places on this website. There are also Martin the pine marten, Seffy the protogen, Koffie the rexouium and many more.
				</p>
			</Card>
		</span>

		<img src="/homepage/sona/car.jpeg" class="rounded-xl object-cover @6xl:aspect-[3/2] @6xl:col-span-2" alt="car image" />

		<img src="/homepage/drone.jpeg" class="rounded-xl object-cover @6xl:aspect-[2/1] @6xl:col-span-2" alt="drone shot" />

		<Card>
			<b class="text-xl">🛩️ Drones</b>
			<p>
				I like to go out there and make drone videos and pictures with my DJI drones, enjoying nature outdoors and capturing its beauty.
				<br/><br/>
				More recently I've made some videos for Allroadevents.nl during a few offroading trips.
			</p>
		</Card>

		<img src="/homepage/drone2.jpeg" class="rounded-xl h-full object-cover" alt="drone shot" />
	</section>
</main>