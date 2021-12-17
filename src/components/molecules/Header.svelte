<script>
    import { createEventDispatcher } from "svelte" 
    export let navItems
    export let activeIn

    const dispatch = createEventDispatcher()
</script>

<header>
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
    ul {
        display: flex;
        list-style: none;
    }

    li {
        margin-right: 2rem;
        cursor: pointer;
    }

    .active {
        color: red
    }
</style>