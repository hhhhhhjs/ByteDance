import { createRouter, createWebHistory } from "vue-router";
import HomeComp from '../views/start/Hello.vue'
import loginComp from '../views/start/Login.vue'
import RestPas from '../views/start/resetpassword.vue'


const routes = [
    {path: '/', component: HomeComp},
    {path: '/login', component: loginComp},
    {path: '/resetpassword', component: RestPas}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router