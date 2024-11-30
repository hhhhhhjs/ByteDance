import { defineStore } from 'pinia'

export const useUserStore = defineStore('user',{
    state:()=>({
        name: '' as string,
        id: '' as string,
        avatar: '' as string,
    }),
    getters: {
        getAvatar: (state) => {
            return state.avatar
        },
    },
    actions: {
        setUser(name: string, id: string) {
            this.name = name
            this.id = id
        },
        setAvatar(avatar: string) {
            this.avatar = avatar
        },
    },
})