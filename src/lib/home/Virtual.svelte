<script>
	import { onMount } from "svelte";
	import { slide } from "svelte/transition";
	import Card from "./Card.svelte";

	let texts = [
		"keep on creating",
		"love what you do",
		"be yourself for yourself",
		"overcome your challenges",
		"push yourself forward",
		"dare to dare",
		"go out there and live"
	];
	let text = texts[0];

	onMount(() => {
		let i = 0;
		text = texts[i % 7];
		setInterval(() => {
			text = texts[i % 7];
			i++;
		}, 3000);
	});
</script>
<main class="@container container flex flex-col gap-20 relative">
	<div class="absolute top-0 -mt-40" id="vr"></div>

	<section class="w-full h-full flex flex-col px-5 justify-between gap-10 lg:gap-20">
		<h2 class="calderious text-8xl text-blue-600">Virtual Reality</h2>

		<article class="grid grid-cols-1 @xl:grid-cols-4 gap-5">

			<img src="/homepage/vr/vr.png" class="rounded-xl shadow-lg @xl:object-cover @xl:aspect-[1/2] w-full h-full @xl:col-span-1 @xl:row-span-2" alt="couch" />

			<img src="/homepage/vr/fancy.png" class="rounded-xl shadow-lg @xl:object-cover @xl:aspect-[1/1] w-full h-full @xl:col-span-1 @xl:row-span-1" alt="couch" />

			<div class="@xl:object-cover @xl:aspect-[1/1] h-full w-full @xl:col-span-2 @xl:row-span-2">
				<Card
					center={true}
				>
					<h3 class="font-bold text-2xl">I love Virtual Reality ❤</h3>
					<p>
						I believe the Metaverse is alrady here, and it's been here for years. The reason people haven't realized is because the thing companies sell us is not what the metaverse is actually about:
						<br/><br/>
						<i class="text-lg">
						VR is a world of the free where anything is possible. Entire cities erected from a few button clicks. Friendships and communities built on creativity and compassion.
						A place where anyone can be what they truly want to be without limitation. A place where humanity's light shines brighter than anywhere else.
						</i>
						<br/><br/>
						And big tech takes those who already built the metaverse for fools, and sells us a future that is the same dull office space we're already dragging ourselves through in the real world.
						<br/><br/>
						So I joined these passionate and creative minds and started making my own worlds and communities, building a digital home for myself. The pictures here are some of the moments and places the world of VR has allowed me to create and witness.
					</p>
				</Card>
			</div>

			<img src="/homepage/vr/mad.png" class="rounded-xl shadow-lg @xl:object-cover @xl:aspect-[1/1] w-full h-full @xl:col-span-1 @xl:row-span-1" alt="couch" />

			<img src="/homepage/vr/couch.png" class="rounded-xl shadow-lg @xl:object-cover @xl:aspect-[3/2] w-full h-full @xl:col-span-3 @xl:row-span-2" alt="couch" />

			<img src="/homepage/vr/doggo.png" class="rounded-xl shadow-lg @xl:object-cover @xl:aspect-[1/1] w-full h-full @xl:col-span-1 @xl:row-span-1" alt="couch" />

			<img src="/homepage/vr/bsaber.png" class="rounded-xl shadow-lg @xl:object-cover @xl:aspect-[1/1] w-full h-full @xl:col-span-1 @xl:row-span-1" alt="couch" />

			<img src="/homepage/vr/misty.png" class="rounded-xl shadow-lg @xl:object-cover @xl:aspect-[1/1] w-full h-full @xl:col-span-1 @xl:row-span-1" alt="couch" />

			<img src="/homepage/vr/lights.png" class="rounded-xl shadow-lg @xl:object-cover @xl:aspect-[1/1] w-full h-full @xl:col-span-1 @xl:row-span-1" alt="couch" />

			<div class="object-cover @xl:aspect-[2/1] h-full w-full @xl:col-span-2 @xl:row-span-1">
				<Card
					center={true}
				>
					<h3 class="font-bold text-2xl">Experience and skills</h3>
					<p>
						Because of my adventures in virtual reality I have gained knowledge surrounding things such as:
						Game development (Unity), texturing (Substance Painter) and animating (Unity Animators).
						Most of the avatars shown in the pictures are hand-made by me.
						<br/><br/>
						On top of that, I know my way around the world of VR.
						Through my years of running events where people come together and celebrate VR I know the people and where to find them, and how to use VR to create success and push new frontiers.
					</p>
				</Card>
			</div>

			<img src="/homepage/vr/furality.png" class="rounded-xl shadow-lg object-cover @xl:aspect-[1/1] w-full h-full @xl:col-span-1 @xl:row-span-1" alt="couch" />

			<img src="/homepage/vr/fun.png" class="rounded-xl shadow-lg object-cover @xl:aspect-[3/2] w-full h-full @xl:col-span-3 @xl:row-span-2" alt="couch" />

			<div class="object-cover @xl:aspect-[1/1] h-full w-full @xl:col-span-1 @xl:row-span-1">
				<Card
					center={true}
				>
					<h3 class="font-bold text-2xl">🌍 Worldwide</h3>
					<p>
						The world of VR is much larger than it seems. Some of the world's largest companies in entertainment already realize its potential. Each year millions from all over the world come together in events and conventions such as Furality to celebrate.
					</p>
				</Card>
			</div>

			<img src="/homepage/vr/meet.png" class="rounded-xl shadow-lg object-cover @xl:aspect-[2/1] w-full h-full @xl:col-span-2 @xl:row-span-1" alt="couch" />

			<img src="/homepage/vr/party.png" class="rounded-xl shadow-lg object-cover @xl:aspect-[1/1] w-full h-full @xl:col-span-1 @xl:row-span-1" alt="couch" />

			<img src="/homepage/vr/guitar.png" class="rounded-xl shadow-lg object-cover @xl:aspect-[1/2] w-full h-full @xl:col-span-1 @xl:row-span-2" alt="couch" />

			<img src="/homepage/vr/sly.png" class="rounded-xl shadow-lg object-cover @xl:aspect-[1/1] w-full h-full @xl:col-span-1 @xl:row-span-1" alt="couch" />

			<img src="/homepage/vr/dog.png" class="rounded-xl shadow-lg object-cover @xl:aspect-[1/1] w-full h-full @xl:col-span-2 @xl:row-span-2" alt="couch" />

			<img src="/homepage/vr/dj.png" class="rounded-xl shadow-lg object-cover @xl:aspect-[1/1] w-full h-full @xl:col-span-1 @xl:row-span-1" alt="couch" />

			<div class="rounded-xl object-cover @xl:aspect-[2/1] w-full h-full col-span-2 @xl:row-span-1"></div>

			<img src="/homepage/vr/table.png" class="rounded-xl shadow-lg object-cover @xl:aspect-[2/1] w-full h-full col-span-2 @xl:row-span-1" alt="couch" />

			<div class="rounded-xl object-cover @xl:aspect-[1/1] w-full h-full col-span-1 @xl:row-span-1"></div>

			<img src="/homepage/vr/bsaber.png" class="rounded-xl shadow-lg object-cover @xl:aspect-[1/1] w-full h-full col-span-1 @xl:row-span-1" alt="couch" />

		</article>

		<h3 class="italic py-20 font-light text-4xl text-center h-10">
			{#key text}
				<div in:slide>{text}</div>
			{/key}
		</h3>
	</section>

</main>