<script setup lang="ts">
import { defineProps } from "vue";
import codeSvg from "@/assets/content/code.vue";
import conceiveSvg from "@/assets/content/conceive.vue";
import pictureSvg from "@/assets/content/picture.vue";
import textSvg from "@/assets/content/text.vue";
import { mittEmitter, mitt_obj } from "./mitt";

interface Props {
  textColor: string;
}

const props = defineProps<Props>();

const options = [
  { name: "创建图片", component: pictureSvg },
  { name: "构思", component: conceiveSvg },
  { name: "总结文本", component: textSvg },
  { name: "定制计划", component: conceiveSvg },
  { name: "生成代码", component: codeSvg },
];

// 点击相应选项时，将相应的选项 name 传递给 input 组件
const getName = (name: string) => {
  mittEmitter.emit(mitt_obj.inputvalue, name);
};

</script>
<template>
  <div class="qustionContainer">
    <div
      v-for="option in options"
      :key="option.name"
      class="display"
      @click="getName(option.name)"
    >
      <component :is="option.component" style="margin-right: 5px"></component>
      <span :style="{ color: props.textColor }">{{ option.name }}</span>
    </div>
  </div>
</template>
<style scoped>
.qustionContainer {
  width: 550px;
  height: auto;
  display: flex;
  justify-content: space-around;
}

.display {
  width: auto;
  height: 30px;
  padding: 8px;
  border: 1px solid #353535;
  border-radius: 9999px;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s;
}

.display:hover {
  background-color: #353535;
}
</style>