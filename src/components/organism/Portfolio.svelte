<script>
    $: document.title = 'Portfolio'

    const dataPortfolio = [
        {
            name: "Dewetour",
            image: "/assets/img/dewetour.png"
        },
        {
            name: "Literature",
            image: "/assets/img/literature.png"
        },
        {
            name: "Rentake",
            image: "/assets/img/rentake.png"
        },
    ]
</script>

<div class="row">
    <div class="col-12">
        <h1 class="text-center">Portfolio</h1>
    </div>
    {#each dataPortfolio as item}
        <div class="card col-4">
            <div class="inner-card">
                <div class="card-media">
                    <img src={item.image} alt={item.name}>
                </div>
                <div class="card-title">
                    <p>{item.name}</p>
                </div>
                <div class="card-content">

                </div>
            </div>
        </div>
    {/each}
</div>

<style>
    .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: var(--border-trendy);
    }

    .inner-card {
        width: 80%;
        box-shadow: 0 5px 10px rgba(0, 0, 0, .2);
    }

    img {
        width: 100%;
        object-fit: cover;
    }
</style>