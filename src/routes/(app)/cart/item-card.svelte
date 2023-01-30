<script lang="ts">
	import { supabase } from '$lib/supabaseClient';

	export let id: number;
	export let user;
	export let item: string;
	export let price: number;

	async function addItem() {
		let cart_id = null;
		let qty = null;

		await supabase
			.from('cart')
			.select('id')
			.eq('user_id', user)
			.then((result) => {
				cart_id = result.data[0].id;
			});

		await supabase
			.from('cart_item')
			.select('cart_id,product_id,quantity')
			.eq('cart_id', cart_id)
			.eq('product_id', id)
			.then((result) => {
				console.log(result);
				qty = result.data?.length > 0 ? result.data[0].quantity : null;
			});

		if (qty) {
			const newQty = qty + 1;
			await supabase
				.from('cart_item')
				.update({ cart_id: cart_id, product_id: id, quantity: newQty })
				.eq('cart_id', cart_id)
				.eq('product_id', id);
		} else {
			await supabase.from('cart_item').insert({ cart_id: cart_id, product_id: id });
		}
	}
</script>

<div class="card-w card card-hover min-w-min max-w-sm overflow-hidden">
	<header>
		<img
			src="https://source.unsplash.com/random/720x720?{item}"
			alt="corn pic"
			class="aspect-square w-full bg-black/50"
		/>
	</header>
	<div class="p-4">
		<h3>{item}</h3>
	</div>
	<footer class="card-footer grid grid-flow-col gap-2">
		<h5 class="self-center text-secondary-500">${price}</h5>
		<button class="btn btn-base variant-filled-primary w-min justify-self-end" on:click={addItem}> Add </button>
	</footer>
</div>

<style>
	.card-w {
		width: calc(20% - 1rem);
	}
</style>
