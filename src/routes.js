import { createRouter, createWebHashHistory } from "vue-router";
import DashboardVue from "./screens/Dashboard.vue";
import LoginVue from "./screens/Login.vue";
import RegistrationVue from "./screens/Registration.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: DashboardVue },
        { path: '/login', component: LoginVue },
        { path: '/registration', component: RegistrationVue }
    ],
});

export default router;