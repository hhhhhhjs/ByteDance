import { createRouter, createWebHistory } from "vue-router";
import HomeComp from '../views/start/Hello.vue'
import LoginComp from '../views/start/Login.vue'
import RestPas from '../views/start/resetpassword.vue'
import register from '@/views/register/index.vue'
import personSettings from '@/views/personInfoSetting/settings.vue'
import personProfile from '@/views/personInfoSetting/profile.vue'


const routes = [
    {path: '/', component: HomeComp},
    {path: '/login', component: LoginComp},
    {path: '/resetpassword', component: RestPas},
    {path: '/register', component:register},
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
            {
                path:'settings',
                component: personSettings,
            },
            // 因为项目较小，加上替换的 router-view 和 settings 是同一个页面，所以并没有使用 子路由
            {
                path:'settings/profile',
                component: personProfile,
            }
        ]
    },
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router