<script setup lang="ts">
import { defineProps } from 'vue'

interface Props {
    NavtextColor:string;
    bodytextColor:string;
    inputColor:string;
    popperStyle:string;
}

const props = defineProps<Props>()
</script>
<template>
    <div class="container">
        <router-view
        :NavtextColor="props.NavtextColor"
        :bodytextColor="props.bodytextColor"
        :inputColor="props.inputColor"
        :popperStyle="props.popperStyle"
        ></router-view>
    </div>
</template>
<style scoped>
.container{
    flex: 1;
    background-color: #212121;
    display: flex;
    flex-direction: column;
}

.text{
    color: aqua;
}
</style>