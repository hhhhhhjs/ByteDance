<script setup lang="ts">
import { defineProps, ref,  onMounted, onBeforeUnmount, nextTick} from "vue";
import personInfo from "../personInfo/index.vue";
interface Props {
  NavtextColor: string;
  backgroundColor: string;
  persontextColor: string;
}

const props = defineProps<Props>();

// 控制个人设置页面显示
const isshowPerson = ref<boolean>(false);


// 获取个人弹窗父级 div dom
const personInfoParent = ref<HTMLElement | null>(null);

// 弹窗消失函数
const hidePersonInfo = (e:MouseEvent) => {
  isshowPerson.value = true;
  const istrue = personInfoParent.value?.contains(e.target as HTMLElement)
  if(istrue){
    isshowPerson.value = true;
  }else{
    isshowPerson.value = false;
  }
};


onMounted(() => {
  document.addEventListener("click", hidePersonInfo);
})

onBeforeUnmount(() => {
  document.removeEventListener("click", hidePersonInfo);
})
</script>
<template>
  <div class="container">
    <p :style="{ color: props.NavtextColor }">ChatGpt</p>
    <div class="avatar" 
    ref="personInfoParent"
    @click="hidePersonInfo($event)">
      <personInfo 
      v-if="isshowPerson"
      class="personInfo"
      :backgroundColor="props.backgroundColor"
      :textColor="props.persontextColor"
      ></personInfo>
    </div>
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
  position: relative;
  width: 32px;
  height: 32px;
  cursor: pointer;
  border-radius: 50%;
  background-color: antiquewhite;
  position: absolute;
  right: 40px;
  transition: border 0.3s ease;
}

.personInfo {
  position: absolute;
  top :120%;
  right: 0;
}
</style>