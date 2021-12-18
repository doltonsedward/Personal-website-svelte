<script>
    import AOS from 'aos';
    import 'aos/dist/aos.css'; 
    
    AOS.init();
</script>

<div class="content">
    <div class="row">
        <div class="achievement flex items-center flex-column col-4">
            <div class="achievement-box">
                <div class="scoring" data-aos="fade-up">
                    <p>12</p>
                </div>
                <p class="title">Certificate</p>
            </div>
            <div class="achievement-box">
                <div class="scoring" data-aos="fade-up">
                    <p>12</p>
                </div>
                <p class="title">Certificate</p>
            </div>
        </div>
        <div class="service flex flex-center col-4">
            <div class="box">
                <h2 class="text-center">Services</h2>
                <br>
                <p>Product Designer</p>
            </div>
        </div>
        <div class="service-proof flex flex-center col-4">
            <div class="box">
                <h2>My awesome service</h2>
                <br>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                <br>
                <button class="btn button-theme">Download CV</button>
            </div>
        </div>
    </div>
</div>

<style>
    .achievement-box {
        padding: 30px 0 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        position: relative;
        width: 50%;
        background-color: var(--bg-theme);
        border-radius: var(--border-trendy);
        margin-bottom: 5rem;
        box-shadow: 0 5px 20px rgba(118, 118, 118, 0.2);
    }
    
    .achievement-box .scoring {
        position: absolute;
        top: -50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 50px;
        height: 50px;
        background-color: var(--bg-theme);
        border: 5px solid var(--color-secondary);
        border-radius: 50%;
        box-shadow: 0 5px 20px rgba(118, 118, 118, 0.2);
    }

    .achievement-box .title {
        color: #6b6b6b;
    }

    .achievement-box::before {
        content: '';
        position: absolute;
        width: 125%;
        height: 100%;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background-color: var(--color-secondary);
        z-index: -1;
        border-radius: var(--border-trendy);
    }

    .service .box {
        padding: 10px 40px;
        width: 80%;
        color: var(--bg-theme);
        background: linear-gradient(to bottom left, #a78ae9, #ef8ea6);
        border-radius: var(--border-trendy);
    }

    .service .box h2 { font-weight: 100 }

    .service-proof .box {
        padding: 10px 40px;
        width: 80%;
    }
</style>