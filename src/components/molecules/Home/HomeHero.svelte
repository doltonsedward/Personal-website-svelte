<script>
    import AOS from 'aos';
    import 'aos/dist/aos.css'; 

    AOS.init()
    import { redirect } from '../../../script'
</script>

<div class="hero">
    <div class="section-one">
        <h1 class="title">
            <p>Hy!, I am</p>
            <p class="name">Doltons Edward N.P</p>
        </h1>
        <br>
        <p class="description-section-one">
            Fullstack developer with new innovation and persistence in learning new things
        </p>
        <br>
        <button class="btn button-theme" on:click={()=> redirect('https://www.linkedin.com/in/doltons-edward-nicholas-p', 'Linkedin')}>Hire Me</button>
        <br>
    </div>
    <div class="section-two">
        <img class="profile-image" src="/assets/profile.png" alt="admin profile">
        <img class="bubble-icon js" src="/assets/js-bubble.png" alt="javascript bubble">
        <img class="bubble-icon socket" src="/assets/socket-bubble.png" alt="socket bubble">
    </div>
</div>

<style>
    .hero {
        margin-bottom: 4rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        overflow: hidden;
        max-width: 100%;
        min-height: 80vh;
    }

    .title {
        font-size: 40px;
    }

    .title .name {
        color: var(--color-theme);
    }

    .section-one {
        width: 500px;
    }

    .section-two {
        display: none;
        width: 550px;
        min-height: 550px;
        position: relative;
    }
    
    .section-two .profile-image {
        width: 100%;
    }

    .bubble-icon.js {
        width: 150px;
        position: absolute;
        left: 0;
        top: 0;
        animation: toTopBottom 10s cubic-bezier(0.175, 0.885, 0.32, 1.275) infinite;
    }

    .bubble-icon.socket {
        width: 120px;
        position: absolute;
        right: 0;
        bottom: 10px;
        animation: toTopBottom2 5s cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
    }

    @keyframes toTopBottom {
        50% {
            transform: translateY(50px);
        }
    }

    @keyframes toTopBottom2 {
        50% {
            transform: translateY(20px);
        }
    }

    @media (min-width: 750px) {
        .hero {
            min-height: 50vh;
        }

        .title {
            font-size: 50px;
        }

        .title p {
            line-height: 4rem;
        }
    }

    @media (min-width: 1000px) {
        
        .section-two {
            display: block;
        }
    }
</style>