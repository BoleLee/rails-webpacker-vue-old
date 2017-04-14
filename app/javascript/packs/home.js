import Vue from 'vue/dist/vue.esm'
import Hello from '../home/hello.vue';

document.addEventListener('DOMContentLoaded', () => {
  // Hello
  document.body.appendChild(document.createElement('hello'))
  const hello = new Vue({
    el: 'hello',
    template: '<Hello/>',
    components: { Hello }
  })

  console.log(hello) 
});


