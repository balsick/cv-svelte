<script>
let white = false
let clazz = ""
export { clazz as class, white }
</script>
<hr class="w-full my-0 {clazz} h-px mb-4" class:border-primary={!white} class:border-white={white}/>