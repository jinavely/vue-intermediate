<template>
    <div>
        <ul>
            <li v-for="(todoItem, index) in this.todoItems" :key="index" class="shadow">
                <i class="checkBtn fas fa-check" :class="{ 'checkBtnCompleted': todoItem.completed }" @click="toggleComplete({todoItem, index})"></i>
                <span :class="{ 'textCompleted': todoItem.completed }">{{ todoItem.item }}</span>
                <button class="removeBtn" @click="removeTodo({todoItem, index})">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
    name: 'TodoList',
    data: () => {
        return {}
    },
    computed: {
        ...mapGetters({
            todoItems: 'storedTodoItems'
        })
    },
    methods: {
        ...mapMutations({
            removeTodo: 'removeOneItem',
            toggleComplete: 'toggleItem'
        })
    },
};
</script>

<style lang="scss" scoped>
ul {
    li {
        display: flex;
        align-items: center;
        min-height: 50px;
        height: 50px;
        margin: 0.5rem 0;
        padding: 0 0.9rem;
        background: #fff;
        border-radius: 5px;
    }
    .checkBtn {
        line-height: 45px;
        color: #62acde;
        margin-right: 5px;
    }
    .checkBtnCompleted {
        color: #b3adad;
    }
    .textCompleted {
        color: #b3adad;
        text-decoration: line-through;
    }
    .removeBtn {
        margin-left: auto;
        color: #de4343;
    }
}
</style>
