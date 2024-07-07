<script>
	import Card from '$lib/home/Card.svelte';
	import Section from '$lib/portfolio/Section.svelte';
</script>

<Section title="programming">
	<span class="@2xl:row-span-3">
		<Card>
			<h3 class="text-xl font-bold flex-wrap inline-flex items-center gap-3 justify-between">
				<div class="inline-flex gap-3">
					<img src="/saxion.png" class="h-8 rounded-full" alt="puppypride" /> Saxion University
				</div>
				<span class="text-sm font-light">2020 to 2024</span>
			</h3>
			<p class="text-sm text-gray-800 dark:text-gray-100">
				I obtained a Bachelor of Science majoring in Software Engineering at the Saxion University
				of Applied Sciences in The Netherlands. During the study I've done a multitude of projects
				for clients and worked in teams comprised of people with lots of different backgrounds. I
				have mostly worked with Java, JavaScript, Python and C#, and also have professional and
				practical skills with many sysadmin tasks.
			</p>
			<img src="homepage/sona/MidFingers.jpg" class="w-full rounded-xl" />
		</Card>
	</span>

	<Card>
		<h3 class="text-xl font-bold flex-wrap inline-flex items-center gap-3 justify-between">
			<div class="inline-flex gap-3">Agro IT - Graduation Project</div>
			<span class="text-sm font-light">2024</span>
		</h3>
		<p class="text-sm text-gray-800 dark:text-gray-100">
			I also did my graduation project at Agro IT, where I built a complete system around employee
			management, time tracking and employee payouts that integrates with existing infrastructure
			and streamline the administrative process within the company as well as for customers.
		</p>
	</Card>

	<Card>
		<h3 class="text-xl font-bold flex-wrap inline-flex items-center gap-3 justify-between">
			<div class="inline-flex gap-3">Xential - University Project</div>
			<span class="text-sm font-light">2023</span>
		</h3>
		<p class="text-sm text-gray-800 dark:text-gray-100">// insert text here</p>
	</Card>

	<Card>
		<h3 class="text-xl font-bold flex-wrap inline-flex items-center gap-3 justify-between">
			<div class="inline-flex gap-3">Agro IT - Internship Project</div>
			<span class="text-sm font-light">2023</span>
		</h3>
		<p class="text-sm text-gray-800 dark:text-gray-100">
			Agro IT is an agricultural software company in The Netherlands. In my 5 month long internship
			I developed a new modern web app that connected to their existing APIs and made it possible
			for customers to use their systems from anywhere.
		</p>
	</Card>

	<Card>
		<h3 class="text-xl font-bold flex-wrap inline-flex items-center gap-3 justify-between">
			<div class="inline-flex gap-3">Witteveen+Bos - University Project</div>
			<span class="text-sm font-light">2022</span>
		</h3>
		<p class="text-sm text-gray-800 dark:text-gray-100">
			Witteveen+Bos is a major worldwide agricultural software company. During my internship me and
			my team developed a generic authentication system in Django that would be used as a customized
			plug-in template for new projects at the company.
		</p>
	</Card>

	<Card>
		<h3 class="text-xl font-bold flex-wrap inline-flex items-center gap-3 justify-between">
			<div class="inline-flex gap-3">AgroVision - University Project</div>
			<span class="text-sm font-light">2021</span>
		</h3>
		<p class="text-sm text-gray-800 dark:text-gray-100">
			AgroVision is a Dutch software company for farmers. During my internship I worked on an app
			that generates reports about CO2 usage on farms and informs the farmer on how to reduce thecir
			emmissions.
		</p>
	</Card>

	<Card>
		<h3 class="text-xl font-bold flex-wrap inline-flex items-center gap-3 justify-between">
			<div class="inline-flex gap-3">SuiteSeven - Internship</div>
			<span class="text-sm font-light">2019</span>
		</h3>
		<p class="text-sm text-gray-800 dark:text-gray-100">
			SuitSeven is a local webdevelopment studio. During my internship I worked on the design for a
			client's website.
		</p>
	</Card>

	<Card>
		<h3 class="text-xl font-bold flex-wrap inline-flex items-center gap-3 justify-between">
			<div class="inline-flex gap-3">Profity - Internship</div>
			<span class="text-sm font-light">2018</span>
		</h3>
		<p class="text-sm text-gray-800 dark:text-gray-100">
			Profity is a software company creating ERP suites for the Dutch steel industry. During my
			internship I learned the dynamics of a team and the different processes involved in software
			development.
		</p>
	</Card>
</Section>
