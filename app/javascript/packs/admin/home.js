
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



