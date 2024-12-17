<script setup lang="ts">
import { ref, defineProps } from "vue";
import { useRouter } from "vue-router";
import sideSvg from "@/assets/sideNav/sideicon.vue";
import editSvg from "@/assets/sideNav/edit.vue";
import Conversionlist from "@/components/user/side/conversionList.vue";

type popper = 'dark' | 'light'
interface Props {
  themeColor: string;
  popperStyle: popper;
  iconColor: string;
  textColor: string;

}

const props = defineProps<Props>();
const router = useRouter();

// 主题色控制
const isdark = ref<boolean>(true);

// 侧边栏大小
const sideWidth = ref<string>("300px");


// 主题色切换
const changethemeColor = () => {
  if (isdark.value) {
    isdark.value = false;
  } else {
    isdark.value = true;
  }
};



// 关闭侧边栏函数
const changeSide = () => {
  if (sideWidth.value === "300px") {
    console.log("Closing sidebar...");
    sideWidth.value = "0px";
  } else {
    sideWidth.value = "300px";
  }
};

// 新建对话
const newChat = () => {
  router.push({
    path: "/user",
  });
}
</script>

<template>
  <div class="container" :style="{ backgroundColor: props.themeColor, width: '300px'}">
    <div class="nav">
      <div 
      class="sidebottom"
      @click="changeSide">
        <el-popover
          placement="right"
          trigger="hover"
          content="关闭侧边栏"
          :popper-style="{minWidth:'20px', width:'auto'}"
          :effect="props.popperStyle"
        >
          <template #reference>
            <div class="icon-background">
              <sideSvg :fill="props.iconColor" />
            </div>
          </template>
        </el-popover>
      </div>
      <div 
      class="editbottom"
      @click="newChat">
        <el-popover
          placement="right"
          trigger="hover"
          content="新对话"
          :popper-style="{minWidth:'20px', width:'auto'}"
          :effect="props.popperStyle"
        >
          <template #reference>
            <div 
            class="icon-background"
            >
              <editSvg 
              :fill="props.iconColor"
              />
            </div>
          </template>
        </el-popover>
      </div>
    </div>
    <div
      style="
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      "
    >
      <conversionlist 
      class="list"
      :textColor="props.textColor"
      :fill="props.iconColor"
      :popperStyle="props.popperStyle"
      ></conversionlist>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  transition: width 0.3s;
  height: 100vh;
}

.container.collapsed {
  width: 0;
}

.container.expanded {
  width: 300px;
}

.nav {
  display: flex;
  margin-top: 20px;
}

.sidebottom {
  width: 40px;
  height: 40px;
  border-radius: 5px;
  margin-left:20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;
}

.editbottom {
  width: 40px;
  height: 40px;
  border-radius: 5px;
  margin-left:150px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;
}

.icon-background {
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sidebottom:hover,
.editbottom:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.list {
  width: 300px;
  height: 800px;
  margin-left: 50px;
}
</style>