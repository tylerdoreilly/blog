
<script>
    import RotatingText from '$lib/components/RotatingText.svelte';
</script>


<section class="layout-center">  
    <div class="intro">
        <div class="intro_headline">
            <h1>Hey I'm Ty</h1>
        </div>
        <RotatingText />
    </div> 
</section>



<style lang="scss">
   
    .intro {
       display:flex;
       justify-content: center;
       flex-direction:column;
       align-content:center;
       width:1200px;

       h1{
        font-size: 6vw;
        margin-bottom:25px;
        font-family: 'Literata', serif;
        font-weight:600;
        }
    }

   .bg-img{
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index:1;
    opacity:0.2;
    width:100%;
    height:100%
   }

</style>
