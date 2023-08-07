<script>
	import Post from "$lib/blog/Post.svelte";
</script>

<Post date="August 1st 2023" title="Releasing Puppy Pride: lessons about experience, Laravel, and deadlines" image="/blog/releasingpuppypride.png">
    <b class="text-lg">
        It has taken me a while to develop, actually over 2.5 years of solo fullstack development with zero experience, but I finally managed to release and deploy the new Puppy Pride social network. There have definitely been ups an downs, and in this post I'd like to touch a little on what it took to get here and the lessons I learned along the way.
    </b>

    <p>
        That first bit wasn't a lie, I really did develop this site from scratch with zero experience, and it worked. Now the result is not a perfect system in hindsight, but I have gotten the mindset that all software can improve over time lately, so I'm sure the bits I wrote when I was starting out will be deprecated just as much as the ones I write today.
    </p>

    <p>
        Before I get to my journey though, if you want to see the end result you can view it at <a class="href" href="https://puppypride.social/">https://puppypride.social/</a>. I am still in active development, and will likely remain like that for a long time. I do want to stress that Puppy Pride is an adult community of people who are into pet-play kinks. The website is 18+ restricted and most of the features can only be seen and used when logged in.
    </p>

    <p>
        Back in December of 2020 my friend said he had someone who needed a website made. A remake for his aging and broken social website called Puppy Pride. Being the enthusiastic 19 year old freshman student I was, I thought my years of Wordpress tinkering and easy introduction to Java at University were quite something and offered to help. Turns out making websites is harder than I could ever think. I was asked to program a social site in Laravel, something I had vaguely heard of when I did a short internship during high school. I heard the word and went "Yeah, I know that!" and in January of 2021 were off to the races. Truth be told is my employer had nobody better, so I was his only choice.
    </p>

    <p>
        The first 2 weeks were spent looking at beginner tutorials on the web about writing PHP and Laravel. I started off with a course on how to write a Twitter clone, and immediately came into contact with Laravel's huge ecosystem of tools to make the job easier. If it wasn't for tools like Breeze I would've never managed to get started the way I did, writing back-end logic and interactive forms within weeks of starting. I have to reiterate I wasn't a back-end or front-end engineer at all, and had no knowledge of things like MVC, REST APIs, Templaters, Multithreading, etc. But I was about to write a social system for 12000 users that was intended to be finished after 6-8 months of development time.
    </p>

    <p>
        Wherever I could I harnessed the power of Laravel's rich ecosystem. Things like Spatie's Medialibrary and Laravel's Breeze helped me through difficult systems that I didn't know how to make myself. Little did I know I'd replace or rewrite most of them in the future, because as it turns while they're great starters they are too inflexible for very large systems like a social network. On top of that, my employer had a whole bunch of specific and weird requests to retain compatibility with the old website. For example, everything had to be stored in albums, even a thumbnail for a blog would get a complete image album. That led to needing to make many types of albums and differentiate between them, which is just an outright mess when combined with Spatie's more rigid system.
    </p>

    <p>
        Speaking of requirements, the system didn't only have to be rewritten into a modern system within months by a junior, it also needed to be better and faster, naturally. How does a junior optimize a large system when not knowing what he's doing? He tries, and tries, and tries until it works, for 8 months long. The 2.5 years of development were mostly occupied by solving a few key problems:
    </p>
    <ul>
        <li>Migrating old data to the new database: 6 months</li>
        <li>Deploying securely (Docker, NGINX): 4 months</li>
        <li>Load balancing and load time improvements: 8 months</li>
    </ul>

    <p>
        Right before launch I developed Pride Unbound*London's website using Laravel as well.....
    </p>
</Post>