import Vue from 'vue/dist/vue';
// import iView from 'iview/dist/iview';
// import 'iview/dist/styles/iview.css';

// Vue.use(iView);


import Hello from '../../shared/hello.vue';
// import Modal1 from '../../admin/home/modal1.vue';


const index = new Vue({
  el: '#home',
  components: { 
    Hello,
    // Modal1
   }
})

