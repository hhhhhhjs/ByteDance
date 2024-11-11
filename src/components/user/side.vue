<script setup lang="ts">
import { ref } from 'vue'
import sideSvg from '@/assets/sideNav/sideicon.vue'
import editSvg from '@/assets/sideNav/edit.vue'


const transformColor = ref<HTMLElement | null>(null)

// // 主题色修改按钮
// const transformthemeColor = () => {
//     const getStyle = getComputedStyle(transformColor.value)
//     transformColor.value.style.backgroundColor = 'red'
// }
</script>
<template>
    <div class="container">
        <div class="nav">
            <sideSvg 
            fill="var(--dark-icon)" />
            <editSvg 
            fill="var(--dark-icon)"
            />
        </div>
    </div>
</template>
<style scoped>
.container{
    width: 300px;
    background-color:#171717;
}

.dialog{
    width:100px;
    height: 100px;
    background-color: var(--light-content);
}
.nav{
    display: flex;
    flex-direction: column;
}


</style>