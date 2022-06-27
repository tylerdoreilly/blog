<script>
    export let alt;
    export let img;
</script>

<div class="post-image">
  <div class="img-wrapper">
    <img class="imgTest" src={img} alt="{alt}"/>
  </div>
 <!-- <div class="type"></div> -->
 <!-- <div class="bg-two"></div> -->
 <svg  class="bg-two" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path  d="M27.2,-32.1C39.1,-22.3,55.5,-17.5,65.9,-4.8C76.3,8,80.7,28.6,72.6,41.2C64.5,53.9,43.7,58.5,27.6,55.8C11.4,53,-0.2,42.7,-18.2,40.4C-36.1,38,-60.4,43.4,-64.4,36.9C-68.5,30.5,-52.3,12,-43.7,-2.7C-35.1,-17.4,-34.1,-28.4,-28.1,-39.3C-22.1,-50.1,-11,-60.8,-1.7,-58.7C7.6,-56.7,15.2,-41.9,27.2,-32.1Z" 
  transform="translate(100 100)" />
</svg>
</div>


<style lang="scss">

 @media all and (min-width: 1312px) {

  .post-image{
    width:300px;
    height:400px;
    position:relative;
    max-width: unset;

    .type{
      position:absolute;
      top:-20px;
      left:-91px;
      z-index:3;
      width:410px;
      height:410px;
      background:$lazer-green;
      border-radius:43% 37% 29% 58% / 36% 36% 46% 30% ;
    }

    .bg-two{
      position:absolute;
      bottom:-190px;
      left:-350px;
      z-index:2;
      width:800px;
      height:800px;
      fill:$gunmetal;
      opacity:0.6;
    }
  }
    .img-wrapper{
      width:400px;
      height:400px;
      overflow:hidden;
      position:absolute;
      top:-20px;
      left:-90px;
      z-index:4;
      border-radius:43% 37% 29% 58% / 36% 36% 46% 30% ;
      background:$dark-gunmental;
    //  border-radius:27% 73% 76% 24% / 51% 39% 61% 49%;
    }

    .imgTest{
      width:400px;
     height:400px;
    // opacity:0.2;
    }

  }
</style>
 