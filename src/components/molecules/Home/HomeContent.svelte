<script>
    import AOS from 'aos'
    import 'aos/dist/aos.css' 
    
    AOS.init()

    export let dataSkill, dataTools
</script>

<div class="content">
    <div class="row">
        <div class="achievement flex items-center flex-column col-4">
            <div class="achievement-box">
                <div class="scoring" data-aos="fade-up">
                    <p>18</p>
                </div>
                <p class="title">Stack i know</p>
            </div>
            <div class="achievement-box">
                <div class="scoring" data-aos="fade-up">
                    <p>6</p>
                </div>
                <p class="title">Certificate</p>
            </div>
        </div>
        <div class="service flex flex-center col-4">
            <div class="box" data-aos="fade-up">
                <h2 class="text-center">Skill</h2>
                <ul class="list-skill">
                    {#each dataSkill as item}
                        <li data-aos="fade-up">
                            <p>{item.name}</p>
                            <p class={`skill ` + item.level.toLowerCase()}>{item.level}</p>
                        </li>
                    {/each}
                </ul>
                <h2 class="text-center">Tools</h2>
                <ul class="list-skill">
                    {#each dataTools as item}
                        <li>
                            <p>{item.name}</p>
                            <p class={`skill ` + item.level.toLowerCase()}>{item.level}</p>
                        </li>
                    {/each}
                </ul>
            </div>
        </div>
        <div class="service-proof flex flex-center col-4">
            <div class="box" data-aos="fade-up">
                <h2>My awesome service</h2>
                <br>
                <p>Curriculum Vitae and all the projects I've ever made. </p>
                <br>
                <button class="btn button-theme"><a href="/assets/doltons-cv.pdf" target="_blank">View CV</a></button>
            </div>
        </div>
    </div>
</div>

<style>
    .content { margin: 10px 0 }
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
    
    .achievement-box:nth-child(2) .scoring { border-color: #f7dfae }
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

    .achievement-box:nth-child(2)::before { background-color: #f7dfae }
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
        padding: 20px 40px;
        width: 90%;
        color: var(--bg-theme);
        background: linear-gradient(to bottom left, #a78ae9, #ef8ea6);
        border-radius: var(--border-trendy);
    }

    .service .box h2 { font-weight: 100 }

    .service .box li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        list-style: none;
        margin-bottom: 5px;
    }

    .list-skill { 
        margin-top: 10px;
        margin-bottom: 30px 
    }

    .list-skill .skill { 
        color: #6b6b6b;
        padding: 2px 16px;
        border-radius: 23px;
    }

    .list-skill .novice { background-color: var(--bg-theme) }
    .list-skill .intermediate { background-color: #f3ecc4 }
    .list-skill .expert { background-color: #caf3c4 }
    .list-skill .advanced { background-color: #c4d1f3 }
    
    .service-proof .box {
        margin-top: 20px;
        padding: 10px 40px;
        width: 80%;
    }

    a { color: var(--btn-color) }

    @media (min-width: 750px) {
        .service-proof .box {
            margin-top: 0;
        }
    }
</style>