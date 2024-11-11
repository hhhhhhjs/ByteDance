import { createRouter, createWebHistory } from "vue-router";
import HomeComp from '../views/start/Hello.vue'
import loginComp from '../views/start/Login.vue'
import RestPas from '../views/start/resetpassword.vue'
import register from '@/views/register/index.vue'


const routes = [
    {path: '/', component: HomeComp},
    {path: '/login', component: loginComp},
    {path: '/resetpassword', component: RestPas},
    {path: '/register', component:register},
    // TODO 用户 id
    {path:'/user',component:()=>import('@/views/user/index.vue')}
    
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router