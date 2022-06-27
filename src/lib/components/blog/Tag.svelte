<script>
    export let tag;
</script>

<div class="tag">
    {tag}
</div>

<style lang="scss">
    .tag{
        display:flex;
        align-items:center;
        justify-content:center;
        background:$gunmetal;
        color:var(--text-muted);
        padding:4px 6px;
        font-size:14px;
    }

</style>