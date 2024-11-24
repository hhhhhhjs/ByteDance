import { createRouter, createWebHistory } from "vue-router";
import HomeComp from '../views/start/Hello.vue'
import loginComp from '../views/start/Login.vue'
import RestPas from '../views/start/resetpassword.vue'
import register from '@/views/register/index.vue'
import path from "path";



const routes = [
    {path: '/', component: HomeComp},
    {path: '/login', component: loginComp},
    {path: '/auth/resetpassword', component: RestPas},
    {path: '/auth/register', component:register},
    // TODO 用户 id
    {
        path:'/user',
        component:()=>import('@/views/user/index.vue'),
        // 右侧内容
        children:[
            // 默认内容
            {
                path:'',
                component:()=>import('@/components/user/content/contentComp/welcome.vue')
            },

            {
                path:':dialogId',
                component:()=>import('@/components/user/content/contentComp/index.vue')
            },
        ]
    },
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router