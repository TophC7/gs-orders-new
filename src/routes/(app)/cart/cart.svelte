<script lang="ts">
	import { supabase } from '$lib/supabaseClient';
	import type { Session } from '@supabase/supabase-js';
	import { onMount } from 'svelte';
	export let session: Session | null;

	// $: cart = { id: null, products: null };

	// onMount(getCart);

	async function getCart() {
		let cart = {};

		await supabase
			.from('cart')
			.select('id')
			.eq('user_id', session?.user.id)
			.then((result) => {
				cart.id = result.data[0].id;
			});
		await supabase
			.from('cart_item')
			.select(
				`product(*),
				quantity`
			)
			.eq('cart_id', cart.id)
			.then((result) => {
				cart.products = result.data;
			});

		return cart;
	}

	async function checkout() {
		// insert into order
		// ('user_id') values (session.user.id)
		//
		let order_id = await supabase.from('order').insert('user_id', session?.user.id);

		await supabase
			.from('order_item')
			.insert(await supabase.from('cart_item').select('product_id,quantity').eq('cart_id', cart_id, 'product_id'));

		let cart = await getCart();
		let products = cart.products;

		console.log(products);
		products.forEach((item) => {
			await supabase.from('cart_item').insert({ cart_id: cart_id, product_id: id });
		});
		//await supabase.from('cart_item').insert({ cart_id: cart_id, product_id: id });
	}
</script>

{#await getCart()}
	loading
{:then value}
	<div class="flex flex-col gap-2 py-4">
		{#each value.products as item}
			<div class="card w-full grid-flow-col justify-start gap-2 whitespace-nowrap p-2">
				{item.product.name}
				<span class="divider-vertical border-primary-500" />
				<span class="text-secondary-500"> ${item.product.price} </span>
				<button class=""> x </button>
			</div>
		{/each}
	</div>

	${12000.99}
	<button class="btn btn-base variant-filled-primary w-min justify-self-end" on:click={checkout}>Buy</button>
{/await}

<!-- {cart.products} -->
