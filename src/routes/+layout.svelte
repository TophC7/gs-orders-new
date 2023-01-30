<script>
	import Cart from './cart.svelte';
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';

	import { AppBar, AppShell } from '@skeletonlabs/skeleton';
</script>

<AppShell
	slotPageHeader="p-4"
	slotSidebarRight="p-4 variant-glass-surface border-black/5 border-l w-1/5 max-w-sm min-w-min"
	slotPageContent="p-4 pt-0"
>
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<h1>Orders</h1>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<svelte:fragment slot="pageHeader">
		<h2>Items</h2>
	</svelte:fragment>

	<svelte:fragment slot="sidebarRight">
		<h2>Cart</h2>
		<Cart />
	</svelte:fragment>

	<slot />
</AppShell>
