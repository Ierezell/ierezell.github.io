<script lang="ts">
	import Navbar from '../components/navbar/Navbar.svelte';
	import Sidebar from '../components/navbar/Sidebar.svelte';
	import Main from '../components/Main.svelte';

	let open = false;
</script>

<Sidebar bind:open />
<Navbar bind:sidebar={open} />
<Main />

<svelte:head>
	<link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" />
</svelte:head>

<style>
	:global(body) {
		padding: 0;
	}
</style>
