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

	<section class="grid grid-cols-4 px-5 gap-5">
		<span class="col-span-2 p-5 flex flex-col gap-10">
			<h3 class="whitepigeon text-blue-600 font-bold text-6xl">About me</h3>
			<h4 class="font-normal text-lg">
				Hello, I'm Pascal, but my internet name is Mid. Nice to have you here on my website! I'm a {calculateAge(new Date("2001-10-30"))} year old programmer and tech enthusiast from The Netherlands.
				If you want to know a little more about me, here are some details. :)
			</h4>
		</span>

		<img src="/homepage/sona/blue.png" class="rounded-xl shadow-lg object-cover aspect-square" alt="fursona" />

		<img src="/homepage/sona/MidFingers.jpg" class="rounded-xl shadow-lg object-cover aspect-square" alt="fursona"/>

		<img src="/homepage/proxmox.png" class="rounded-xl shadow-lg col-span-2" alt="proxmox environment" />

		<span class="col-span-2 flex flex-col gap-2">
			<Card>
				<b class="text-xl">Computer tech</b>
				<p>
					I love everything tech, as was probably obvious. But it goes beyond creating software.
					I also built my own computer, and like to maintain hardware. At home I run a server rack equipped with a few Dell processing servers, doing my own research and hosting webservers, bots, multiplayer games and more using software like TrueNAS, Proxmox and Linux.
				</p>
			</Card>
		</span>

		<span class="row-span-2">
			<Card>
				<b class="text-xl">Furry fandom</b>

				<p>
					Being a furry is an important hobby for me.
					<br/><br/>
					Mid is my primary fursona out of the many that I have created over the years. He is a fictional anthropomorphic cat with black fur and blue hair and some unusually large whiskers. I use Mid to represent myself with online, an image I have grown comfortable with. I commission artists to create depictions of him to bring him to life, showing and using him on places like this website.
					<br/><br/>
					On the right is also depicted Martin the Pine Marten, and on some pictures further down the website you'll find a few more sonas: Rexouium named Koffie and a protogen called Seffy.
				</p>
			</Card>
		</span>

		<img src="/homepage/sona/martin.png" class="rounded-xl shadow-lg object-cover aspect-square" alt="fursona" />

		<img src="/homepage/sona/vr.png" class="col-span-2 row-span-2 rounded-xl shadow-lg object-cover aspect-square" alt="fursona" />

		<img src="/homepage/sona/oldmid.png" class="rounded-xl shadow-lg object-cover aspect-square" alt="fursona" />

		<img src="/homepage/drone.jpeg" class="rounded-xl shadow-lg object-cover aspect-[3/2] col-span-3 row-span-2" alt="drone shot" />

		<Card>
			<b class="text-xl">Drones</b>
			<p>
				I like to go out there and make drone videos and pictures with my DJI drones, enjoying nature outdoors and capturing its beauty.
			</p>
		</Card>
	</section>
</main>