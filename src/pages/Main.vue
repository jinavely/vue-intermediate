<template>
    <div>
        <TodoHeader />
        <TodoInput v-on:addItem="addOneItem" />
        <TodoList :todoItems="todoItems" v-on:removeItem="removeOneItem" v-on:toggleItem="toggleItem" />
        <TodoFooter v-on:clearTodoAll="clearTodoAll" />
    </div>
</template>

<script>
import TodoFooter from '../components/TodoFooter.vue';
import TodoHeader from '../components/TodoHeader.vue';
import TodoInput from '../components/TodoInput.vue';
import TodoList from '../components/TodoList.vue';
export default {
    name: 'Main',
    components: {TodoInput, TodoList, TodoFooter, TodoHeader},
    data() {
        return {
            todoItems: []
        };
    },
    created() {
        if (localStorage.length > 0) {
            for (let i=0;i < localStorage.length;i++) {
                if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
                    this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                }
            }
        }
    },
    methods: {
        addOneItem (todoItem) {
            const obj = { completed: false, item: todoItem }
            localStorage.setItem(todoItem, JSON.stringify(obj));
            this.todoItems.push(obj);
        },
        removeOneItem (todoItem, index) {
            localStorage.removeItem(todoItem.item);
            this.todoItems.splice(index, 1);
        },
        toggleItem(todoItem, index) {
            this.todoItems[index].completed = !this.todoItems[index].completed;
            localStorage.removeItem(todoItem.item);
            localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
        },
        clearTodoAll() {
            localStorage.clear();
            this.todoItems = [];
        }
    },
};
</script>

<style lang="scss" scoped></style>
