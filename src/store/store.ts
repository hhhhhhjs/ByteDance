import { defineStore } from 'pinia'
import { encryption } from '@/api/local/jwt'

export const useUserStore = defineStore('user',{
    state:()=>({
        name: '喝醉的威士忌' as string,
        id: '' as string,
        avatar: '' as string,
        kunkunId: '22222' as string,
    }),
    getters: {
        getAvatar: (state) => {
            return state.avatar
        },
        getName: (state) => {
            return state.name
        },
        getkunkunId: (state) => {
            return state.kunkunId
        }
    },
    actions: {
        setUsername(name: string) {
            this.name = name
            encryption({username: name})
        },
        setUserId(id: string) {
            this.id = id
            encryption({userid: id})
        },
        setAvatar(avatar: string) {
            this.avatar = avatar
        },
    },
})