<script lang="ts">
	export let item: string;
	export let price: number;
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
		<button class="btn btn-base variant-filled-primary w-min justify-self-end"> Add </button>
	</footer>
</div>

<style>
	.card-w {
		width: calc(20% - 1rem);
	}
</style>
