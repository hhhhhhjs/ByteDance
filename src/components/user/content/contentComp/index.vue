<script setup lang="ts">
import { defineProps } from "vue";
import Input from '../contentComp2/input.vue'
import contentNav from "../contentComp2/nav.vue";

interface Props {
    NavtextColor: string;
    bodytextColor: string;
    inputColor: string;
    popperStyle: string;
}

const props = defineProps<Props>();

</script>
<template>
    <div class="container">
        <contentNav
        :NavtextColor="props.NavtextColor"></contentNav>
        <div class="indexBody"></div>
        <Input
        class="input"
        :inputColor="props.inputColor"
        :inputTextColor="props.bodytextColor"
        :popperStyle="props.popperStyle"
        :scrollbarColor="props.inputColor"></Input>
    </div>
</template>

<style scoped>

.indexBody{
    width: 740px;
    height: 710px;
    margin: 0 auto;
    overflow: auto;
}

.input {
    margin: 0 auto;
}
</style>