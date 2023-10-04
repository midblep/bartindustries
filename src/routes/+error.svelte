<script context="module">
    /** @type {import('@sveltejs/kit').Load} */  export function load({ error, status }) {
      return {
        props: {
          title: `${status}: ${error.message}`
        }
      };
    }
</script>

<script>
    export let title;
</script>

<div class="py-20 container flex flex-col gap-10">
    <h2 class="text-4xl font-bold text-center">Something went wrong here...</h2>
    <img src="/homepage/sona/hotdog.jpeg" class="w-1/3 mx-auto rounded-2xl" alt="Oops! Hotdogs!" />
</div>