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
        padding-top: 20px;
        padding-bottom: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
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