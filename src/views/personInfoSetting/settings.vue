<script setup lang="ts">
import personSettingIcon from "@/assets/personInfosettings/personedit.vue";
import personLogoutIcon from "@/assets/personInfosettings/logout.vue";
import personArrowIcon from "@/assets/personInfosettings/arrow.vue";
import logoutWarnIcon from "@/assets/personInfosettings/logoutwarn.vue";
import { defineProps, ref, Teleport } from "vue";
import { useRoute, useRouter } from "vue-router";

interface Props {
  textColor: string;
  optionsColor: string;
}

// 动态数组中对象的接口
interface dynamicObject {
  icon: any;
  text: string;
  path?: string;
}

const props = defineProps<Props>();

const router = useRouter();
const route = useRoute();
// 外层容器
const outer = ref<HTMLDivElement | null>(null);

// 获取 img dom
const personImg = ref<HTMLImageElement>();

// 控制退出登录弹窗
const islogout = ref<boolean>(false);


// 弹窗处理函数
const windowhandle = () => {
    // TODO：配合后端处理退出逻辑
    console.log("退出成功")
    islogout.value = false;
}
 
// 处理函数
const handle = (e: Event) => {
  const target = e.target as HTMLInputElement;
  if (target.files && target.files[0]) {
    console.log(target.files[0].name); // 正确地访问文件
    if (personImg.value) {
      personImg.value.src = URL.createObjectURL(target.files[0]);
    }
  }
};

// 动态加载数组
const dynamicList = [
  {
    icon: personSettingIcon,
    text: "编辑个人资料",
    path: `${route.path}/profile`,
  },
  {
    icon: personLogoutIcon,
    text: "退出登录",
  },
];

// 点击事件
const clickItem = (element: dynamicObject) => {
  if (element.path) {
    router.push(element.path);
  } else {
    islogout.value = true;
  }
};
</script>

<template>
  <div class="settingContainer" ref="outer">
    <div class="nav">
      <div class="personIcon">
        <img
          ref="personImg"
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201903%2F10%2F20190310234608_tlavw.jpg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1735204107&t=846dfeac2f540c6870d51ef699d14be9"
          alt="用户头像"
        />
        <!-- 这里传递 userid -->
        <p
          class="personName"
          :style="{
            color: props.textColor,
            fontSize: '20px',
            marginTop: '30px',
          }"
        >
          喝醉的威士忌
        </p>
      </div>
      <!-- <input
            @change="handle"
            class="Input"
            type="file"
            /> -->
      <div class="options" :style="{ backgroundColor: props.optionsColor }">
        <div
          v-for="option in dynamicList"
          :key="option.text"
          class="optionItems"
        >
          <div class="optionItem" @click="clickItem(option)">
            <component :is="option.icon"></component>
            <span :style="{ marginLeft: '20px', color: props.textColor }">{{
              option.text
            }}</span>
            <personArrowIcon class="arrow"></personArrowIcon>
          </div>
        </div>
      </div>
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
.settingContainer {
  width: 600px;
  height: auto;
  margin: 0 auto;
  padding: 10px 20px;
  transform: translate(0, 50px);
}

.nav {
  height: 120px;
}

.personIcon {
  display: flex;
}

img {
  display: block;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
}

.personName {
  margin-left: 20px;
  font-size: 18px;
}

.options {
  width: 100%;
  margin-top: 30px;
  border-radius: 10px;
}

.optionItem {
  display: flex;
  padding: 12px;
  border-radius: 20px;
  cursor: pointer;
  align-items: center;
}

.optionItems {
  position: relative;
}

.arrow {
  position: absolute;
  right: 20px;
}

.optionItems:hover{
  background-color: #3a3a3a;
}

.popwindow {
  display: flex;
  align-items: center;
}

.popwindowFooter {
    display: flex;
    justify-content: flex-end;
}

.popwindowFooterCancel {
  margin-right: 20px;
  cursor: pointer;
  border-radius: 13px;
}

.el-button {
    --el-button-hover-text-color:red
}
</style>