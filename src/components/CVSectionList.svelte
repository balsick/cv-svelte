<script>
  import Fa from 'svelte-fa'
  export let data //Object
</script>

<div class="grid grid-cols-12 auto-cols-auto gap-x-2 align-items-center">
  {#each data as {icon, text}, i (i)}
    <Fa icon={icon} class="col-span-1 my-auto"/>
    <span class="col-start-2 col-span-11">{ text }</span>
    <!-- {#if i % 2}
    <div class="w-full" ></div>
    {:else}
    <div class="w-full d-none d-sm-block" ></div>
    {/if} -->
  {/each}
</div>