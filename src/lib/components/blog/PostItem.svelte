<script>
    import Tags from '$lib/components/blog/Tags.svelte'  
    export let post;

    let readMore = "Read More"
</script>

<div class="post-item">
        
    <div class="post-details">
      <h2> 
        <a href={post.path}>{post.meta.title}</a> 
      </h2>
      <div class="post-date">{post.meta.date}</div>
     
      <div class="post-excerpt">
        {post.meta.excerpt}
      </div>
      <div class="categories">
        <Tags tags={post.meta.categories} />
      </div>
     
      <a class="read-more" href={post.path}>{readMore}</a>
    </div>
  </div>

  
<style lang="scss">

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
        cursor:pointer;

        a{
          color:$white;
          border-bottom: 3px solid #01ffc7;
        }
      }
    }

    .read-more{
      font-size:15px;
      padding-top:20px;
    }

    .post-date{
      color:$light-gunmental;
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