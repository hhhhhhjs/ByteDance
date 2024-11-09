<script setup lang="ts">
import Textline from './text.vue'

</script>
<template>
<div>
    <img src="../../../public/page/image.png" alt="哥哥来啦">
    <Textline></Textline>
</div>
</template>
<style scoped>
img{
    width: 50vw;
    object-fit: cover; /* 保持比例并覆盖 */
    height: 100vh;
    position: absolute; 
    top: 0; 
    right: 0; 
    display: block; /* 去除图片下方的空隙 */
    z-index: -100;
}
</style>