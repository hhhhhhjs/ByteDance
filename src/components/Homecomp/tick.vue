<!-- 打勾组件 -->
<script setup lang="ts">
import { ref, defineProps } from 'vue'

interface Props {
  showCheckmark: boolean;
}

const props = defineProps<Props>()

</script>
<template>
  <div class="checkmark-container" v-if="props.showCheckmark">
    <div class="checkmark"></div>
  </div>
</template>

<style scoped>
.checkmark-container {
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f1f1f1;
  border-radius: 50%;
}

.checkmark {
  width: 30px;
  height: 30px;
  border: 5px solid #4CAF50; /* 打勾颜色 */
  border-radius: 50%;
  position: relative;
  opacity: 0;
  animation: checkmarkAnimation 1s ease forwards;
}

@keyframes checkmarkAnimation {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  50% {
    opacity: 1;
    transform: scale(1.1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.checkmark:after {
  content: '';
  position: absolute;
  top: 4px;
  left: 10px;
  width: 6px;
  height: 12px;
  border: solid #4CAF50;
  border-width: 0 5px 5px 0;
  transform: rotate(45deg);
  opacity: 0;
  animation: checkAnimation 1s 0.3s forwards;
}

@keyframes checkAnimation {
  0% {
    opacity: 0;
    transform: rotate(45deg) scale(0.5);
  }
  100% {
    opacity: 1;
    transform: rotate(45deg) scale(1);
  }
}
</style>
