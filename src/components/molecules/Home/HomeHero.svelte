<div class="section-one">
    <h1 class="title">
        <p>Hy!, I am</p>
        <p class="name">Doltonss Edward N Pabiaran</p>
    </h1>
    <br>
    <p class="description-section-one">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Asperiores, porro deleniti natus alias soluta itaque dolorem 
    </p>
    <br>
    <button class="btn button-theme">Hire me</button>
    <br>
</div>
<div class="section-two">
    <img class="profile-image" src="/assets/profile.png" alt="admin profile">
    <img class="bubble-icon js" src="/assets/js-bubble.png" alt="javascript bubble">
    <img class="bubble-icon socket" src="/assets/socket-bubble.png" alt="socket bubble">
</div>

<style>
    .title {
        font-size: 50px;
    }

    .title p {
        line-height: 4rem;
    }

    .title .name {
        color: var(--color-theme);
    }

    .description-section-one {
        width: 500px;
    }

    .section-two {
        width: 500px;
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
</style>