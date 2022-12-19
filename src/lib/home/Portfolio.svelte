<script>

	import Card from "./Card.svelte";

</script>
<section class="pb-20 z-20 relative">
    <div class="absolute top-0 -mt-40" id="portfolio"></div>
    <div class="@container container px-5 flex flex-col gap-10 justify-center">
        <div class="flex flex-col gap-5">
            <h2 class="font-bold text-4xl">I do a lot of things</h2>
            <p class="text-lg">
                Below are some of the things I currently keep myself busy with and links to places I worked on.
            </p>
        </div>

        <div class="grid grid-cols-1 @2xl:grid-cols-2 @6xl:grid-cols-3 gap-10 justify-between">
            <Card
                buttonHref="https://flamesoftware.net/"
                buttonText="🔥 Visit early website"
            >
                <h3
                    class="text-xl font-bold inline-flex items-center gap-3"
                >
                    <img
                        src="/logo.png"
                        class="h-8"
                        alt="flame"
                    /> Flame Software
                </h3>
                <p class="text-sm text-gray-800 dark:text-gray-100">
                    Flame Software is a Software-as-a-Service company that is developing a new communications app
                    that intends to revolutionize the way we talk and socialize online.
                    Our mission is to make the net more connected, more privacy focused, and more healthy for your nmind.
                    <br/><br/>
                    We are currently in our early development stage, where I work as the CTO to lay down the groundworks
                    for this new app, which will be built using a combination of languages like Rust and TypeScript.
                </p>
            </Card>

            <Card
                buttonHref="https://puppypride.social"
                buttonText="🌐 Visit Puppy Pride"
            >
                <h3
                    class="text-xl font-bold inline-flex items-center gap-3"
                >
                    <img
                        src="/puppypride.png"
                        class="h-8"
                        alt="puppypride"
                    /> Puppy Pride
                </h3>
                <p class="text-sm text-gray-800 dark:text-gray-100">
                    I am the core developer of the new Puppy Pride social
                    network since January 2021, and continue to support and expand
                    it to this day. The site was built from the ground up
                    using the TALL stack in PHP (Tailwindcss, Alpine, Livewire and Laravel)
                    and gave me a lot of experience working with not just PHP and every field inside Laravel,
                    but also a very large array of different kinds of features and business processes at each step of development.
                    <br /><br />
                    Puppy Pride is an adult themed England based social network for people into petplay.
                    The project is nearing its completion and will be released soon.
                    You may find a beta release public at <a target="_blank" class="a" href="https://beta.puppypride.social">beta.puppypride.social</a>.
                </p>
            </Card>

            <Card
                buttonHref="https://saxion.nl"
                buttonText="🎓 Open Website"
            >
                <h3
                    class="text-xl font-bold inline-flex items-center gap-3"
                >
                    <img
                        src="/saxion.png"
                        class="h-8 rounded-full"
                        alt="puppypride"
                    /> Saxion University
                </h3>
                <p class="text-sm text-gray-800 dark:text-gray-100">
                    I am a year 3 student at the Saxion University of Applied Sciences in The Netherlands majoring in Software Engineering. The study keeps me plenty busy, but now I am combining the study with a Minor Entrepeneurship to build a SaaS product at my new company Flame Software.
                    <br/><br/>
                    Even though the university has taught me much about the business life and how to professionally work in teams, nearly all my programming knowledge is self taught at home.
                </p>
            </Card>

            <span></span>

            <span class="col-span-1 row-span-1">
                <Card
                    buttonHref="https://dubbelnull.com/showcase"
                    buttonText="➡️ View DubbelNull showcase"
                >
                    <h3
                        class="text-xl font-bold inline-flex items-center gap-3"
                    >
                        <img
                            src="/dubbelnull.png"
                            class="h-10 -my-1 -ml-1"
                            alt="dubbelnull"
                        /> More websites at DubbelNull
                    </h3>
                    <p class="text-sm text-gray-800 dark:text-gray-100">
                        DubbelNull is a family business that does internet based development for small and medium sized companies,
                        such as creating websites, manage hosting, advice and other similar things.
                        I have made several websites for clients under this name, and you can find more of my works on the DubbelNull website.
                    </p>
                </Card>
            </span>

            <span class="row-span-2">
                <Card
                >
                    <h3
                        class="text-xl font-bold inline-flex items-center gap-3"
                    >
                        🧑‍💻
                        Player Stats
                    </h3>
                    <p class="text-sm text-gray-800 dark:text-gray-100">
                        Beyond practical knowledge, I also am a teamplayer. I love discovering new ways and technologies and like to share ideas and find new solutions to problems together.
                        <br/><br/>
                        In my study at Saxion I have done many projects, including ones for large companies such as AgroVision and Witteveen+Bos, where we worked in teams of people with different backgrounds to create a complete product.
                    </p>
                    <img src="/banner4.png" class="w-full -mb-10"/>
                </Card>
            </span>
        </div>
    </div>
</section>