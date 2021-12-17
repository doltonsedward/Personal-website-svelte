<script>
	import { Header, Home, Portfolio, AboutMe } from './components'
	export let title

	$: document.title = title

	let navItems = ['Home', 'About me', 'Portfolio']
	let activeIn = 'Home'
	const navChange = (e) => {
		activeIn = e.detail
	}
</script>

<Header {navItems} {activeIn} on:navChange={navChange} />
<main>
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
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>