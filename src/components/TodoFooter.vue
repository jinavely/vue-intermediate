<template>
    <div class="clearAllContainer">
        <button class="clearAllBtn" @click="clearTodoAll">Clear All</button>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
    name: 'TodoFooter',
    data: () => ({}),
    methods: {
        ...mapMutations(['clearTodoAll'])
    },
};
</script>

<style lang="scss" scoped>
.clearAllContainer {
    width: 8.5rem;
    height: 50px;
    line-height: 50px;
    background-color: #fff;
    border-radius: 5px;
    margin: 20px auto 0 auto;
}
.clearAllBtn {
    color: #830367;
    display: block;
    width: 100%;
    height: 100%;
}
</style>
