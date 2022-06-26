<script>
    import NavItem from '$lib/components/NavItem.svelte'  
    export let navItems 
</script>

<nav class="nav">
    {#each navItems as navItem}
        <NavItem title={navItem.label} href={navItem.href}/>
    {/each}
</nav>

<div class="nav-trigger">
    Nav
</div>

<style lang="scss">

    // .nav{
    //     display:flex;
    //     flex-direction: row;
    //     justify-content:flex-end;
    //     gap:15px;
    // }

    .nav{
        display:none;
        opacity:0;
        visibility: none;

        @media all and (min-width: 672px) {
            opacity:1;
            visibility: inherit;
            display:flex;
            flex-direction: row;
            justify-content:flex-end;
            gap:15px;
        }
    }

    .nav-trigger{
        display:block;

        @media all and (min-width: 672px) {
            display:none;
            opacity:0;
            visibility: none;
        }
    }

</style>