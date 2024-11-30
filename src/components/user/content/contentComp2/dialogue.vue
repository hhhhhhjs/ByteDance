<script setup lang="ts">
import robotSvg from '@/assets/sideNav/gpt.vue'
import { ref, defineProps } from "vue";
interface obj {
    user: string;
    robot: string;
}

interface Props {
    textColor: string;
    dialogColor: string;
}
const props = defineProps<Props>();
const messageArr = ref<obj[]>([]);


// 所有的数据都需要从后端获取
messageArr.value = [
    { user: "你好", robot: "你好,我是智能 ai 助手，请问有什么需要帮助的？" },
    { user: '哈哈', robot: '你看起来很开心，可以跟我分享一下嘛'},
    { user: '天下最牛逼的it培训公司是哪家?', robot:'镇江英格网络科技有限公司'},
    { user: '我是马一鸣，你叫什么名字?', robot: '我叫马一鸣'},
]
</script>
<template>
    <div class="dialog-container">
        <div 
        class="dialog" :style="{ color: props.textColor }" v-for="item in messageArr" :key="item.user">
            <div class="user">
                <div 
                class="usermessage"
                :style="{ backgroundColor: props.dialogColor}"
                >{{ item.user }}</div>
            </div>
            <div class="robot">
                <div class="robotcontent">
                    <div class="roboticon">
                        <robotSvg :fill="props.textColor"></robotSvg>
                    </div>
                    <span>{{ item.robot }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.dialog-container{
    width: 52%;
    height: 100%;
}

.dialog {
}

.user {
    display: flex;
    justify-content: flex-end;
    width: auto;
    height: auto;
}

.usermessage {
    width: auto;
    height: auto;
    padding: 10px 20px;
    border-radius: 25px;
    background-color:red ;
}

.robot {
    width: auto;
    height: auto;
    padding: 10px 20px;
}

.roboticon {
    width: 28px;
    height: 28px;
    border: 1px solid #504d4d;
    border-radius: 50%;
    margin-right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    
}

.robotcontent {
    display: flex;
    align-items: center;
}


</style>