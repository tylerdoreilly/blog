<script context="module">
  import p from '$lib/components/blog/elements/p.svelte'
  import blockquote from '$lib/components/blog/elements/blockquote.svelte'
  import img from '$lib/components/blog/elements/img.svelte'
  export {p, blockquote, img };

</script>

<script>
    import { fullPath } from '$lib/assets/js/store';
    import PostHeader from '$lib/components/blog/PostHeader.svelte'  
    import Aside from '$lib/components/Aside.svelte'
    import RecentPosts from '$lib/components/blog/RecentPosts.svelte'  
    import SocialShare from '$lib/components/blog/SocialShare.svelte'
    import Tags from '$lib/components/blog/Tags.svelte'
    import PostImg from '$lib/components/blog/PostImg.svelte'
    export let title
    export let date
    export let updated
    export let categories
    export let excerpt
    export let coverImage 
    $: isFullPath = $fullPath;

</script>

<svelte:head>
	<title>Tyler David O'Reilly blog</title>
  <link href="../src/routes/blog/dracula.css" rel="stylesheet" />
</svelte:head>

<div class="post-wrapper">

  <div class="post-header">
    <div class="post-header-left">
      <PostHeader title={title} pub={date} updated={updated} excerpt={excerpt} img={coverImage} />   
    </div>
    <div class="post-header-right">
      <PostImg alt={title} img={coverImage}/>
    </div>
  </div>

  <article class="post-content">
    <div class="sidebar"> 
      <Aside>
        <RecentPosts />
      </Aside>

     

      <Aside>
        <Tags tags={categories} />
      </Aside>
      <Aside>
        <SocialShare url={ isFullPath} postTitle={title}/> 
      </Aside>
     
    </div>
  
    <article class="post">
      
      <slot />
    </article> 
  </article>

 
  
</div>
 
<style>
  .post-wrapper{
     display:flex;
     flex-direction:column-reverse;
     justify-content: flex-start;
     flex-grow: 1;
     width: 100%;
     flex-basis:auto;
   }
  

   .post{
     display:flex;
     flex-direction:column;
     justify-content: flex-start;
     width: 100%;
     margin:0px;
     flex-grow: 0;
   }

   .sidebar{
     flex:25%;
     padding: 0 1rem 0 0;
     flex-grow: 0;
     flex-shrink: 1;
   }

   h2{
       font-size:16px;
   }

   
   @media all and (min-width: 672px) {
     .post{
       max-width:44rem;
       margin-left: auto;
       margin-right: auto;
     }
   }

   @media all and (min-width: 1312px) {
     .post-wrapper{
       display:flex;
       flex-direction:column;
       justify-content: flex-start;
      
       flex-grow: 1;
       width: 100%;
       flex-basis:auto;
     }

     .post-header{
      display:flex;
      flex-direction:row;
      width:100%;
      align-items:center;
      flex-grow: 1;
      flex-basis:auto;
      margin-bottom:120px;
     }

     .post-header-left{
        max-width:42rem;
       margin-left: auto;
       margin-right: auto;
     }

     .post-header-right{
      flex:35%;
       flex-grow: 0;
       flex-shrink: 1;
     }

     .img-wrapper{
      width:300px;
      height:400px;
      overflow:hidden;
      border-radius:27% 73% 76% 24% / 51% 39% 61% 49%;
     }

     .imgTest{
      width:600px;
     }

     .post-content{
      display:flex;
      flex-direction:row;
      justify-content: flex-start;
      width:1460px;
      margin-left: auto;
       margin-right: auto;
      flex-grow: 1;
      flex-basis:auto;
     }

     .post{
         margin-left: 0;
         margin-right: 0px;
         margin-top:20px;
     }
   }

   @media all and (min-width: 1738px) {
     .sidebar{
       flex:32%;
       flex-grow: 0;
       flex-shrink: 1;
       margin-top:0px;
       align-items:flex-end;
     }   
   }
</style> 
<!-- <style>
   .post-wrapper{
      display:flex;
      flex-direction:column-reverse;
      justify-content: flex-start;
      flex-grow: 1;
      width: 100%;
      flex-basis:auto;
    }
   

    .post{
      display:flex;
      flex-direction:column;
      justify-content: flex-start;
      width: 100%;
      margin:0px;
      flex-grow: 0;
    }

    .sidebar{
      flex:25%;
      padding: 0 1rem 0 0;
      flex-grow: 0;
      flex-shrink: 1;
    }

    h2{
        font-size:16px;
    }

    
    @media all and (min-width: 672px) {
      .post{
        max-width:42rem;
        margin-left: auto;
        margin-right: auto;
      }
    }

    @media all and (min-width: 1312px) {
      .post-wrapper{
        display:flex;
        flex-direction:row;
        justify-content: flex-start;
        flex-grow: 1;
        width: 100%;
        flex-basis:auto;
      }

      .post{
          margin-left: 0;
          margin-right: 0px;
      }
    }

    @media all and (min-width: 1738px) {
      .sidebar{
        flex:30%;
        flex-grow: 0;
        flex-shrink: 1;
        margin-top:50px;
      }   
    }
</style> -->