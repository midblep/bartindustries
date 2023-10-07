<script>

	import Card from "./Card.svelte";

    const words = [
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
        "Rust",
        "<b>Blazor</b>",
		"Redis",
		"<b>Svelte</b>",
        "<b>SvelteKit</b>",
		"Python",
		"Django",
		"Vue",
		"<b>Java</b>",
        "<b>C#</b>",
		"JavaFX",
		"NGINX",
		"Docker",
        "PayPal API",
		"<b>REST</b>",
		"GraphQL",
		"TypeORM",
		"<b>Eloquent</b>",
		"Express",
        "Bash",
        ".NET",
        "Composer",
		"AlpineJS",
		"Blade",
		"JSX",
		"Pug",
		"<b>Wordpress</b>",
		"Vercel",
        "SEO",
		"Netlify",
		"AWS S3",
		"Backblaze",
        "Bootstrap",
		"Fontawesome",
		"Sass",
        ".NET Core",
		"Webpack",
        "<b>Linux</b>",
	];
</script>

<section class="relative">
    <div class="@container flex flex-col justify-center">
        <div class="flex flex-col gap-2 whitepigeon text-white text-center bg-[#3A53FF]">
            <h2 class="font-bold text-4xl lg:text-8xl">Portfolio</h2>
            <p class="lg:text-lg">A collection of some of the projects and experiences I am most proud of</p>
        </div>

        <div class="container px-5 my-5 lg:my-20 grid grid-cols-1 @2xl:grid-cols-2 @6xl:grid-cols-3 gap-5 justify-between">
            <div class="absolute top-0 -mt-40" id="portfolio"></div>

            <Card>
                <h3
                    class="text-xl font-bold flex-wrap inline-flex items-center gap-3 justify-between"
                >
                    <div class="inline-flex gap-3">
                        <img
                            src="/agroit.png"
                            class="h-8"
                            alt="puppypride"
                        /> Agro IT
                    </div>
                    <span class="text-sm font-light">2023 and ongoing</span>
                </h3>
                <p class="text-sm text-gray-800 dark:text-gray-100">
                    During my study's internship at Agro IT I developed a beautiful and user friendly web environment for their RVDM suite by connecting it to their newly made API and Identity Server.<br/><br/>
                    The company liked what I had built, and wanted to expand upon it, so they hired me after the internship so I can transform the internship's prototype to something we can roll out and release to clients.<br/><br/>
                    After that I am expected to build other modules of Agro IT's products into web environments so that their clients will eventually no longer need the older application-style programs.
                </p>
            </Card>

            <span class="@xl:row-span-2">
                <Card
                    buttonHref="https://puppypride.social"
                    buttonText="🌐 Visit the Puppy Pride social network"
                >
                    <div class="flex flex-col gap-5">
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
                                I am the lead developer of Puppy Pride since January of 2021. I develop and maintain Puppy Pride's social network, servers and events.
                                <br/><br/>
                                The site was built from the ground up using the TALL (Laravel) stack and sports a large array of features such as blogging, albums, subscriptions, events, instant messaging, customizable profiles, feeds, groups and advanced group management, and so on.
                                <br/><br/>
                                Furthermore I have gotten experience with a lot of real concepts such as advanced dockerization, deployment, load balancing, caching, server maintenance and more.
                                <br /><br />
                                <b>Warning:</b> Puppy Pride is an adult themed social network for people into petplay based in England. Explicit imagery may be present.
                                Due to the site's content, logging in is required to view the majority of its features.
                            </p>
                        </span>
                        <span class="flex items-center">
                            <img src="/homepage/pp.png" alt="puppypride profile page" />
                        </span>
                    </div>
                </Card>
            </span>

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

            <span class="@xl:row-span-2 @container">
                <Card>
                    <h3
                        class="text-xl font-bold flex-wrap inline-flex items-center gap-3 justify-between"
                    >
                        <div class="inline-flex gap-3">
                            🏢
                            Internships
                        </div>
                    </h3>

                    <div class="flex flex-col gap-2">
                        <span class="flex justify-between items-end"><b class="text-lg">Agro IT</b><p class="text-sm">2023</p></span>
                        <p class="text-sm text-gray-800 dark:text-gray-100">Agro IT is an agricultural software company in The Netherlands. In my 5 month long internship I developed a new modern web app that connected to their existing APIs and made it possible for customers to use their systems from anywhere.</p>
                    </div>

                    <div class="flex flex-col gap-2">
                        <span class="flex justify-between items-end"><b class="text-lg">Witteveen+Bos</b><p class="text-sm">2022</p></span>
                        <p class="text-sm text-gray-800 dark:text-gray-100">Witteveen+Bos is a major worldwide agricultural software company. During my internship me and my team developed a generic authentication system in Django that would be used as a customized plug-in template for new projects at the company.</p>
                    </div>

                    <div class="flex flex-col gap-2">
                        <span class="flex justify-between items-end"><b class="text-lg">AgroVision</b><p class="text-sm">2021</p></span>
                        <p class="text-sm text-gray-800 dark:text-gray-100">AgroVision is a Dutch software company for farmers. During my internship I worked on an app that generates reports about CO2 usage on farms and informs the farmer on how to reduce thecir emmissions.</p>
                    </div>

                    <div class="flex flex-col gap-2">
                        <span class="flex justify-between items-end"><b class="text-lg">SuiteSeven</b><p class="text-sm">2019</p></span>
                        <p class="text-sm text-gray-800 dark:text-gray-100">SuitSeven is a local webdevelopment studio. During my internship I worked on the design for a client's website.</p>
                    </div>

                    <div class="flex flex-col gap-2">
                        <span class="flex justify-between items-end"><b class="text-lg">Profity</b><p class="text-sm">2018</p></span>
                        <p class="text-sm text-gray-800 dark:text-gray-100">Profity is a software ccompany creating ERP suites for the Dutch steel industry. During my internship I learned the dynamics of a team and the different processes involved in software development.</p>
                    </div>
                </Card>
            </span>

            <span class="@xl:row-span-2 @container">
                <Card>
                    <h3
                        class="text-xl font-bold flex-wrap inline-flex items-center gap-3 justify-between"
                    >
                        <div class="inline-flex gap-3">
                            🧑‍💻
                            Always open
                        </div>
                    </h3>
                    <p class="text-sm text-gray-800 dark:text-gray-100">
                        Beyond practical knowledge, I am also a teamplayer. I love discovering new ways and technologies that are proposed to me and like to share ideas and find new solutions to problems together.
                        <br/><br/>
                        Most of my experiences listed have happened because people approached me with cool ideas. If you have something you need made and think we could provide value to each other, I would be glad to look at your opportunities.
                    </p>
                    <img src="/banner4.png" class="w-full -mb-5" alt="mid"/>
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
                    I am a year 4 student at the Saxion University of Applied Sciences in The Netherlands majoring in Software Engineering and expected to graduate in 2024.
                    During the study I've done numerous projects for real clients and worked in teams comprised of people with many different backgrounds.
                    Most of my programming knowledge was self researched, but the study has connected me with companies and allowed me to work on real world products like my work at Agro IT.
                </p>
            </Card>

            <span class="@xl:col-span-2">
                <Card>
                    <h3
                        class="text-xl font-bold flex-wrap inline-flex items-center gap-3 justify-between"
                    >
                        <div class="inline-flex gap-3">
                            ⚔️
                            Skills
                        </div>
                    </h3>
                    <p class="text-sm text-gray-800 dark:text-gray-100">
                        I can work with anything and love to try out new things and technologies! I have a lot of common knowledge around computer software and hardware and can adapt to anything that may be needed, but here is a constantly growing list of some of the things I am comfortable on and like working with:
                    </p>
                    <div id="scroll-container" class="flex flex-wrap gap-1 w-full text-center text-sm">
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
                </Card>
            </span>

            <Card
                buttonHref="https://prideunbound.uk"
                buttonText="📂 See archived 2023 Pride Unbound site"
            >
                <div class="flex flex-col gap-5">
                    <h3
                        class="text-xl font-bold flex-wrap inline-flex items-center gap-3 justify-between"
                    >
                        <div class="inline-flex gap-3">
                            <img
                                src="/prideunbound.png"
                                class="h-8 rounded-full"
                                alt="prideunbound"
                            /> Pride Unbound
                        </div>
                        <span class="text-sm font-light">2023 and ongoing</span>
                    </h3>
                    <p class="text-sm text-gray-800 dark:text-gray-100">
                        Pride Unbound is a convention based in London ran by Puppy Pride. I create and maintain their software and server infrastructure.
                        The website is custom made with Laravel and has a registration system, payment system, scheduling system, booking system and CMS pages system all managed by the event organisers through a dashboard.
                    </p>
                </div>
            </Card>
        </div>
    </div>
</section>