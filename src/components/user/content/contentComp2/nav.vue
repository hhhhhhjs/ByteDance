<script setup lang="ts">
import { defineProps, ref,  onMounted, onBeforeUnmount} from "vue";
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
    <div
    class="avatar" 
    ref="personInfoParent"
    @click="hidePersonInfo($event)">
    <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201903%2F10%2F20190310234608_tlavw.jpg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1735204107&t=846dfeac2f540c6870d51ef699d14be9" alt="头像">
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
  width: 32px;
  height: 32px;
  cursor: pointer;
  border-radius: 50%;
  position: absolute;
  right: 40px;
  transition: border 0.3s ease;
}

.personInfo {
  position: absolute;
  top :120%;
  right: 0;
}

img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
</style>