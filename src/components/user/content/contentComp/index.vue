<script setup lang="ts">
import { defineProps } from "vue";
import InputUp from "../contentComp2/inputUp.vue";
import contentNav from "../contentComp2/nav.vue";
import dialogue from "../contentComp2/dialogue.vue";

interface Props {
  NavtextColor: string;
  bodytextColor: string;
  inputColor: string;
  popperStyle: string;
  scrollbarthumbColor: string;
}

const props = defineProps<Props>();

</script>
<template>
  <div class="indexcontainer">
    <contentNav 
    :NavtextColor="props.NavtextColor"
    :backgroundColor="props.inputColor"
    :persontextColor="props.bodytextColor"
    ></contentNav>
    <div 
    class="indexBody"
    :style="{
        '--scrollbar-color--':props.inputColor,
        '--scrollbar-thumb-color--':props.scrollbarthumbColor,
    }"
    >
      <dialogue 
      class="dialog"
      :textColor="props.bodytextColor"
      :dialogColor="props.inputColor"></dialogue>
    </div>
    <div class="inputOuter">
      <InputUp
        class="input"
        :inputColor="props.inputColor"
        :inputTextColor="props.bodytextColor"
        :popperStyle="props.popperStyle"
        :scrollbarthumbColor="props.scrollbarthumbColor"
      ></InputUp>
    </div>
  </div>
</template>

<style scoped>
.indexBody {
  width: 100%;
  height: 710px;
  overflow: auto;
}

.indexBody::-webkit-scrollbar {
    color: var(--scrollbar-color--);
}
.indexBody::-webkit-scrollbar-thumb {
    background-color: var(--scrollbar-thumb-color--);
}

.dialog {
  margin: 0 auto;
}

/* 由于 translate 可能会影响父级样式，这里再加上一个 父级 div，考虑使用 绝对定位 */
.inputOuter {
    margin-top:20px;
    position: relative;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
}

.input {
  margin: 0 auto;
  position: absolute;
}
</style>