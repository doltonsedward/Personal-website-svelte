<script>
    import HomeHero from "../molecules/Home/HomeHero.svelte";
    import HomeContent from "../molecules/Home/HomeContent.svelte"
    
    $: document.title = 'Home page'
</script>

<div class="container">
    <HomeHero />
    <HomeContent />
</div>

<style>
    .container {
    }
</style>