import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LessonView from '../views/LessonView.vue';
import UnitView from '../views/UnitView.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/lesson/:id',
        name: 'lesson',
        component: LessonView
    },
    {
        path: '/lesson/:id/:unit',
        name: 'unit',
        component: UnitView
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/'
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
