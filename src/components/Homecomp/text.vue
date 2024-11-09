<template>
  <div class="typewriter">
    <h3>{{ currentText }}<span class="cursor"> ● </span></h3>
  </div>
</template> 

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const fullText = [
  '在星光中闪耀，\n坤的影如风',
  '翩翩步履轻盈，\n笑意藏晨曦中',
  '青春如画，\n音符舞动心灵，',
  '每个音节间，\n心跳都随之轻鸣。',
  '舞台上，\n他如天际之星闪烁，',
  '每个眼神里，\n藏着不灭的热火。',
  '热血与梦想，\n交织在音符之间，',
  '蔡徐坤，\n他是青春的诗篇。'
]

const currentText = ref('') // 当前正在打印的文本
const typingSpeed = 50 // 每个字符之间的延迟
const pauseBetweenTexts = 2000 // 每段文字打印完成后的停顿时间

// 打字机效果的函数，循环打印
const typeText = async () => {
  while (true) { // 无限循环
    for (const line of fullText) {
      currentText.value = '' // 清空当前显示的文本
      for (const char of line) {
        currentText.value += char
        await new Promise(resolve => setTimeout(resolve, typingSpeed))
      }
      await new Promise(resolve => setTimeout(resolve, pauseBetweenTexts)) // 每段文字打印后的停顿
    }
  }
}

onMounted(() => {
  typeText()
})
</script>

<style scoped>
.typewriter {
  margin-left: 30px;
  font-family: monospace;
  white-space: pre-line;
  font-size: 1.2rem;
  line-height: 1.5;
}

.cursor {
  display: inline-block;
  background-color: black;
  margin-left: 2px;
  animation: blink 1s steps(1) infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>
