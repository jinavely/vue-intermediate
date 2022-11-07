<template>
    <div id="app">
        <TodoHeader />
        <router-view></router-view>
    </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
export default {
    name: 'App',
    components: { TodoHeader },
    data: () => ({}),
};
</script>

<style lang="scss" scoped></style>
