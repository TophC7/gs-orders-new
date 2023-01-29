<script>
	import ItemCard from './item-card.svelte';
	import { Avatar, AppShell } from '@skeletonlabs/skeleton';

	const items = [
		{ name: 'corn', price: 1.99 },
		{ name: 'grape', price: 0.99 },
		{ name: 'pie', price: 420.0 },
		{ name: 'Jet', price: 12 },
		{ name: 'pc', price: 1.99 },
		{ name: 'sandwich', price: 0.99 },
		{ name: 'camera', price: 420.0 },
		{ name: 'happiness', price: 9999 }
	];
</script>

<div class="flex flex-wrap gap-4">
	{#each items as item, i}
		<ItemCard item={item.name.toUpperCase()} price={item.price} />
	{/each}
</div>
