<script setup lang="ts">
import { useRoute } from 'vue-router'
import Side from '@/components/user/side.vue'
import Content from '@/components/user/content.vue'




</script>
<template>
    <div class="container">
        <Side></Side>
        <Content></Content>
    </div>
</template>
<style scoped>
.container {
  display: flex;
  height: 100vh;

}

</style>