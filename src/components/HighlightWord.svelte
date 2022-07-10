<script>
export let uppercase = false//: Boolean
export let primary = false//: Boolean
export let bold = false//: Boolean
</script>
<span 
  class:uppercase
  class:text-primary={primary}
  class:text-secondary={!primary}
  class:font-bold={bold}>
  <slot></slot>
</span>
