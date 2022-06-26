<script context="module">
    export const load = async ({ fetch }) => {
      const posts = await fetch('/api/posts.json')
      const allPosts = await posts.json()
    
      return {
        props: {
          posts: allPosts
        }
      }
    }
</script>

<script>
    import PostItem from '$lib/components/blog/PostItem.svelte' 
    export let posts;
</script>


<section class="layout-center"> 
  <div class="page-title">
    <h1>Posts</h1>
  </div>

  <div class="posts-wrapper">
    {#each posts as post}
      <PostItem post={post}/>
    {/each}
  </div>
</section>

 

<style lang="scss">

   
    .page-title{
      display:flex;
      flex-direction:column;
      justify-content: flex-start;
      align-items:flex-start;
      margin-bottom:40px;
      width:800px;

      h1{
        font-size:60px;
        font-family: 'Literata', serif;
        font-weight:300;
        margin-top:0px;
      }
    }

    .posts-wrapper{
      display:flex;
      flex-direction:column;
      justify-content: center;
      gap:100px;
      width:800px;
      position:relative;
      z-index:10;
    }

    .post-item{
      display:flex;
      flex-direction:column;
      justify-content:flex-start;
      gap:40px;
    }
   
    .post-details{

      h2{
        margin:0px 0px 20px 0px;
        font-size:40px;
        color:#fff;
        font-family: 'Literata', serif;
        font-weight:300;
        line-height:65px;

        a{
          border-bottom: 3px solid #01ffc7;
        }
      }
    }

    .read-more{
      font-size:15px;
      padding-top:20px;
    }

    .post-date{
      color:$dark-sky-blue;
      font-weight:bold;
      font-size:18px;
      margin-bottom:15px;
    }

    .post-image .imgTest{
      width:500px;
      height:300px;
    }

    .post-excerpt{
      margin-top:25px;
      margin-bottom:20px;
      font-size:22px;
      line-height:30px;
      font-family: 'Alegreya Sans', sans-serif;
      margin-bottom:30px;
    }

    .categories{
      margin-bottom:40px;
    }
    

</style>