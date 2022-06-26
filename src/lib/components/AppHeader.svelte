<script>
    import AppMenu from '$lib/components/AppMenu.svelte'  
    import Brand from '$lib/components/Brand.svelte' 
     
    let navItems = [
        { label: "About", href:"/about" },
        { label: "Blog", href:"/blog" },
        { label: "Contact", href:"/contact" }
    ];
</script>

<header class="app-header">
    <Brand />
    <AppMenu navItems={navItems}/>   
</header>

<style lang="scss">
     .app-header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding:20px 25px 20px 25px;
        position: relative;
        z-index: 3;
        margin-bottom:25px;
        gap:15px;
        border-bottom:2px solid $dark-gunmental;

        @media all and (min-width: 1312px) {
            padding:30px 60px 30px 60px;       
        }

        @media all and (min-width: 1738px) {
            padding:40px 80px 40px 80px;  
            margin-bottom:35px;      
        }

        @media all and (min-width: 1950px) {
            padding:40px 160px 40px 160px;
            margin-bottom:85px; 
        }
    }
    // .app-header{
    //     display: flex;
    //     justify-content: space-between;
    //     align-items: center;
    //     padding:40px 160px 40px 140px;
    //     position: relative;
    //     z-index: 3;
    //     margin-bottom:80px;
    //     gap:15px;
    //     border-bottom:4px solid $dark-gunmental;

    //     @media all and (max-width: 1442px) {
    //         padding:40px 60px 40px 40px;
    //     }
        
    // }


</style>