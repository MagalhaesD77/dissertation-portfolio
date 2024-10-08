<script>
	import { goto } from '$app/navigation';
	import { Email } from '$lib/Constants';
</script>

<div
	class="button"
	role="button"
	tabindex="0"
	on:keypress={() => {
		window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${Email}`;
	}}
	on:click={() =>window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${Email}`}
>
	<slot />
</div>

<style>
	.button {
		cursor: pointer;
		height: 40px;
		max-width: 200px;
		border-radius: 10px;
		background: #ca3c25;

		background-size: 150% 150%;

		display: flex;
		justify-content: center;
		align-items: center;
		font-weight: 500;
	}

	.button:hover {
		animation: gradient 2s ease infinite;
	}
</style>
