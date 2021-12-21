<script>
    import { createEventDispatcher } from "svelte" 
    export let navItems
    export let activeIn

    const dispatch = createEventDispatcher()
</script>

<header class="padding-default">
    <p class="logo">Personal</p>
    <nav>
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
        display: none;
        justify-content: space-between;
        align-items: center;
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

    li:hover p:not(.active) {
        color: var(--color-theme);
        opacity: .5;
    }

    .active {
        color: var(--color-theme)
    }

    @media (min-width: 750px) {
        header {
            display: flex;
        }
        
        nav {
            display: flex;
            justify-content: right;
        }
    }
</style>