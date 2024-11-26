<script setup lang="ts">
import { defineProps } from "vue";

interface Props {
  NavtextColor: string;
}

const props = defineProps<Props>();
</script>
<template>
  <div class="container">
    <p :style="{ color: props.NavtextColor }">ChatGpt</p>
    <div class="avatar"></div>
  </div>
</template>
<style scoped>
.container {
  display: flex;
  align-items: center;
  position: relative;
}

p {
  font-size: 18px;
  font-weight: bold;
  margin-left: 20px;
}

.avatar {
  width: 32px;
  height: 32px;
  cursor: pointer;
  border-radius: 50%;
  background-color: antiquewhite;
  position: absolute;
  right: 40px;
  transition: border 0.3s ease;
}

.avatar:hover {
  border: 1px solid #00ff00; /* 设置正常边框颜色 */
}


 
</style>