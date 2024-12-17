<script setup lang="ts">
import { CozeAPI, ChatEventType, RoleType, Bots } from "@coze/api";
import { defineProps, ref, nextTick } from "vue";
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

const inputDom = ref<HTMLDivElement | null>(null);

// 用户输入文本
const inputText = ref<string>("");

// 存储机器人回答
const Botanswer = ref<string>("");

const Bot = ref<string>("");

// 传递给子组件的用户输入
const userContent = ref<string>("");

// scrollbar 引用
const scrollbarRef = ref(null);

// 获取用户输入
const getmessage = (value: string) => {
  inputText.value = value;
  console.log(inputText.value);
};

// 发送函数
const sendmessage = async (e: KeyboardEvent) => {
  if (e.key === "Enter") {
    e.preventDefault();
    console.log("发送");
    userContent.value = inputText.value;

    // 大模型交互函数

    const client = new CozeAPI({
      token:
        "pat_2C2EInYnWnS8hfAphKZxdkaQc5NFjG1XDNdinr6chheF7EickYTI7D6UNHwjiN8h",
      baseURL: "https://api.coze.cn", // Use COZE_CN_BASE_URL for China region
      allowPersonalAccessTokenInBrowser: true,
    });

    async function streamChat(question: string) {
      const stream = await client.chat.stream({
        bot_id: "7448225485772898358",
        additional_messages: [
          {
            role: RoleType.User,
            content: question,
            content_type: "text",
          },
        ],
      });
      
      // 清空之前的回答
      Botanswer.value = "";
      for await (const part of stream) {
        if (part.event === ChatEventType.CONVERSATION_MESSAGE_DELTA) {
          Botanswer.value += part.data.content;
          console.log(part.data.content)
        }
      }
    }
   await streamChat(inputText.value);
  }
};

const sendclick = (value: string) => {
  console.log(value);
};
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
        '--scrollbar-color--': props.inputColor,
        '--scrollbar-thumb-color--': props.scrollbarthumbColor,
      }"
    >
      <dialogue
        class="dialog"
        :textColor="props.bodytextColor"
        :dialogColor="props.inputColor"
        :userQuestion="userContent"
        :Botanswer="Botanswer"
      ></dialogue>
    </div>
    <div class="inputOuter">
      <InputUp
        ref="inputDom"
        class="input"
        :inputColor="props.inputColor"
        :inputTextColor="props.bodytextColor"
        :popperStyle="props.popperStyle"
        :scrollbarthumbColor="props.scrollbarthumbColor"
        @send="getmessage"
        @keydown="sendmessage"
      ></InputUp>
    </div>
  </div>
</template>

<style scoped>
.indexBody {
  width: 100%;
  height: 710px;
}

.dialog {
  margin: 0 auto;
}

/* 由于 translate 可能会影响父级样式，这里再加上一个 父级 div，考虑使用 绝对定位 */
.inputOuter {
  margin-top: 20px;
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

.sendclick {
  width: 26px;
  height: 26px;
  position: absolute;
  right: 348px;
  top: 57px;
  cursor: pointer;
  opacity: 0;
}
</style>