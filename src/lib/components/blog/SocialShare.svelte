<script>
    import Twitter from '../icons/social/Twitter.svelte';
    import Facebook from '../icons/social/Facebook.svelte';
    import Linkedin from '../icons/social/Linkedin.svelte';

    export let url;
    export let postTitle;

    const facebookUrl = `https://www.facebook.com/sharer.php?u=[${url}]`;
    const twitterUrl = `https://twitter.com/share?url=[${url}]&text=[${postTitle}]&via=[via]&hashtags=[hashtags]`;
    const linkedinUrl = `https://www.linkedin.com/shareArticle?url=[${url}]&title=[${postTitle}]`;
</script>

<div class="social-share">
    <h1 class="social-share__title">Share</h1>
    <ul class="social-share__list">
        <li class="social-share__list-item">
            <a href={facebookUrl} alt="facebook-share"><Facebook /> </a>
        </li>
        <li class="social-share__list-item">
            <a href={twitterUrl} alt="facebook-share"><Twitter /> </a>
        </li>
        <li class="social-share__list-item">
            <a href={linkedinUrl} alt="facebook-share"><Linkedin /> </a>
        </li>
    </ul>
</div>


<style>
    .social-share{
        display:flex;
        flex-direction:column;
        max-width:350px;
    }

    .social-share__title{
        font-size:1.3rem;
    }

    .social-share__list{
        display:flex;
        flex-direction:row;
        list-style-type: none;  
        gap:15px;
        padding:0px;
    }

    .social-share__list-item{
        flex-direction:row;
        margin-top:0px;
    }

    .post-title{
        font-size:1.2rem;
    }
</style>