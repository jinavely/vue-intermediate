<template>
    <div class="main">
        <TodoHeader />
        <TodoInput />
        <TodoList />
        <TodoFooter />
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
    methods: {
    },
};
</script>

<style lang="scss" scoped>
.main {
    width: 500px;
    margin: 0 auto;
}
</style>
