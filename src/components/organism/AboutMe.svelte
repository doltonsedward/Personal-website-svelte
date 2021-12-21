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
        width: 250px;
        height: 300px;
        overflow: hidden;
        margin: 0 auto 20px;
    }
    
    .section-one img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: var(--border-trendy);
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