<script>
    import Tags from '$lib/components/blog/Tags.svelte'  
    export let title;
    export let pub;
    export let updated;
    export let categories;
    export let img;
</script>

<div class="post-header">
    <!-- <div class="post-header__img">
        <img class="imgTest" src={img} alt="{title}">
    </div> -->
    <h1 class="post-header__title">{title}</h1>
    <div class="post-header__meta">
        <div class="meta">
            <b>Published:</b> {pub}<br>
            <b>Updated:</b> {updated}<br>
        </div>    
    </div>
    <div class="post-header__categories">
        <Tags tags={categories} />
    </div>
</div>


<style>
    .post-header{
        display:flex;
        flex-direction:column;
        margin-bottom:0px;
    }
  
    .post-header__img{
        max-height:400px;
        overflow:hidden;
        align-items:center;
    }

    .imgTest{
      object-fit: cover;
      width: 100%;
      align-items:center;
    }

    .post-header__title{
        font-size:2rem;
        font-family: 'Literata', serif;
        font-weight:300;
        line-height: 1.2;
        margin-bottom:40px;
    }


    .post-header__meta {
        display:flex;
        flex-direction:row;
        justify-content: flex-start;
        margin-bottom:35px;
    }

    .meta{
        border-top:1.5px solid #fff;
        font-size:16px;
        padding-top:8px;
        line-height:25px;
    }

    .post-header__categories{
        margin-bottom:35px;
    }

    @media all and (min-width: 672px) {
        .post-header__title{
            font-size:2.6rem;
        }
      }

    @media all and (min-width: 1312px) {
        .post-header__title{
            width: calc(100% + 8vw);
            max-width: unset;
            font-size: calc(1.8rem + 1.5vw);
            margin-bottom:55px;
        }  
    }
</style>
