<script>
	import Socials from "$lib/Socials.svelte";

	import { variables } from "$lib/helpers/variables";

	let email = "";
	let message = "";
	let notify;

	function send() {
		email = "";
		message = "";
		notify = "Email sent!";
	}
</script>

<main class="flex flex-col gap-5">
	<span class="p-5 flex justify-center">
		<Socials />
	</span>

	<section
		class="bg-slate-400 bg-opacity-10 dark:bg-gray-800 p-10 rounded-xl shadow w-full flex flex-col gap-5"
	>
		<h3 class="text-xl font-bold">Quick compose email</h3>

		<form
			class="flex flex-col gap-5"
			action="https://api.staticforms.xyz/submit"
			method="post"
		>
			<input
				type="hidden"
				name="accessKey"
				value="f237579b-85d1-414f-846c-409b8c8f57f0"
			/>
			<input type="text" name="honeypot" style="display: none;" />
			<input type="hidden" name="redirectTo" value={variables.appUrl} />

			<div class="flex flex-col">
				<label for="email" value="E-Mail" class="text-lg font-bold"
					>E-Mail</label
				>
				<input
					id="email"
					name="email"
					type="text"
					class="text-lg py-1 px-2 rounded-lg shadow dark:bg-gray-600"
					bind:value={email}
				/>
			</div>

			<div class="flex flex-col">
				<label for="message" value="E-Mail" class="text-lg font-bold"
					>Message</label
				>
				<textarea
					id="message"
					name="message"
					class="text-lg py-1 px-2 rounded-lg shadow dark:bg-gray-600"
					bind:value={message}
					rows="5"
				/>
			</div>

			<div class="flex flex-col">
                {#if email != "" && message != ""}
                    <button
                        type="submit"
                        on:click={send}
                        class="bg-white dark:bg-black py-2 px-3 rounded-lg font-bold shadow button"
                        >Send</button
                    >
                {:else}
                    <button
                        disabled
                        type="none"
                        on:click={send}
                        title="Fill in the fields before submitting"
                        class="bg-white dark:bg-black bg-opacity-50 dark:bg-opacity-50 py-2 px-3 rounded-lg font-bold shadow text-gray-400"
                    >
                        Send
                    </button>
                {/if}
			</div>

			{#if notify}
				<p class="text-green-500 font-bold text-lg">{notify}</p>
			{/if}
		</form>
	</section>
</main>

<style>
	.button {
		transition-duration: 0.3s;
	}

	.button:hover {
		transition-duration: 0.3s;
		transform: translateY(-2px);
	}

	.button:active {
		transition-duration: 0.3s;
		transform: translateY(5px);
	}
</style>
