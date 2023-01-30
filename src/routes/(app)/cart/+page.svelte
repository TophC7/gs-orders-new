<script>
	import ItemCard from './item-card.svelte';
	// import { supabase } from '$lib/supabaseClient';

	/** @type {import('./$types').LayoutData} */
	export let data;
</script>

<div class="flex flex-wrap gap-4">
	{#each data.products as item}
		<ItemCard id={item.id} user={data.session?.user.id} item={item.name.toUpperCase()} price={item.price} />
	{/each}
	<div />
</div>
