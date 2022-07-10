<script>
export let white = false
let clazz = ""
export { clazz as class }
</script>
<hr class="w-full my-1 {clazz}" class:text-primary={!white} class:text-white={white}/>