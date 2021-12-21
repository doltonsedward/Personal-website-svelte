<script>
    $: document.title = 'Contact'
    let loading = true
</script>

<div class="row">
    <div class="col-12">
        {#if loading}
            <div class="loading">
                <div class="middle">
                    <div class="bar bar1"></div>
                    <div class="bar bar2"></div>
                    <div class="bar bar3"></div>
                    <div class="bar bar4"></div>
                    <div class="bar bar5"></div>
                    <div class="bar bar6"></div>
                    <div class="bar bar7"></div>
                    <div class="bar bar8"></div>
                </div>
            </div>
        {/if}
        <iframe
            id="JotFormIFrame-213514020184038"
            title="Contact me"
            on:load={()=> loading = false}
            allowtransparency="true"
            allowfullscreen="true"
            allow="geolocation; microphone; camera"
            src="https://form.jotform.com/213514020184038"
            frameborder="0"
            style="
            min-width: 100%;
            height:539px;
            border:none;"
            scrolling="no"
        >
        </iframe>
    </div>
</div>

<style>
    .loading {
        width: 100%;
        height: 100vh;
        background-color: rgba(29, 29, 39, .9);
        position: fixed;
        left: 0;
        top: 0;
    }
    .middle {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        position: absolute;
    }

    .bar {
        width: 10px;
        height: 70px;
        display: inline-block;
        transform-origin: bottom center;
        border-top-right-radius: 20px;
        border-top-left-radius: 20px;
        animation: loader 1.2s linear infinite;
    }
    
    .bar1 { animation-delay: 0.1s }
    .bar2 { animation-delay: 0.2s }
    .bar3 { animation-delay: 0.3s }
    .bar4 { animation-delay: 0.4s }
    .bar5 { animation-delay: 0.5s }
    .bar6 { animation-delay: 0.6s }
    .bar7 { animation-delay: 0.7s }
    .bar8 { animation-delay: 0.8s }

    @keyframes loader {
        0% {
            transform: scaleY(0.1);
            background: none;
        }
        50% {
            transform: scaleY(1);
            background: var(--color-theme);
        }
        100% {
            transform: scaleY(0.1);
            background: transparent;
        }
    }

</style>