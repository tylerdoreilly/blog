<script>
    import Tag from '$lib/components/blog/Tag.svelte'  
    export let tags;
    console.log('test',tags)
</script>
<h1 class="tags__title">Categories</h1>
{#if tags}
    <div class="tags">
        {#each tags as tag}
            <Tag tag={tag} />
        {/each}
    </div>
{/if}
<style lang="scss">

    .tags{
        display:flex;
        flex-direction:row;
        justify-content:flex-start;
        gap: 10px;
        margin-bottom:20px;
    }

    .tags__title{
        font-size:1.3rem;
    }

</style>