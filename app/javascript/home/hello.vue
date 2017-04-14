<template>
  <div id="hello">
    <p>{{ message }}</p>
    <span>{{ info }}</span>
  </div>
</template>

<script>
module.exports = {
  data: function () {
    return {
      message: "Home, Hello!",
      info: 'test compiled js reload'
    }
  }
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
