import { defineStore } from 'pinia'


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
            localStorage.setItem('username', this.name)
        },
        setUserId(id: string) {
            this.id = id
            localStorage.setItem('userId', this.id)
        },
        setAvatar(avatar: string) {
            this.avatar = avatar
        },
    },
})