<blockquote class="blockquote">
    <slot />  
</blockquote>

<style>
    .blockquote{
        border-left: 6px solid rgba(152, 193, 217, 1);
        padding-left:25px;
        margin: 30px 40px;
    }

    .blockquote :global(.post-paragraph){
        margin:10px 0px;
        font-style: italic;
        font-size:1.6rem;
        line-height:1.4;
        font-weight:500;
    }

</style>