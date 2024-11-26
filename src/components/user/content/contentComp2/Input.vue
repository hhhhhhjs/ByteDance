<script setup lang="ts">
import {
  defineProps,
  defineEmits,
  ref,
  onMounted,
  nextTick
} from "vue";
import { vFocus, adjustInputHeight } from "@/api/usercontent/input";
import sendSvg from "@/assets/content/send.vue";
import uploadSvg from "@/assets/content/upload.vue";
import { mittEmitter, mitt_obj } from "./mitt";


interface Props {
  // 输入框背景颜色
  inputColor: string;
  // 输入框文字颜色
  inputTextColor: string;
  // hover 提示气泡颜色
  popperStyle: string;
  // 滚动条轨道颜色
  scrollbarthumbColor: string;
}

const props = defineProps<Props>();
const emit = defineEmits<{
  (e: "send", inputText: string): void;
}>();

// 获取 textarea dom
const textarea = ref<HTMLTextAreaElement | null>(null);
// 存储输入文本
const inputText = ref<string>("");

// 没有输入时候的发送按钮颜色
const sendColor = ref<string>("#676767");

// 发送按钮替换颜色函数
const changeColor = () => {
  if (inputText.value) {
    sendColor.value = props.inputTextColor;
  } else {
    sendColor.value = "#676767";
  }
};

const isenterSend = ref<boolean>(false)



// 输入时样式动态调整
const getmessage = () => {
  if(textarea.value){
    adjustInputHeight(textarea.value, 200);
  }
  changeColor();
};

// 发送函数
const sendmessage = () => {
  if(inputText.value){
    emit("send", inputText.value);
    // 这里代表后端响应，需要在后端接收到之后再清除
    console.log('发送成功')
    inputText.value = ''
    changeColor()
  }
}


// 检测按键
const iskey = (e: KeyboardEvent) => {
  if(e.key === 'Enter' && e.shiftKey){
    return
  }
  else if(e.key === 'Enter'){
    e.preventDefault()
    sendmessage()
    nextTick(() => {
      if(textarea.value){
        adjustInputHeight(textarea.value, 200);
      }
    })
  }
};


// 监听通过 mitt 传递过来的选项值

  mittEmitter.on(mitt_obj.inputvalue,(value:any) => {
    if(value){
      inputText.value = value;
      // 防止失去焦点
      textarea.value?.focus()
    }
  })


// 在组件挂载时也需要执行调整高度函数，不然动态计算高度只会在input时才触发，会出现滚动条
onMounted(() => {
  if(textarea.value){
    adjustInputHeight(textarea.value, 200);
  }
});
</script>
<template>
  <div class="container" 
  :style="{ 
    backgroundColor: props.inputColor,
    '--scrollbar-color--': props.inputColor,
    '--scrollbar-thumb-color--': props.scrollbarthumbColor,
    }">
    <div style="width: 100%; height: 20px"></div>
      <textarea
      ref="textarea"
      v-focus
      v-model="inputText"
      @input="getmessage"
      @keydown="iskey"
      :style="{
        backgroundColor: props.inputColor,
        color: props.inputTextColor,
      }"
      name="KunKun-Gpt"
      cols="1"
      rows="1"
      
      placeholder="给“KunKun-Gpt”发送消息"
    ></textarea>
    <div class="footer">
      <!-- 这里将 svg 的颜色和文字颜色保持一致 -->
      <el-popover
        placement="left"
        trigger="hover"
        content="上传文件"
        :popper-style="{ minWidth: '20px', width: 'auto' }"
        :effect="props.popperStyle"
      >
        <template #reference>
          <div class="upload">
            <uploadSvg
              :fill="props.inputTextColor"
              class="uploadSvg"
            ></uploadSvg>
          </div>
        </template>
      </el-popover>
          <sendSvg 
          :fill="isenterSend? 'red' : sendColor" 
          class="send"
          ref="sendDom"
          @click="sendmessage"
          ></sendSvg>
    </div>
  </div>
</template>
<style scoped>
.container {
  margin-top: 20px;
  width: 760px;
  height: auto;
  border-radius: 25px;
}

textarea {
  display: block;
  margin: 0 auto;
  resize: none;
  width: 90%;
  height: 20%;
  min-height: 20px;;
  border: transparent;
  outline: none;
  font-family: "ui-sans-serif,-apple-system,system-ui,Segoe UI,Helvetica,Apple Color Emoji,Arial,sans-serif,Segoe UI Emoji,Segoe UI Symbol";
  font-size: 16px;
}


/* 设置滚动条样式 */
textarea::-webkit-scrollbar {
  background: var(--scrollbar-color--);
}


textarea::-webkit-scrollbar-thumb {
  background-color: var(--scrollbar-thumb-color--);
}

.footer {
  width: 100%;
  height: 50px;
  align-content: center;
  position: relative;
}

.send {
  position: absolute;
  right: 35px;
  bottom: 15px;
  cursor: pointer;
}

.upload {
  width: 36px;
  height: 36px;
  border-radius: 4px;
  margin-left: 31.5px;
  cursor: pointer;
  transition: background-color 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
}

.upload:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>