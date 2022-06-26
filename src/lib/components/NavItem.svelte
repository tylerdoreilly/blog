<script>
    import { currentPage } from '$lib/assets/js/store';
    export let href;
    export let title;

    $: isCurrentPage = $currentPage.startsWith(href);
    console.log($currentPage)
</script>

<a class:active={isCurrentPage} href={href}>{title}</a> 

<style lang="scss">

   a.active{
        color:$burnt-sienna;
    }

</style>