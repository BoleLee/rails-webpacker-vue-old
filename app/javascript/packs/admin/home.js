import Vue from 'vue/dist/vue.esm'
import Hello from '../../shared/hello.vue';

document.addEventListener('DOMContentLoaded', () => {

  const index = new Vue({
    el: '#home',
    components: { Hello }
  })


});


