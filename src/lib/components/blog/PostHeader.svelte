<script>
    export let title;
    export let pub;
    export let updated;
    export let excerpt;
    export let img;
</script>

<div class="post-header">
    <div class="post-header__meta">
        <div class="meta">
            {pub}
        </div>    
    </div>
    <h1 class="post-header__title">{title}</h1>
    <p class="post-header__excerpt">{excerpt}</p>
    <p class="type">Music</p>
</div>


<style lang="scss">
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
        margin-top:10px;
    }

    .post-header__excerpt{
        color:$txt-color-muted;
    }

    .post-header__meta {
        display:flex;
        flex-direction:row;
        justify-content: flex-start;
        margin-bottom:0px;
    }

    .meta{
        border-top:1.5px solid #fff;
        font-size:18px;
        padding-top:8px;
        line-height:25px;
        margin-left:4px;
    }

    .type{
        color:$lazer-green;
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
