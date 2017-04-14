<template>
  <div id="hello">
    <p>{{ message }}, Hello!</p>
  </div>
</template>

<script>
module.exports = {
  data: function () {
    return {
      message: "Home"
    }
  },
  props: ['message']
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
span {
  display: block;
  text-align: center;
}
</style>
