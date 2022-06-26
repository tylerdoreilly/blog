<script>
    export let src;
    export let alt;
    console.log('img', src + alt)
  </script>
  
  <div class="inline-img-wrapper">
    <img src={src} class="inline-post-img" alt={alt}/>
  </div>


  <style>
    .inline-img-wrapper{
        max-height:400px;
        width: calc(100% + 15vw);
        max-width: unset;
        margin-left:-65px;
        margin-top:40px;
        overflow-y:hidden;
    }

    .inline-post-img{
        max-width:800px; 
    }
  </style>