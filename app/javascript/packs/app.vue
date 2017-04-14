<template>
  <div id="app">
    <p>{{ message }}</p>
  </div>
</template>

<script>
module.exports = {
  data: function () {
    return {
      message: "Home? Help? test compiled Hello Vue!"
    }
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
