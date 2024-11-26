<script setup lang="ts">
import settingSvg from '@/assets/personInfo/personSetting.vue'
import logout from '@/assets/personInfo/logout.vue'
import { defineProps, } from 'vue';
import { useRouter } from 'vue-router';

interface Props{
    textColor:string;
    backgroundColor:string;
}

interface optionObj {
    icon: any;
    describe: string;
    handle: () => void;
}
const props = defineProps<Props>();

const router = useRouter();
const options: optionObj[] = [
    {
        icon: settingSvg,
        describe: '设置',
        handle: () => {
            router.push({
                path:'/user/settings'
            })
        }
    },
    {
        icon: logout,
        describe: '退出登录',
        handle: () => {
            console.log('退出登录')
        }
    }
]
</script>

<template>
    <div 
    class="personInfoContainer"
    :style="{ 
        backgroundColor: props.backgroundColor,
        color: props.textColor,
        }">
        <div 
        v-for="option in options" 
        :key="option.describe"
        class="personInfoItem"
        @click="option.handle"
        >
            <component 
            :is="option.icon" 
            :fill="props.textColor"
            ></component>
            <p style="margin-left:10px">{{ option.describe }}</p>
        </div>
    </div>
</template>

<style scoped>
.personInfoContainer{
    font-size:14px;
    width: 100px;
    height: auto;
    padding: 10px 15px;
    border-radius: 15px;
    border: 1px solid #353535;
}

.personInfoItem {
    border-radius: 10px;
    height: 30px;
    padding:5px;
    display: flex;
    align-items: center;
}

.personInfoItem:hover {
    background-color: rgba(255, 255, 255, 0.1);
}
</style>