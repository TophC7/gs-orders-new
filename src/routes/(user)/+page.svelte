<script>
	import { page } from '$app/stores';
	import Account from './Account.svelte';
	import Auth from './Auth.svelte';
</script>

<svelte:head>
	<title>Orders</title>
	<meta name="description" content="GS Orders" />
</svelte:head>

{#if !$page.data.session}
	<Auth />
{:else}
	<Account session={$page.data.session} />
{/if}
