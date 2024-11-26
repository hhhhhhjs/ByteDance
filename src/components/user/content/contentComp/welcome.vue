<script setup lang="ts">
import { defineProps } from "vue";
import contentNav from "../contentComp2/nav.vue";
import Body from "../contentComp2/body.vue";

interface Props {
  NavtextColor: string;
  bodytextColor: string;
  inputColor: string;
  popperStyle: string;
  scrollbarthumbColor: string;
}

const props = defineProps<Props>();
</script>
<template>
  <div class="container">
    <contentNav 
    class="nav" 
    :NavtextColor="props.NavtextColor"
    :backgroundColor="props.inputColor"
    :persontextColor="props.bodytextColor"></contentNav>
    <div class="body">
      <Body
        class="content"
        :bodytextColor="props.bodytextColor"
        :inputColor="props.inputColor"
        :popperStyle="props.popperStyle"
        :scrollbarthumbColor="props.scrollbarthumbColor"
      ></Body>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: 100%;
}
.nav {
  padding-top: 15px;
  width: 100%;
  height: 5%;
  margin: 0 auto;
}
.body {
  width: 100%;
  height: 95%;
  display: flex;
  justify-content: center;
  align-items: center;

}

.content{
  width: 1000px;
  height: 500px;
}
</style>