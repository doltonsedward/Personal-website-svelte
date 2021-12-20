<script>
	import { Header, Home, Portfolio, AboutMe, Contact } from './components'
	export let title, dataSkill, dataTools, dataPortfolio

	$: document.title = title

	let navItems = ['Home', 'About me', 'Portfolio', 'Contact']
	let activeIn = 'Home'
	const navChange = (e) => {
		activeIn = e.detail
	}
</script>

<Header {navItems} {activeIn} on:navChange={navChange} />
<main class="padding-default">
	{#if activeIn === 'Home'}
		<Home {dataSkill} {dataTools} />
	{:else if activeIn === 'About me' }
		<AboutMe />
	{:else if activeIn === 'Portfolio' }
		<Portfolio {dataPortfolio} />
	{:else if activeIn === 'Contact' }
		<Contact />
	{/if}
</main>

<style>
	main {
		margin: 0 auto;
	}
</style>