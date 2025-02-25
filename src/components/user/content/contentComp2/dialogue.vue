<script setup lang="ts">
import robotSvg from "@/assets/sideNav/gpt.vue";
import { ref, defineProps, onMounted, watch, nextTick } from "vue";

interface obj {
  user: string;
  robot?: string;
}

interface Props {
  textColor: string;
  dialogColor: string;
  userQuestion: string;
  Botanswer: string;
}
const props = defineProps<Props>();
const messageArr = ref<obj[]>([]);

// 获取 scrollbar dom

const scrollbarRef = ref(null);

// 机器人回复
const robot = ref<string>("");

// 所有的数据都需要从后端获取
messageArr.value = [
  { user: "你好", robot: "你好,我是智能 ai 助手，请问有什么需要帮助的？" },
  { user: "哈哈", robot: "你看起来很开心，可以跟我分享一下嘛" },
];

// 滚动条自动下拉函数
const scrollbarAutoScroll = () => {
  nextTick(() => {
      if (scrollbarRef.value) {
        const container = scrollbarRef.value.$el.querySelector(
          ".el-scrollbar__wrap"
        );
        container.style.scrollBehavior = "smooth"; // 添加平滑滚动效果
        container.scrollTop = container.scrollHeight;
      }
    });
};

watch(
  () => props.userQuestion,
  async(newvalue) => {
    messageArr.value.push({
      user: newvalue
    });
    scrollbarAutoScroll()
  }
);

watch(() => props.Botanswer, (newvalue) => {
  console.log('监听一下')
  if(newvalue){
    messageArr.value[messageArr.value.length - 1].robot = newvalue;
    scrollbarAutoScroll()
  }
});
</script>
<template>
  <el-scrollbar ref="scrollbarRef" class="scrollbarList">
    <div class="outer">
      <div class="dialog-container">
        <div
          class="dialog"
          :style="{ color: props.textColor }"
          v-for="item in messageArr"
          :key="item.user"
        >
          <div class="user">
            <div
              class="usermessage"
              :style="{ backgroundColor: props.dialogColor }"
            >
              {{ item.user }}
            </div>
          </div>
          <div class="robot">
            <div class="robotcontent">
              <div class="roboticon">
                <robotSvg :fill="props.textColor"></robotSvg>
              </div>
              <p style="margin-top:5px">{{ item.robot }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </el-scrollbar>
</template>
<style scoped>
.outer {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
.dialog-container {
  width: 52%;
  height: 100%;
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
  background-color: red;
}

.robot {
  width: auto;
  height: auto;
  padding: 10px 20px;
  margin-top: 30px;
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
}
</style>