<script lang="ts">
	import routes from '../../routes';
</script>

<nav class="flex justify-around w-3/4 text-gray-500 uppercase text-bold">
	{#each routes as route}
		<a href={route.path} class="hover:text-gray-700 hover:no-underline">{route.name}</a>
	{/each}
</nav>
