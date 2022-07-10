<script>
import ST from './SectionTitle.svelte'
import CVLS from './CVSectionList.svelte'
export let icon//fa icon
export let title //String
export let noDivider = false//: Boolean
export let data = null//: Object
</script>

<ST icon={icon}>{ title }</ST>
{#if !data}
<slot></slot>
{:else}
<CVLS data={data}/>
{/if}
{#if !noDivider}
<hr class="w-100 mt-2"/>
{:else}
<div class="pt-2" v-else ></div>
{/if}