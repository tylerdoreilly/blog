<script context="module">
	export const load = async({ fetch, url }) => {
    const posts = await fetch('/api/posts.json')
    const allPosts = await posts.json()

    return {
      props: {
        path: url.pathname,
        fullUrl:url.href,
        posts: allPosts
      }
    }
  }
</script>

<script>
    import '$lib/styles/styles.scss'
	  import AppHeader from '$lib/components/AppHeader.svelte'
    import AppFooter from '$lib/components/AppFooter.svelte'
    import PageTransition from '$lib/components/PageTransition.svelte'
    import { currentPage, fullPath, allPosts } from '$lib/assets/js/store'

    export let fullUrl
    export let path
    export let posts

    $:currentPage.set(path);
    $:fullPath.set(fullUrl);
    $allPosts = [...posts];

</script>

<svelte:head>
	<title>Tyler David O'Reilly</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Literata:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Alegreya+Sans:ital,wght@0,100;0,300;0,400;0,500;0,700;0,800;0,900;1,100;1,300;1,400;1,500;1,700;1,800;1,900&display=swap');
  </style>
</svelte:head>


<AppHeader/>
  <div class="layout">
    <main id="main">
      <PageTransition url={path}>
        <slot />
      </PageTransition>
      <!-- <ul class="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul> -->
    </main>
  </div>
<AppFooter/>
