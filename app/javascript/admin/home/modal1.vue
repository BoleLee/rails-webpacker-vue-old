<template>
    <Modal
        v-model="modal1"
        title="普通的Modal对话框标题"
        @on-ok="ok"
        @on-cancel="cancel">
        <p>对话框内容</p>
        <p>对话框内容</p>
        <p>对话框内容</p>
    </Modal>
</template>
<script>
module.exports = {
    data () {
        return {
            modal1: false
        }
    },
    // props: ['modal1'],
    methods: {
        ok () {
            console.log('点击了确定');
        },
        cancel () {
            console.log('点击了取消');
        }
    }
}
</script>
