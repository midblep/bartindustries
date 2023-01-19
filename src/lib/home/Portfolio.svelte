<script>

	import Card from "./Card.svelte";

    const words1 = [
		"JavaScript",
		"<b>TypeScript</b>",
		"MySQL",
		"<b>Laravel</b>",
		"PHP",
		"Livewire",
		"<b>NestJS</b>",
		"NodeJS",
		"Unity",
		"Substance Painter",
		"Blender",
		"PostgreSQL",
		"TailwindCSS",
		"Redis",
		"<b>Svelte</b>",
	];

    const words2 = [
		"<b>SvelteKit</b>",
		"Python",
		"Django",
		"Vue",
		"<b>Java</b>",
		"JavaFX",
		"NGINX",
		"Docker",
		"<b>REST</b>",
		"GraphQL",
		"TypeORM",
		"<b>Eloquent</b>",
		"Express",
		"Composer",
        "Bash",
	];

    const words3 = [
		"Composer",
		"AlpineJS",
		"Blade",
		"JSX",
		"Pug",
		"<b>Wordpress</b>",
		"Vercel",
		"Netlify",
		"AWS S3",
		"Backblaze",
        "Bootstrap",
		"Fontawesome",
		"Sass",
		"Webpack",
        "<b>Linux</b>",
	];

</script>
<section class="pb-20 z-20 relative">
    <div class="absolute top-0 -mt-40" id="portfolio"></div>
    <div class="@container container px-5 flex flex-col gap-10 justify-center">
        <div class="flex flex-col gap-5">
            <h2 class="font-bold text-4xl">Portfolio</h2>
            <p class="text-lg">
                Explore some of my past works, experiences, skills and jobs
            </p>
        </div>

        <div class="grid grid-cols-1 @2xl:grid-cols-2 @6xl:grid-cols-3 gap-5 justify-between">
            <span>
                <Card
                    buttonHref="https://flamesoftware.net/"
                    buttonText="🔥 Visit early website"
                >
                    <h3
                        class="text-xl font-bold flex-wrap inline-flex items-center gap-3 justify-between"
                    >
                        <div class="inline-flex gap-3">
                            <img
                                src="/logo.png"
                                class="h-8"
                                alt="flame"
                            /> Flame Software
                        </div>
                        <span class="text-sm font-light">2022 and ongoing</span>
                    </h3>
                    <p class="text-sm text-gray-800 dark:text-gray-100">
                        Flame Software is a Software-as-a-Service company that is developing a new communications app
                        that intends to revolutionize the way we talk and socialize online.
                        Our mission is to make the net more connected, more privacy focused, and more healthy for your mental wellbeing.
                        <br/><br/>
                        We are currently in our early development stage, where I work as the CTO to lay down the groundworks
                        for this new app, which will be built using a combination of languages like Rust and TypeScript.
                    </p>
                </Card>
            </span>

            <span class="@2xl:col-span-1 row-span-2 @container">
                <Card
                    buttonHref="https://beta.puppypride.social"
                    buttonText="🌐 Visit the Puppy Pride public beta"
                >
                    <div class="grid @xl:grid-cols-2 grid-cols-1 gap-5">
                        <span class="flex flex-col gap-5">
                            <h3
                                class="text-xl flex-wrap font-bold inline-flex items-center gap-3 justify-between"
                            >
                                <div class="inline-flex gap-3">
                                    <img
                                        src="/puppypride.png"
                                        class="h-8"
                                        alt="puppypride"
                                    /> Puppy Pride
                                </div>
                                <span class="text-sm font-light">2021 and ongoing</span>
                            </h3>
                            <p class="text-sm text-gray-800 dark:text-gray-100">
                                I am the core developer of the new Puppy Pride social
                                network since January 2021, and continue to support and expand
                                it to this day.
                                <br/><br/>
                                The site was built from the ground up
                                using the TALL stack in PHP (Tailwindcss, Alpine, Livewire and Laravel)
                                and gave me a lot of experience working with not just PHP and every single feature within the Laravel framework and all of the ecosystem.
                                <br/><br/>
                                In the project I have gone through a large array of different kinds of features and business processes ranging from Dockerization to documentation and load testing to backup storage.
                                <br /><br />
                                <b>Warning:</b> Puppy Pride is an adult themed social network for people into petplay based in England. Explicit imagry may be present.
                                Due to the site's content, logging in is required to view the majority of its features.
                            </p>
                        </span>
                        <span class="flex items-center">
                            <img src="/homepage/pp.png" alt="puppypride profile page" />
                        </span>
                    </div>
                </Card>
            </span>

            <Card
                buttonHref="https://saxion.nl"
                buttonText="🎓 Open Website"
            >
                <h3
                    class="text-xl font-bold flex-wrap inline-flex items-center gap-3 justify-between"
                >
                    <div class="inline-flex gap-3">
                        <img
                            src="/saxion.png"
                            class="h-8 rounded-full"
                            alt="puppypride"
                        /> Saxion University
                    </div>
                    <span class="text-sm font-light">2020 to 2024</span>
                </h3>
                <p class="text-sm text-gray-800 dark:text-gray-100">
                    I am a year 3 student at the Saxion University of Applied Sciences in The Netherlands majoring in Software Engineering. The study keeps me plenty busy, but now I am combining the study with a Minor Entrepeneurship to build a SaaS product at my new company Flame Software.
                    <br/><br/>
                    Even though the university has taught me much about the business life and how to professionally work in teams, nearly all my programming knowledge is self taught at home.
                </p>
            </Card>

            <span>
                <Card
                    buttonHref="https://dubbelnull.com/showcase"
                    buttonText="➡️ View DubbelNull showcase"
                >
                    <h3
                        class="text-xl font-bold flex-wrap inline-flex items-center gap-3 justify-between"
                    >
                        <div class="inline-flex gap-3">
                            <img
                                src="/dubbelnull.png"
                                class="h-10 -my-1 -ml-1"
                                alt="dubbelnull"
                            /> DubbelNull
                        </div>
                        <span class="text-sm font-light">2020 and ongoing</span>
                    </h3>
                    <p class="text-sm text-gray-800 dark:text-gray-100">
                        DubbelNull is a family business that does internet based development for small and medium sized companies,
                        such as creating websites, manage hosting, advice and other similar things.
                        I have made several websites for clients under this name, and you can find more of my works on the DubbelNull website.
                    </p>
                </Card>
            </span>

            <span class="@6xl:row-span-2">
                <Card
                >
                    <h3
                        class="text-xl font-bold flex-wrap inline-flex items-center gap-3 justify-between"
                    >
                        <div class="inline-flex gap-3">
                            🧑‍💻
                            Player Stats
                        </div>
                    </h3>
                    <p class="text-sm text-gray-800 dark:text-gray-100">
                        Beyond practical knowledge, I am also a teamplayer. I love discovering new ways and technologies that are proposed to me and like to share ideas and find new solutions to problems together.
                        <br/><br/>
                        In my study at Saxion I have done many projects, including ones for large companies such as AgroVision and Witteveen+Bos, where we worked in teams of people with different backgrounds to create a complete product.
                    </p>
                    <img src="/banner4.png" class="w-full -mb-10" alt="mid"/>
                </Card>
            </span>

            <span class="col-span-1 @6xl:row-span-2">
                <Card
                >
                    <h3
                        class="text-xl font-bold flex-wrap inline-flex items-center gap-3 justify-between"
                    >
                        <div class="inline-flex gap-3">
                            🏢
                            Internships
                        </div>
                    </h3>

                    <div class="flex flex-col gap-2">
                        <span class="flex justify-between items-end"><b class="text-lg">Witteveen+Bos</b><p class="text-sm">2022</p></span>
                        <p class="text-sm">Witteveen+Bos is a major worldwide agricultural software company. During my internship me and my team developed a generic authentication system in Django that would be used as a customized plug-in template for new projects at the company.</p>
                    </div>

                    <div class="flex flex-col gap-2">
                        <span class="flex justify-between items-end"><b class="text-lg">AgroVision</b><p class="text-sm">2021</p></span>
                        <p class="text-sm">AgroVision is a Dutch software company for farmers. During my internship I worked on an app that generates reports about CO2 usage on farms and informs the farmer on how to reduce thecir emmissions.</p>
                    </div>

                    <div class="flex flex-col gap-2">
                        <span class="flex justify-between items-end"><b class="text-lg">SuiteSeven</b><p class="text-sm">2019</p></span>
                        <p class="text-sm">SuitSeven is a local webdevelopment studio. During my internship I worked on the design for a client's website.</p>
                    </div>

                    <div class="flex flex-col gap-2">
                        <span class="flex justify-between items-end"><b class="text-lg">Profity</b><p class="text-sm">2018</p></span>
                        <p class="text-sm">Profity is a software ccompany creating ERP suites for the Dutch steel industry. During my internship I learned the dynamics of a team and the different processes involved in software development.</p>
                    </div>
                </Card>
            </span>

            <span class="col-span-1 @6xl:row-span-2">
                <Card
                >
                    <h3
                        class="text-xl font-bold flex-wrap inline-flex items-center gap-3 justify-between"
                    >
                        <div class="inline-flex gap-3">
                            ⚔️
                            Skills
                        </div>
                    </h3>
                    <p class="ttext-gray-800 dark:text-gray-100">
                        I can work with anything and love to try out new things and technologies! I have a lot of common knowledge around computer software and hardware and can adapt to anything that may be needed, but here is a constantly growing list of some of my most used things:
                    </p>
                    <div id="scroll-container" class="flex gap-1 w-full justify-between text-center text-sm">
                        <div class="inline-flex flex-col gap-1">
                            {#each words1 as word}
                                <p>{@html word}</p>
                            {/each}
                        </div>
                        <div class="inline-flex flex-col gap-1">
                            {#each words2 as word}
                                <p>{@html word}</p>
                            {/each}
                        </div>
                        <div class="inline-flex flex-col gap-1">
                            {#each words3 as word}
                                <p>{@html word}</p>
                            {/each}
                        </div>
                    </div>
                    <i class="text-gray-800 dark:text-gray-100 text-sm">
                        Specialties marked in bold.
                    </i>
                </Card>
            </span>
        </div>
    </div>
</section>