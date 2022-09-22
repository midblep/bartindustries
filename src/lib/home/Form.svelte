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

<main class="flex flex-col gap-10 w-full">
	<img src="/homepage/contact.png" class="w-60 mb-2" alt="fullbody of mid" />

	<article class="flex flex-col lg:flex-row gap-5 lg:gap-10">
		<section
			class="bg-slate-300 bg-opacity-50 dark:bg-slate-800 p-10 rounded-xl shadow w-full flex flex-col gap-5 lg:w-1/3"
		>

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
						class="py-1 px-2 rounded-lg shadow dark:bg-gray-600"
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
						class="py-1 px-2 rounded-lg shadow dark:bg-gray-600"
						bind:value={message}
						rows="5"
					/>
				</div>

				<div class="flex flex-col">
					{#if email != "" && message != ""}
						<button
							type="submit"
							on:click={send}
							class="bg-blue-600 py-2 px-3 rounded-lg font-bold text-white shadow button"
							>Send</button
						>
					{:else}
						<button
							disabled
							type="none"
							on:click={send}
							title="Fill in the fields before submitting"
							class="bg-white dark:bg-black bg-opacity-50 dark:bg-opacity-20 py-2 px-3 rounded-lg font-bold shadow text-gray-400"
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

		<div class="lg:w-1/3"><Socials type="grid" /></div>
	</article>
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
