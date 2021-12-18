<script>
    $: document.title = 'Home page'
</script>

<div class="container">
    <div class="section section-one">
        <h1 class="title">
            <p>Hy!, I am</p>
            <p>Doltons Edward N Pabiaran</p>
        </h1>
        <br>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Asperiores, porro deleniti natus alias soluta itaque dolorem 
        </p>
        <br>
        <button class="btn button-theme">Hire me</button>
        <br>
    </div>
    <div class="section section-two">
    </div>
</div>

<style>
    .container {
        display: flex;
        justify-content: space-between;
        border: 1px solid rgba(0, 0, 0, .2);
    }

    .title {
        font-size: 40px;
    }

    .title p {
        line-height: 3rem;
    }
</style>