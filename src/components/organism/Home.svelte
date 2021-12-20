<script>
    import HomeHero from "../molecules/Home/HomeHero.svelte";
    import HomeContent from "../molecules/Home/HomeContent.svelte"

    export let dataSkill, dataTools
</script>

<div class="container">
    <HomeHero />
    <HomeContent {dataSkill} {dataTools} />
</div>