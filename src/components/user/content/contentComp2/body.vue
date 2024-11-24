<script setup lang="ts">
import { printing, temStr, blinkCursor } from "@/api/usercontent/text";
import { ref, onMounted, defineProps } from "vue";
import Input from './input.vue'
import Footer from './customQuestions.vue'



interface Props {
  bodytextColor: string;
  // 输入框背景颜色
  inputColor: string;
  popperStyle: string;
}

const props = defineProps<Props>();

const str = ref<string>("有什么可以帮忙的?");
const delayTime = ref<number>(30);

// 存储用户输入
const textarea = ref<string>("");

// 拿到用户输入
const getData = (value:string) => {
  textarea.value = value
  console.log(textarea.value)
}

// 控制 footer 出现
const isFooter = ref<boolean>(false)

onMounted(() => {
  printing(str.value, delayTime.value);
  setTimeout(() => {
    isFooter.value = true
  }, 500)
});
</script>
<template>
  <div class="container">
    <h1 :style="{ color: props.bodytextColor }">{{ temStr }}
        <span v-show="blinkCursor">●</span>
    </h1>
        <Input
        :inputColor="props.inputColor"
        :inputTextColor="props.bodytextColor"
        :popperStyle="props.popperStyle"
        :scrollbarColor="props.inputColor"
        @send="getData"
        >
      </Input>
      <transition name="fade">
        <Footer
        :textColor="props.bodytextColor"
         class="footer"
         v-if="isFooter"></Footer>
      </transition>
  </div>
</template>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1{
  width: 320px;
  margin: 0 auto;
}

.footer{
  width: 70%;
  margin-top: 35px
}

.fade-enter-active {
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

</style>