<script setup lang="ts">
import settingSvg from '@/assets/personInfo/personSetting.vue'
import logout from '@/assets/personInfo/logout.vue'
import { defineProps, onMounted, ref} from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/store/store';

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
            islogout.value = true;
        }
    }
]

// 退出登录弹窗
const islogout = ref<boolean>(false);

const windowhandle = () => {
    router.push({
        path: '/login'
    })
}


// 创建 store
const userStore = useUserStore();

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
        <Teleport to="body">
      <el-dialog 
      v-model="islogout" 
      width="500"
      :show-close="false"
      >
        <div class="popwindow">
          <logoutWarnIcon></logoutWarnIcon>
          <h2 style="margin-left:20px">确认退出登录？</h2>
        </div>
        <p style="margin: 0 auto; width:350px">退出登录不会丢失任何数据，你仍可以登录此账号。</p>
        <template #footer>
          <div class="popwindowFooter">
            <el-button 
            class="popwindowFooterCancel"
            color="#f4f4f5"
            @click="islogout = false"
            >
                <span>取消</span>
            </el-button>
            <el-button
            color="#fb4520"
            class="popwindowFooterCancel"
            @click="windowhandle"
            >
                <span>退出登录</span>
            </el-button>
          </div>
        </template>
      </el-dialog>
    </Teleport>
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