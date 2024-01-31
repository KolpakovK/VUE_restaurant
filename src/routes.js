import { createRouter, createWebHashHistory } from "vue-router";
import DashboardVue from "./screens/Dashboard.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: DashboardVue }
    ],
});

export default router;