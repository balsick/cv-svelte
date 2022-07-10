<script>
  import Fa from 'svelte-fa/src/fa.svelte'
  export let icon// fa icon
</script>
<h5 class="flex font-bold w-full uppercase text-xl"><Fa icon={icon} />&nbsp;&nbsp;<slot></slot></h5>