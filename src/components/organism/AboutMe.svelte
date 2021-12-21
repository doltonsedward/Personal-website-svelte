<script>
    import { redirect } from '../../script'
    import AOS from 'aos';
    import 'aos/dist/aos.css'; 

    AOS.init()

    $: document.title = 'About me'
</script>

<div class="row">
    <h1 class="title text-center">About me</h1>
    <br>
    <div class="col-12">
        <div class="card">
            <div class="section-one" data-aos="zoom-in">
                <div class="sosmed">
                    <div class="inner__sosmed">
                        <div class="item__sosmed" on:click={() => redirect('https://wa.me/+6289619800459', 'Whatsapp')}>
                            <div>
                                <img src="/assets/icon/wa.svg" alt="Doltons Whatsapp">
                            </div>
                            <p>Whatsapp</p>
                        </div>
                        <div class="item__sosmed" on:click={() => redirect('https://www.instagram.com/dollonged', 'Instagram')}>
                            <div>
                                <img src="/assets/icon/instagram.svg" alt="Doltons Instagram">
                            </div>
                            <p>Instagram</p>
                        </div>
                        <div class="item__sosmed" on:click={() => redirect('https://www.linkedin.com/in/doltons-edward-nicholas-p', 'Linkedin')}>
                            <div>
                                <img src="/assets/icon/linkedin.svg" alt="Doltons Whatsapp">
                            </div>
                            <p>Linkedin</p>
                        </div>
                    </div>
                </div>
                <img src="/assets/doltons-edward.jpg" alt="owner profile">
            </div>
            <div class="section-two">
                <h2>Doltons Edward N.P</h2>
                <h3>Fullstack Developer & Designer</h3>
                <p class="subtitle__section-two_card">
                    I am a Full Stack Developer, Who loves
                    developing Web App with React.Js and
                    Mobile App with React Native. My skills
                    were last formed at Dumbways Bootcamp
                    Fullstack Developer in 4 weeks making Web
                    and Mobile App
                </p>
                <br>
                <button class="btn button-theme" on:click={()=> redirect('https://www.linkedin.com/in/doltons-edward-nicholas-p', 'Linkedin')}>Hire Me</button>
            </div>
        </div>
    </div>
</div>

<style>
    .title {
        margin-bottom: 10px;
    }

    .card {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        background-color: var(--bg-theme);
    }
    
    .section-one {
        position: relative;
        width: 250px;
        height: 300px;
        overflow: hidden;
        margin: 0 auto 20px;
        border-radius: var(--border-trendy);
        box-shadow: 0 0 0 rgba(0, 0, 0, .2);
        transition: .3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    .section-one:hover {
        transform: scale(1.2);
        box-shadow: 0 10px 20px rgba(0, 0, 0, .5);
        transition: .3s cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    .sosmed {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .7);
        position: absolute;
        top: 0;
        left: -100%;
        transition: .3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    .section-one:hover .sosmed {
        left: 0;
        transition: .3s cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    .inner__sosmed {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
    .item__sosmed {
        padding: 10px 30px;
        color: rgba(225, 225, 225, .9);
        width: 100%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        cursor: pointer;
        transition: .3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    .item__sosmed:hover {
        color: rgba(0, 0, 0, .5);
        background-color: white;
        transition: .3s cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    .item__sosmed div {
        width: 30px;
        height: 30px;
        margin-right: 10px;
    }

    .item__sosmed div img {
        width: 100%;
        object-fit: cover;
    }
    
    .section-one img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .section-two {
        width: 500px;
        height: 100%;
    }

    h2 { 
        color: var(--color-theme);
        font-family: 'Typographica', Arial, Helvetica, sans-serif; 
        letter-spacing: 2px;
    }

    h3 {
        font-size: 18px;
    }

    .subtitle__section-two_card{ 
        color: var(--color-subtitle);
        margin-top: 20px;
    }

    .button-theme {
        z-index: 1;
    }

    @media (min-width: 750px) {
        .section-one {
            margin: 0 50px 0 0;
        }
    }
</style>