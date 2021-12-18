<script>
    import { buttonRipple, redirect, dataPortfolio } from '../../script'
    import AOS from 'aos';
    import 'aos/dist/aos.css'; 
    
    $: document.title = 'Portfolio'
    
   
    AOS.init(); // initializing AOS
</script>

<div class="">
    <div class="">
        <h1 class="text-center">Portfolios</h1>
    </div>
    <div class="wrapper-data__portfolio responsive-grid">
        {#each dataPortfolio as item}
            <div class="card" data-aos="fade-up">
                <div class="inner-card">
                    <div class="card-media">
                        <img src={item.image} alt={item.name}>
                    </div>
                    <div class="card-item card-title">
                        <h2>{item.name}</h2>
                    </div>
                    <div class="card-item card-content">
                        <p>{item.description}</p>
                    </div>
                    <div class="card-item card-button">
                        <button 
                            class="btn button-theme btn-ripple" 
                            on:click={(e) => {
                                buttonRipple(e) 
                                redirect(item.url, 'Github')
                            }}
                        >
                            See Detail
                        </button>
                    </div>
                </div>
            </div>
        {/each}
    </div>
</div>

<style>
    .wrapper-data__portfolio { margin: 20px 0 }
    .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 20px 0;
    }
    
    .inner-card {
        padding-bottom: 15px;
        width: 80%;
        overflow: hidden;
        border-radius: var(--border-trendy);
        box-shadow: 0 5px 10px rgba(0, 0, 0, .2);
    }

    .card-media {
        height: 150px;
        overflow: hidden;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .card-content {
        color: rgb(130, 130, 130);
        position: relative;
        height: 100px;
        overflow: hidden;
    }
    
    .card-content::before {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 20px;
        background-color: white;
        opacity: .8;
    }

    .card-item { margin: 10px 20px }

</style>