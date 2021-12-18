<script>
    import { createEventDispatcher } from "svelte" 
    export let navItems
    export let activeIn

    const dispatch = createEventDispatcher()
</script>

<header class="padding-default row">
    <p class="logo col-6">Personal</p>
    <nav class="col-6 to-right">
        <ul class="list-nav">
            {#each navItems as item}
                <li on:click={() => dispatch('navChange', item)}>
                    <p class:active={item === activeIn}>{item}</p>
                </li>
            {/each}
        </ul>
    </nav>
</header>

<style>
    header {
        padding-top: 20px;
        padding-bottom: 20px;
    }

    .logo {
        font-size: 20px;
        font-weight: 700;
    }
    
    ul {
        display: flex;
        list-style: none;
    }

    li {
        margin-right: 2rem;
        cursor: pointer;
    }


    .active {
        color: var(--color-theme)
    }
</style>