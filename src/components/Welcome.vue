<template>
    <div>
      <h3>welcome</h3>
    </div>
</template>

<script>
export default {
  created () {
    const href = window.location.href
    const index = href.indexOf('?') + 1
    console.log(href.substring(index))
  }
}
</script>

<style scoped>

</style>
