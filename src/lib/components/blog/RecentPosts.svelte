<script>
    import { allPosts } from '$lib/assets/js/store';

    export let posts = $allPosts;
 
    console.log('posts', posts);
</script>

<div class="recent-posts">
    
    <h2 class="recent-posts__title">Recent Posts</h2>
   
    <ul class="recent-posts__list">
        {#each posts as post}
            <li class="recent-posts__list-item">
                <div class="post-title">{post.meta.title}</div>
                <div>{post.meta.date}</div>
            </li>
        {/each}
    </ul>
  
</div>

<style>
    .recent-posts{
        display:flex;
        flex-direction:column;
        max-width:350px;
    }

    .recent-posts__title{
        font-size:1.3rem;
    }

    .recent-posts__list{
        display:flex;
        flex-direction:column;
        list-style-type: none;  
        padding:0px;
    }

    .recent-posts__list-item{
        flex-direction:column;
    }

    .post-title{
        font-size:1.2rem;
    }
</style>