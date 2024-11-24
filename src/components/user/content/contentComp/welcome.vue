<script setup lang="ts">
import { defineProps } from "vue";
import contentNav from "../contentComp2/nav.vue";
import Body from "../contentComp2/body.vue";

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
    class="nav" 
    :NavtextColor="props.NavtextColor"></contentNav>
    <div class="body">
      <Body
        class="content"
        :bodytextColor="props.bodytextColor"
        :inputColor="props.inputColor"
        :popperStyle="props.popperStyle"
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
  width: 100%;
  height: 5%;
  margin-top: 15px;
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