<script>
	function calculateAge(birthday) { // birthday is a date
		var ageDifMs = Date.now() - birthday;
		var ageDate = new Date(ageDifMs); // miliseconds from epoch
		return Math.abs(ageDate.getUTCFullYear() - 1970);
	}
</script>

<main class="@container container flex flex-col gap-20 relative">
	<div class="absolute top-0 -mt-40" id="about"></div>

	<section class="flex flex-col px-5 justify-between gap-10 lg:gap-20">
		<article class="flex w-1/2 items-center text-center mx-auto flex-col col-span-2 gap-10">
			<h3 class="whitepigeon text-blue-600 font-bold text-6xl">About me</h3>
			<h4 class="font-normal text-lg">
				Hello, I'm Pascal, but my internet name is Mid. Nice to have you here on my website! I'm a {calculateAge(new Date("2001-10-30"))} year old programmer and tech enthusiast from The Netherlands.
				If you want to know a little more about me, here are some details. :)
			</h4>
		</article>

		<article class="grid grid-cols-3 bg-black bg-opacity-10 gap-[3px]">
			<div class="bg-gray-100 dark:bg-gray-900 p-5 flex flex-col gap-10">
				<h4 class="whitepigeon text-blue-600 font-bold text-2xl text-center">Experience</h4>

				<div class="h-[3px] bg-black bg-opacity-10"></div>

				<div class="flex flex-col gap-2">
					<span class="flex justify-between items-end"><b class="text-xl">Saxion University</b><p class="text-sm">2020 to 2024</p></span>
					<p>HBO-ICT / Bachelor Computer Science</p>
				</div>

				<div class="flex flex-col gap-2">
					<span class="flex justify-between items-end"><b class="text-xl">Self taught</b><p class="text-sm">2016 and ongoing</p></span>
					<p>Self taught</p>
				</div>

				<div class="flex flex-col gap-2">
					<span class="flex justify-between items-end"><b class="text-xl">PuppyPride Developer</b><p class="text-sm">2020 and ongoing</p></span>
					<p>Self taught</p>
				</div>

				<div class="flex flex-col gap-2">
					<span class="flex justify-between items-end"><b class="text-xl">Internship Witteveen+Bos</b><p class="text-sm">2022</p></span>
					<p>Witteveen+Bos is a major worldwide agricultural software company. During my internship me and my team developed a generic authentication system in Django that would be used as a customized plug-in template for new projects at the company.</p>
				</div>

				<div class="flex flex-col gap-2">
					<span class="flex justify-between items-end"><b class="text-xl">Internship AgroVision</b><p class="text-sm">2021</p></span>
					<p>AgroVision is a Dutch software company for farmers. During my internship I worked on an app that generates reports about CO2 usage on farms and informs the farmer on how to reduce their emmissions.</p>
				</div>

				<div class="flex flex-col gap-2">
					<span class="flex justify-between items-end"><b class="text-xl">Internship SuiteSeven</b><p class="text-sm">2019</p></span>
					<p>SuitSeven is a local webdevelopment studio. During my internship I worked on the design for a client's website.</p>
				</div>

				<div class="flex flex-col gap-2">
					<span class="flex justify-between items-end"><b class="text-xl">Internship Profity</b><p class="text-sm">2018</p></span>
					<p>Profity is a software ccompany creating ERP suites for the Dutch steel industry. During my internship I learned the dynamics of a team and the different processes involved in software development.</p>
				</div>
			</div>

			<div class="bg-gray-100 dark:bg-gray-900 p-5 flex flex-col gap-10">
				<h4 class="whitepigeon text-blue-600 font-bold text-2xl text-center">Hobbies</h4>

				<div class="h-[3px] bg-black bg-opacity-10"></div>

				<div class="flex flex-col gap-2">
					<b class="text-xl">Computer tech</b>
					<p>
						I love everything tech, as was probably obvious. But it goes beyond creating software.
						I also built my own computer, and like to maintain hardware. At home I run a server rack equipped with a few Dell processing servers, doing my own research and hosting webservers, bots, multiplayer games and more using software like TrueNAS, Proxmox and Linux.
					</p>
					<img src="/homepage/proxmox.png" class="rounded shadow-lg" alt="proxmox environment" />
				</div>

				<div class="flex flex-col gap-2">
					<b class="text-xl">Drones</b>
					<p>
						I like to go out there and make drone videos and pictures with my DJI drones, enjoying nature outdoors and capturing its beauty.
					</p>
				</div>

				<div class="flex flex-col gap-2">
					<b class="text-xl">Furry fandom</b>

					<p>
						Being a furry is an important hobby for me. Mid is my primary fursona out of the many that I have created over the years. He is a fictional anthropomorphic cat with black fur and blue hair and some unusually large whiskers. I use Mid to represent myself with online, an image I have grown comfortable with. I commission artists to create depictions of him to bring him to life, showing and using him on places like this website.
					</p>

					<span class="grid grid-cols-3 gap-1">
						<img src="/homepage/sona/blue.png" class="rounded shadow-lg object-cover aspect-square" alt="fursona" />
						<img src="/homepage/sona/pink.png" class="rounded shadow-lg object-cover aspect-square" alt="fursona"/>
						<img src="/homepage/sona/MidFingers.jpg" class="rounded shadow-lg object-cover aspect-square" alt="fursona"/>
					</span>
				</div>
			</div>

			<div class="bg-gray-100 dark:bg-gray-900 p-5 flex flex-col gap-10">
				<h4 class="whitepigeon text-blue-600 font-bold text-2xl text-center">Details</h4>

				<div class="h-[3px] bg-black bg-opacity-10"></div>

				<div class="flex flex-col gap-2">
					<b class="text-xl">Find my details</b>
					<p>
						If you want to visit my social profiles or want to reach out to me, you can do so via the links in my <a href="#contact" class="a">contact form</a> or by emailing me directly at <a class="a" href="mailto:pascalvanginkel@outlook.com">pascalvanginkel@outlook.com</a>.
					</p>
				</div>

				<div class="flex flex-col gap-2">
					<b class="text-xl">Interested in my skills?</b>
					<p>
						I am open for work opportunities and love to work in teams as well as alone. I can do any kind of web related development. Just shoot me an email or contact me on any of my socials.
					</p>
				</div>
			</div>

		</article>
	</section>
</main>