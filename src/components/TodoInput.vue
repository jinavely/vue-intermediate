<template>
    <div class="inputBox shadow">
        <input type="text" v-model="newTodoItem" @keyup.enter="addTodo" />

        <button class="addContainer" @click="addTodo">
            <i class="fas fa-plus addBtn"></i>
        </button>

        <Modal v-if="showModal" @close="showModal = false">
            <template #header>
                <h3>경고</h3>
            </template>
            <template #body>
                <p>빈 공간입니다. 입력해주세요</p>
            </template>
        </Modal>
    </div>
</template>

<script>
import Modal from '../components/common/Modal.vue'

export default {
    name: 'TodoInput',
    components: { Modal },
    data: () => ({
        newTodoItem: '',
        showModal: false
    }),
    methods: {
        addTodo() {
            if (this.newTodoItem !== '') {
                this.$store.commit('addOneItem', this.newTodoItem.trim())
                this.cleaInput();
            } else {
                this.showModal = !this.showModal;
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
