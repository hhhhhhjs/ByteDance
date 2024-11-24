<script setup lang="ts">
import { ref, onBeforeMount } from 'vue'
import Side from '@/components/user/side/side.vue'
import Content from '@/components/user/content/content.vue'


const colorObj = {
  darkside:'#171717',
  darkcontent:'#212121',
  lightside:'#f3f4f6',
  lightcontent:'#ffffff',
  darkicon:'#b4b4b4',
  lighticon:'#171717',
  darkText:'#e1e1e1',
  inputDark:'#2f2f2f'
}

// 侧边栏颜色
const themeColorSide = ref<string>(colorObj.darkside)
// 提示气泡颜色
const themeColorPopp = ref<string>('dark')
const iconColor = ref<string>(colorObj.darkicon)

// 文字颜色
const textColor = ref<string>(colorObj.darkText)


// 主题色切换函数
const changethemeColor = () => {
  if(themeColorSide.value === colorObj.darkside){
    themeColorSide.value = colorObj.lightside
  }else{
    themeColorSide.value = colorObj.darkside
  }
  if(themeColorPopp.value === 'dark'){
    themeColorPopp.value = 'light'
  }else{
    themeColorPopp.value = 'dark'
  }
}


// 组件挂载时向后端请求数据
onBeforeMount(() => {
  console.log(colorObj.darkText)
})
</script>
<template>
  <div class="container">
    <Side
    :themeColor="themeColorSide"
    :popperStyle="themeColorPopp"
    :iconColor="iconColor"
    :textColor="textColor"
    :fill="iconColor"
    ></Side>
    <Content
    :NavtextColor="iconColor"
    :bodytextColor="colorObj.darkText"
    :inputColor="colorObj.inputDark"
    :popperStyle="themeColorPopp"
    ></Content>
  </div>
</template>
<style scoped>
.container {
  display: flex;
  width: 100%;
}
</style>