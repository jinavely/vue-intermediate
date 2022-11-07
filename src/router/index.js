import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '../pages/Main.vue';
import NotFound from '../pages/NotFound.vue';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Main,
        },
        {
            path: '/*',
            name: 'NotFound',
            component: NotFound,
        },
    ],
});
