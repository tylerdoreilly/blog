<script>
     import { fade } from 'svelte/transition'

    //  const animate = (node, args) =>
	// 	args.visible ? fade(node, args) : scale(node, args);
    function handleMouseOver(e) {
		if(visible === true){
            visible = false;
        }
	}

	function handleMouseOut(e) {
        visible = true;
	}

    let visible = true;
</script>

<a href="/" class="brand">
    <span class="brand__left">O'</span>
    <span class="brand__right" on:mouseover={handleMouseOver} on:mouseout={handleMouseOut}>
        <sapn>
            {#if visible}
                <span in:fade={{ duration:350, delay:100}} out:fade={{duration:50}}>Really?</span>
            {:else}
                <span in:fade={{ duration:350, delay:100}} out:fade={{duration:50}}>Reilly</span>            
            {/if}
        </sapn>
       
    </span>
</a>

<style lang="scss">

    .brand{
        font-size:30px;
        font-weight:bold;

        &__left{
            color:$lazer-green;
        }

        &__right{
            color:$dark-sky-blue;
        }
    }

</style>