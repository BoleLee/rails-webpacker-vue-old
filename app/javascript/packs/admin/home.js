// import Home from '../../admin/home/index.js';

// document.addEventListener('DOMContentLoaded', () => {
//   Home
// });


import '../../admin/style-theme/index.less';


import Hello from '../../shared/hello.vue';
import TestModal from '../../admin/home/modal1.vue';


const index = new Vue({
  el: '#home',
  components: { 
    Hello,
    TestModal
  },
  data: {
    visible: false
  },
  methods: {
    toggle: function () {
      this.visible = this.visible ? false : true;
    }
  }
})



