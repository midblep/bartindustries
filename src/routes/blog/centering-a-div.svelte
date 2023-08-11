<script>
	import Post from "$lib/blog/Post.svelte";
</script>

<Post date="August 11th 2023" title="Centering a div" image="/blog/centeringadiv.png">
    <b class="text-lg">
        This is the quickest guide to center a div you will find.
    </b>

    <pre class="not-prose"><code class="language-css not-prose">
        .centered {'{'}
            display: flex;
            justify-content: center;
            align-items: center;
        {'}'}

        {"<div class='centered'></div>"}
    </code></pre>

    <p>
        It will center according to it's available width and height, so make sure if you want it to center on a whole page that you're giving it 100vh and 100vw. I hear some people hating on flex, but flex and grid are my go to ways to create layouts. They create predictable topologies, and don't do something random based on whatever that HTML tag's default behaviour is. I highly encourage you to embrace creating more dynamic layouts with flex as well, and stop worrying over little things.
    </p>
</Post>