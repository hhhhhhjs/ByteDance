<script setup lang="ts">
import { defineProps } from "vue";

interface Props{
    fill:string
};

const props = defineProps<Props>()
</script>
<template>
  <div>
    <svg
      t="1732008501027"
      class="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="2310"
      width="50"
      height="15"
      :fill="props.fill"
    >
      <path
        d="M9.251 512a15.71 15.71 0 1 0 201.1 0 15.71 15.71 0 1 0-201.1 0zM411.45 512a15.71 15.71 0 1 0 201.1 0 15.71 15.71 0 1 0-201.1 0zM813.649 512a15.71 15.71 0 1 0 201.1 0 15.71 15.71 0 1 0-201.1 0z"
        p-id="2311"
      ></path>
    </svg>
  </div>
</template>
<style scoped>
</style>