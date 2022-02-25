<script>
    import Button from "$lib/header/Button.svelte";
    import { Splide, SplideSlide } from '@splidejs/svelte-splide';
    import '@splidejs/splide/dist/css/splide.min.css';
    import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
    import Dash from "$lib/Dash.svelte";

    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;

        // While there remain elements to shuffle...
        while (currentIndex != 0) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    let options = {
        rewind: true,
        gap: '2em',
        perPage: 1,
        fixedHeight: "100vh",
        cover: true,
        type: 'fade',
        speed: 3000,
        pagination: false,
        arrows: false,
        autoplay: true,
        interval: 5000,
        focus: 'center'
    };
    let images = [
        "images/mid/image1.png",
        "images/mid/image2.jpg",
        "images/mid/image3.png",
        "images/mid/image4.jpg",
        "images/mid/image5.png",
        "images/mid/image6.png",
        "images/mid/image7.png",
        "images/mid/image8.png",
        "images/mid/image9.gif",
        "images/mid/image10.jpg",
        "images/mid/image11.png",
        "images/mid/image12.jpg",
        "images/mid/image13.jpeg",
        "images/mid/image14.png",
        "images/mid/image15.PNG",
        "images/mid/image16.PNG",
        "images/mid/image21.jpg",
        "images/mid/image22.png",
        "images/mid/image23.png",
        "images/mid/image24.png",
        "images/mid/image25.png",
        "images/mid/image27.png",
        "images/mid/image28.jpg",
        "images/mid/image29.png",
        "images/mid/image31.jpg",
        "images/mid/image33.png",
        "images/mid/image35.jpg",
        "images/mid/image36.png",
        "images/mid/image37.png"
    ];

    shuffle(images);
</script>

<main class="flex flex-col -m-10">

    <section class="flex lg:flex-row flex-col gap-5 items-center justify-center py-3 font-mono">
        <h3 class="font-bold text-xl">Characters</h3>
        <hr class="rotate-90 w-10 border"/>
        <Button id="mid" text="Midnight" />
        <Button id="koffie" text="Koffie" />
        <Button id="martin" text="Martin" />
        <Button id="seffy" text="Seffy" />
        <Button id="sprocket" text="Sprocket" />
        <Button id="others" text="Others" />
    </section>

    <div id="mid" class="bg-center bg-cover relative h-screen overflow-hidden">
        <section class="flex justify-end h-full absolute inset-0">
            <div class="w-1/2">
                <Splide
                    options={options}
                >
                    {#each images as image}
                        <SplideSlide>
                            <img src={image} alt="Mid" />
                        </SplideSlide>
                    {/each}
                </Splide>
            </div>
        </section>

        <div class="from-black via-black bg-gradient-to-r to-transparent absolute inset-0 p-10 pl-0">
            <section class="flex gap-10 flex-col w-1/2 border-l-8 border-blue-500 pb-10 pl-10">
                <h2 class="text-6xl font-bold">
                    Midnight
                    <span class="text-xs text-gray-400">//</span>
                    <span class="text-base font-normal">Mid</span>
                    <span class="text-xs text-gray-400">//</span>
                    <span class="text-base font-normal">Midblep</span>
                </h2>
                <p class="text-lg italic leading-relaxed">
                    Mid is a tall black cat. He is quite the gentleman but can get rough and dirty if need be. He is part of the Thallium military, working as an Engineer on the newest technologies.
                    He has created his companion Truxton, which helps him through life.
                </p>
                <p class="text-lg italic leading-relaxed">
                    In actuality however, Mid is a universal entity that transcends into the 4th dimension of time.
                    His embodiment is a supermassive black hole that encompasses all of livable reality, its multiverses and alternate timelines and everything else.
                    All of creation is a part of him, and so he often manifests inside of the infinite worlds inside of him as this black cat.
                    However, it varies massively from reality to reality as he likes to artificially limit his own capabilities to enact some fun scenarios to cure his boredom with.
                    These adventures often lead to growth, worship or other indulgences.
                </p>
                <p class="text-lg italic leading-relaxed">
                    The God does have a weak spot though. Provoke him enough in places where it hurts most, like size, and another being may force its way out of him.
                    That being is Shenrock, an utterly evil and destructive dark version of the cat. It will seek to permanently destroy and kill, corrupting everything in its path until it has gotten its revenge.
                </p>
            </section>
        </div>
    </div>

    <div id="koffie" class="bg-cover bg-right-bottom p-10 pl-0 h-screen" style="background-image: url('/koffie.png')">
        <section class="pl-10 pb-10 border-l-8 border-red-600 flex gap-10 flex-col">
            <h2 class="text-6xl font-bold">
                Koffie
                <span class="text-xs text-gray-400">//</span>
                <span class="text-base font-normal">Coffee</span>
            </h2>
            <p class="w-2/5 text-lg italic leading-relaxed">
                Koffie is one of Mid's accidental creations of life early on. He is a tall Rexouium with warm brown, black, white and orange colors that are themed after coffee.
                His body is made out of the substance of coffee, milk and similar things. He has partial control over its composition which makes him able to pour you a cup of coffee out of his fingers by temporarily making that part of him fluid.
            </p>
            <p class="w-2/5 text-lg italic leading-relaxed">
                Drinking or coming in contact with coffee-related substances will cause him to absorb it and grow in overall size.
                Unfortunately enough he is also an addict that will do anything to get a cup, and can smell coffee from miles away. But he is not shy to share if he's in a good mood.
                All of this coffee has also resulted in him becoming a complete Insomniac.
            </p>
        </section>
    </div>

    <div class="bg-cover bg-center" style="background-image: url('/images/pattern5.png')">
        <div class="bg-amber-900 bg-opacity-50 h-screen">
            <div id="martin" class="flex justify-between p-10 pl-0 gap-10">
                <section class="pl-10 pb-10 border-l-8 border-orange-800 flex gap-10 flex-col w-1/2">
                    <h2 class="text-6xl font-bold">Martin</h2>
                    <p class="text-lg italic leading-relaxed">
                        Martin is a short Pine Marten with brown fur that also works in the Thallium military.
                        He is quite shy and unconfident, but loves to help Mid whenever he can and practically sees him as his big bro or dad considering he never had one.
                        With a long flexible body he can fit in a lot of places which makes him very useful.
                    </p>
                    <p class="text-lg italic leading-relaxed">
                        Martin has the special trait that if he is belittled or made fun of, his body can't help but start to steal the size of the parties that are making fun of him pretty much until he feels safe again.
                        In particularly bad situations the ratio that is being converted might even be 2:1 or more, meaning he'll grow 2m for every meter stolen from a single person involved.
                        The only way he is able to shrink back is with Truxton, which was the first machine able to compress someone's size just as it did for Mid.
                    </p>
                </section>

                <section class="w-1/3">
                    <img src="/martin2.png" class="rounded-2xl drop-shadow-2xl" />
                </section>
            </div>
        </div>
    </div>

    <div id="seffy" class="bg-center bg-cover relative h-screen overflow-hidden" style="background-image: url('/images/seffy.png')">
        <section class="absolute inset-0 w-1/3 h-screen bg-black scale-150 -rotate-12">

        </section>

        <div class="absolute inset-0 bg-black bg-opacity-30 p-10 pl-0">
            <section class="pl-10 pb-10 border-l-8 border-white flex gap-10 flex-col">
                <h2 class="text-6xl font-bold">Seffy</h2>
                <p class="w-1/2 text-lg italic leading-relaxed">
                    Seffy is a happy, but rather subby, Truxtion. He is an Electrical Engineer at a no-name company and is good at what he does.
                    He is part of Batch 3 of the Truxtion shells and is uniquely modified. Instead of being hooked up to Truxton's network, Seffy has his own mind and internaly independent of the hive-mind.
                    Seffy loves to attach various accessories to his modular body, most notably a set of tails. He is often seen with an oversized shark tail.
                </p>
                <p class="w-1/2 text-lg italic leading-relaxed">
                    His biggest modification is to how he is powered. Inside he is entirely hollow to house his fuel. This fuel can be any liquid, as long as it has a form of energy to be consumed.
                    Since Seffy was specially constructed to relieve Mid, this liquid often tends to be his cum. The inlet port is his tail, which can click off with a lock to reveal a hole.
                </p>
                <p class="w-1/2 text-lg italic leading-relaxed">
                    Because Mid is very potent Seffy could never hold everything, so there is a way to relieve internal pressure to safe levels so he won't burst under the pressure.
                    This is done by simply expanding his form, thus making him grow bigger. He returns back to normal as he empties out or uses the fuel over time.
                </p>
            </section>
        </div>
    </div>

    <section id="others" class="p-10 pl-0">
        <div class="pl-10 pb-10 border-l-8 border-zinc-600 flex flex-col gap-10">
            <h2 class="text-6xl font-bold">Other characters</h2>

            <div class="grid grid-cols-3 gap-10">
                <div class="min-h-80 bg-neutral-700 p-5 rounded shadow-xl flex flex-col gap-5">
                    <h2 class="text-4xl font-bold">Truxton</h2>
                    <p class="italic leading-relaxed">
                        Truxton is more of a mind than any physical thing.
                    </p>
                </div>
                <div class="min-h-80 bg-neutral-700 p-5 rounded shadow-xl flex flex-col gap-5">
                    <h2 class="text-4xl font-bold">Dunky</h2>
                    <p class="italic leading-relaxed">
                        Dunky is a sentient worm-on-a-string, one of those old toys. He has no mouth and cannot talk, but he can communicate effectively and makes for the best hugger.
                        Though he is quite big, easily 10 meters in length, and could serve as a pillow or bed as well.
                    </p>
                    <p class="italic leading-relaxed">
                        He likes to put things on his string almost like a tool slot.
                        His pattern is themed after the Asexual flag, representing some of my feelings towards traditional physical intimacy.
                        Because of that he is completely Safe For Work.
                    </p>
                    <img src="/dunky.png" class="rounded-lg" />
                </div>
                <div class="min-h-80 bg-neutral-700 p-5 rounded shadow-xl flex flex-col gap-5">
                    <h2 class="text-4xl font-bold">Sprocket</h2>
                    <p class="italic leading-relaxed">
                        Mid is a universal entity that transcends even the 4th dimension, he can do anything from turning into other creatures to making himself and others hyper, to even manipulating the world and objects around him, his only rule is to not mess with souls as this tampers with the fabric of life itself. Mid can be any size he wants to be and can be in any scenario since he is reality itself, he only limits himself from his true godhood so his eternal existence doesn't get boring for him.
                    </p>
                </div>
                <div class="min-h-80 bg-neutral-700 p-5 rounded shadow-xl flex flex-col gap-5">
                    <h2 class="text-4xl font-bold">Shiba</h2>
                    <p class="italic leading-relaxed">
                        Mid is a universal entity that transcends even the 4th dimension, he can do anything from turning into other creatures to making himself and others hyper, to even manipulating the world and objects around him, his only rule is to not mess with souls as this tampers with the fabric of life itself. Mid can be any size he wants to be and can be in any scenario since he is reality itself, he only limits himself from his true godhood so his eternal existence doesn't get boring for him.
                    </p>
                </div>
                <div class="min-h-80 bg-neutral-700 p-5 rounded shadow-xl flex flex-col gap-5">
                    <h2 class="text-4xl font-bold">Friction</h2>
                    <p class="italic leading-relaxed">
                        Mid is a universal entity that transcends even the 4th dimension, he can do anything from turning into other creatures to making himself and others hyper, to even manipulating the world and objects around him, his only rule is to not mess with souls as this tampers with the fabric of life itself. Mid can be any size he wants to be and can be in any scenario since he is reality itself, he only limits himself from his true godhood so his eternal existence doesn't get boring for him.
                    </p>
                </div>
            </div>
        </div>
    </section>

</main>