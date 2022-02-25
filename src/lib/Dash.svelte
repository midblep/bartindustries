<script>
    import { onMount } from "svelte";
    import * as THREE from 'three';
    import * as Mid from '$lib/mid';
</script>

<main class="-m-10 py-10 bg-zinc-800 bg-cover bg-center" style="background-image: url('/grow.png')">
    <section class="flex justify-between gap-5 w-2/3 mx-auto">
        <div class="flex flex-col w-full">
            <h2 class="text-4xl font-mono font-bold">Subject name: {Mid['name']}</h2>
            <h2 class="text-2xl">Vitals <span class="text-green-400 text-3xl font-bold font-mono uppercase">OK</span></h2>
            <h3>{Mid['heightcm']} cm tall</h3>
            <h3>Weighs {Mid['weightkg']} kg</h3>
        </div>

        <div class="flex justify-end">

        </div>
    </section>
</main>