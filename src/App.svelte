<script>
	import { Header, Home, Portfolio, AboutMe } from './components'
	export let title

	$: document.title = title

	let navItems = ['Home', 'About me', 'Portfolio', 'Contact']
	let activeIn = 'Portfolio'
	const navChange = (e) => {
		activeIn = e.detail
	}
</script>

<Header {navItems} {activeIn} on:navChange={navChange} />
<main class="padding-default">
	{#if activeIn === 'Home'}
		<Home />
	{:else if activeIn === 'About me' }
		<AboutMe />
	{:else if activeIn === 'Portfolio' }
		<Portfolio />
	{/if}
</main>

<style>
	main {
		margin: 0 auto;
	}
</style>