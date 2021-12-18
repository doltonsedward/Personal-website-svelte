<script>
    import HomeHero from "../molecules/Home/HomeHero.svelte";
    
    $: document.title = 'Home page'
</script>

<div class="container">
    <HomeHero />
    
</div>

<style>
    .container {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
    }
</style>