<template>
    <div>
        <div class="inputBox shadow">
            <input type="text" v-model="newTodoItem" @keyup.enter="addTodo" />

            <button class="addContainer" @click="addTodo">
                <i class="fas fa-plus addBtn"></i>
            </button>
        </div>

        <div>
            <button id="show-modal" @click="showModal = true">Show Modal</button>
            <Modal v-if="showModal" @close="showModal = false">
                <h3 slot="header">custom header</h3>
                <div slot="body">sadf</div>
            </Modal>
        </div>
    </div>
</template>

<script>
import Modal from './common/Modal.vue'

export default {
    name: 'TodoInput',
    comments: { Modal },
    data: () => ({
        newTodoItem: '',
        showModal: false
    }),
    methods: {
        addTodo() {
            if (this.newTodoItem !== '') {
                this.$emit('addItem', this.newTodoItem);
                this.cleaInput();
            }
        },
        cleaInput() {
            this.newTodoItem = '';
        },
    },
};
</script>

<style lang="scss" scoped>
input:focus {
    outline: none;
}
.inputBox {
    background: #fff;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
    
    input {
        width: calc(100% - 48px);
        height: 100%;
        border-style: none;
        font-size: 0.9rem;
    }
}
.addContainer {
    float: right;
    background: linear-gradient(to right, #6478fb, #8763fb);
    display: block;
    width: 3rem;
    height: 100%;
    border-radius: 0 5px 5px 0;
}
.addBtn {
    color: #fff;
    vertical-align: middle;
}
</style>
