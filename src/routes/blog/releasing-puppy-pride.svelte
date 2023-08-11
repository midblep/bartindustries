<script>
	import Post from "$lib/blog/Post.svelte";
</script>

<Post date="August 11th 2023" title="Releasing Puppy Pride: lessons about experience, Laravel, and deadlines" image="/blog/releasingpuppypride.png">
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
        Speaking of requirements, the system didn't only have to be rewritten into a modern system within months by a junior, it also needed to be better and faster, naturally. How does a junior optimize a large system when not knowing what he's doing? He tries, and tries, and tries until it works, for 8 months long. The 2.5 years of development were mostly occupied by solving a few key problems, and in hindsight the first year was just me learning the software and replacing it the years afterwards.
    </p>

    <p>
        It was pretty clear I wasn't cut out for the job, but the fact my employer didn't really have anyone else kept me on board. Eventually the website had all of its basic features, and we ran into the more difficult problems. Edge cases, complicated payment flows and bad flows, database backups, migrations, etc. I missed deadline after deadline for two key reasons: Not knowing the full scope and enormity of the task ahead, and being so overwhelmed that I procrastinated.
    </p>

    <p>
        But as time went on and I got more confident in my skills, I started to hit deadlines and become more motivated. Some issues still made me want to pull my hair out for weeks on end, because I had no team there was nobody to ask other than the internet, but eventually I always got there. My pace was getting better as through just one massive project I started to memorise the ins and outs of the entire Laravel framework; Observers, migrations, seeders, factories, jobs, batches, queues, events, listeners, notifications, drivers, livewire, APIs, S3 storage, and more. Pretty much everything that you can do in Laravel was used by this project.
    </p>

    <p>
        Right when the website was almost done and set to launch, my boss was running a pride event in London and needed a website system for managing it. The volunteer was not making good progress, so eventually I was asked to make it. It took me just 3 days to develope Pride Unbound*London's website using Laravel. It sported an entire user system with registration form, ticket payments, registration management, CMS custom pages, event calendar, limited event booking spots, and more. It motivated me greatly, because it was a showcase to see how far I had gotten with my Laravel knowledge during the development of Puppy Pride, and that I was now able to make complex systems thanks to all of the experience I've gained with the framework.
    </p>

    <p>
        That was the last push I needed to work on the last things, after which a few weeks of bug fixing happened, and Puppy Pride was eventually launched succesfully. We observed the website for some weeks, and to our greatest surprise nothing caught fire. Now we've planned out the next year of additions we wanna build, and I can happily say the entire experience was a success. Despite being underqualified and taking way longer than first expected, I developed and delivered an entirely functioning social site to spec by myself. I consider it an experience like no other, giving me the ability to work on a complex project from start to finish. It gave me a lot of confidence in my skills, and being so proficient in PHP and Laravel will enable me to make complex website systems quickly in the future.
    </p>
</Post>