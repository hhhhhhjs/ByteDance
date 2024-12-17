<script setup lang="ts">
import { ref, defineProps } from "vue";
import { useRouter } from "vue-router";
import gptIcon from "@/assets/sideNav/gpt.vue";
import editSvg from "@/assets/sideNav/edit.vue";
import optionSvg from "@/assets/sideNav/option.vue";
import { childObj } from "@/api/side/item";

interface Props {
  textColor: string;
  fill: string;
  popperStyle: string;
}

const props = defineProps<Props>();
const router = useRouter();

// 昨天，近七天，近三十天，超过三十天按照月份归类

// 模拟数据
const arrList = ref<Array<object>>([
  {
    title: "今天",
    child: [
      { name: "马睿在干嘛", dialogID: 1 },
      { name: "马睿的问答请求", dialogID: 2 },
    ],
  },
  {
    title: "昨天",
    child: [
      { name: "马睿的java学习问答", dialogID: 3 },
      { name: "马睿的秘密花园", dialogID: 4 },
    ],
  },
  {
    title: "前天",
    child: [
      { name: "马睿的java学习问答", dialogID: 5 },
      { name: "马睿的秘密花园前天", dialogID: 6 },
    ],
  },
  {
    title: "这个月",
    child: [
      { name: "马睿的java学习问答", dialogID: 7 },
      { name: "马睿的秘密花园", dialogID: 8 },
      { name: "马睿的秘密花园这个月的", dialogID: 9 },
    ],
  },
  {
    title: "更早以前",
    child: [
      { name: "马睿没车怎么办", dialogID: 10 },
      { name: "马睿没房怎么办", dialogID: 11 },
      { name: "小明的问答请求", dialogID: 12 },
      { name: "计算机组成原理课设怎么通过", dialogID: 13 },
      { name: "计算机组成原理换老师", dialogID: 14 },
    ],
  },
  {
    title: "更早以前",
    child: [
      { name: "小明没车怎么办", dialogID: 10 },
      { name: "小明没房怎么办", dialogID: 11 },
    ],
  },
]);

// 控制 option 出现
const option = ref<boolean>(false);

// 存储 dialogID
const dialogId = ref<number | null>(null);
// hover 出现

const enteroptions = (value: childObj): void => {
  dialogId.value = value.dialogID;
};
// 消失
const moveoptions = (): void => {
  dialogId.value = null;
};


// 新建对话
const newchat = () => {
  router.push({
    path:'/user'
  })
}
</script>

<template>
  <div class="container" :style="{ color: props.textColor }">
    <div 
    class="icon"
    @click="newchat"
    >
      <gptIcon :fill="props.fill"></gptIcon>
      <span style="margin-left: 10px">KunKun-Gpt</span>
      <el-popover
        placement="right"
        trigger="hover"
        :popper-style="{ minWidth: '20px', width: 'auto' }"
        content="新对话"
        :effect="props.popperStyle"
      >
        <template #reference>
          <editSvg
            :fill="props.fill"
            :style="{ marginLeft: '20', width: '20', height: '20', cursor: 'pointer' }"
          ></editSvg>
        </template>
      </el-popover>
    </div>
    <el-scrollbar class="scrollbar">
      <div v-for="item in arrList" :key="item">
        <h5>{{ item.title }}</h5>
        <div class="item" v-for="value in item.child" :key="value.name">
          <div
            class="content"
            @mouseenter="enteroptions(value)"
            @mouseleave="moveoptions"
          >
            {{ value.name }}
            <optionSvg
              v-show="dialogId === value.dialogID"
              :fill="props.fill"
            ></optionSvg>
          </div>
        </div>
      </div>
    </el-scrollbar>
  </div>
</template>
<style scoped>
.container {
  width: 200px;
  height: 700px;
}

.icon {
  display: flex;
  align-items: center;
  height: 40px;
  border-radius: 4px;
  transition: background-color 0.3s;
  outline: none;
  cursor: pointer;
}

.icon:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.item {
  height: 20px;
  font-size: 14px;
  padding: 8px;
  border-radius: 4px;
  align-content: center;
  cursor: pointer;
  transition: background-color 0.3s color 2s;
}

.item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.item.active {
  color: red;
}
.scrollbar {
  overflow: auto;
  margin-top: 10px;
}
.content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>