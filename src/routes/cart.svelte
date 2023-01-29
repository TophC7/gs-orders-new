<script lang="ts">
	import { element } from 'svelte/internal';

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

<div class="flex flex-col gap-2 py-4">
	{#each items as item}
		<div class="card p-2">
			{item.name.toUpperCase()}
			<span class="divider-vertical border-primary-500" />
			<span class="text-secondary-500"> ${item.price} </span>
		</div>
	{/each}
</div>

${12000.99}
<button class="btn btn-base variant-filled-primary w-min justify-self-end">Buy</button>
