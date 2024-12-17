<script setup lang="ts">
import backIcon from "@/assets/personInfosettings/backIcon.vue";
import circleIcon from "@/assets/personInfosettings/circle.vue";
import { defineProps, ref, reactive, onMounted, nextTick, watch } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from '@/store/store'


interface Props {
  textColor: string;
}


const router = useRouter();

// 获取头像 dom
const personImg = ref<HTMLImageElement | null>(null);

// 昵称 input dom
const nameInput = ref<HTMLInputElement | null>(null);

// 玩完成 button dom
const sendButton = ref<HTMLButtonElement | null>(null);

// 存储修改后的昵称
const newName = ref<string>('');

// 存储 Kunkun 号
const kunId = ref<string>('');

// 控制点击完成后 button 旋转样式
const isRotate = ref(false);

// 上传头像
const uploadimg = () => {
  const input = document.querySelector(".Input") as HTMLInputElement;
  input.click();
};

// 更新头像处理函数
const imghandle = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files[0]) {
    if (personImg.value) {
      personImg.value.src = URL.createObjectURL(target.files[0]);

      // TODO:前端状态管理url 替换 && 向后端发送请求
    }
  }
};
const props = defineProps<Props>();


// 定义 store
const userStore = useUserStore();
onMounted(() => {
  newName.value = userStore.getName
  kunId.value = userStore.getkunkunId
})


// 提交处理函数
const sendSucess = () => {
  // TODO：向后端发送请求
  isRotate.value = true;
  userStore.setUsername(newName.value)
  userStore.setUserId(kunId.value)
  setTimeout(() => {
    isRotate.value = false;
  }, 3000);
};

onMounted(() => {
 
});
</script>
<template>
  <div class="profilecontainer">
    <div class="personInfo">
      <div 
      class="back"
      @click="router.back()"
      >
        <backIcon></backIcon>
      </div>
      <div
        :style="{
          fontSize: '16px',
          fontWeight: '600',
          color: props.textColor,
          margin: '0 auto',
        }"
      >
        个人资料
      </div>
    </div>
    <div class="edit">
      <div class="avatar-container">
        <img
          ref="personImg"
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201903%2F10%2F20190310234608_tlavw.jpg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1735204107&t=846dfeac2f540c6870d51ef699d14be9"
          alt="用户头像"
          @click="uploadimg"
        />
        <span
          role="img"
          aria-label="修改头像"
          style="height: 34px; cursor: pointer"
          @click="uploadimg"
        >
          <circleIcon></circleIcon>
        </span>
        <input @change="imghandle" class="Input" type="file" />
      </div>
    </div>
    <div class="editcontent" :style="{ color: props.textColor }">
        <div class="contentname">
          <div>
            昵称
            <span style="color: red">&nbsp; *</span>
          </div>
          <el-input
          v-model="newName"
          clearable
          size="large"
          :autofocus="true"
          ref="nameInput"
          class="contentnameInput"
          />
      </div>
     <div>
      <div class="contentkun">
            KunKun号
            <span style="color: red">&nbsp; *</span>
          </div>
          <el-input
          v-model="kunId"
          clearable
          size="large"
          :autofocus="true"
          ref="nameInput"
          class="contentnameInput"
          />
          <span style="color: #badfd4;">KunKun只能为4-16位的字母，数字和下划线的组合</span>
     </div>
     <el-button
     ref="sendButton"
     type="primary"
     :style="{marginTop: '40px'}"
     :loading="isRotate"
     @click="sendSucess"
     >
     完成
    </el-button>
    </div>
  </div>
</template>
<style scoped>
.profilecontainer {
  display: flex;
  flex-direction: column;
  width: 800px;
  height: auto;
  margin: 0 auto;
  padding: 10px 20px;
  position: relative;
}

.personInfo {
  display: flex;
  align-items: center;
}

.back {
  padding: 8px;
  border-radius: 5px;
  position: absolute;
  top: 0;
  left: 0;
}

.back:hover {
  cursor: pointer;
  background-color: #3a3a3a;
}

.edit {
  width: 50%;
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.avatar-container {
  position: relative;
  width: 100px;
  height: 100px;
}

img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  position: relative;
  cursor: pointer;
}

span[role="img"] {
  position: absolute;
  bottom: 0; /* 设置绝对定位的底部 */
  right: 0; /* 设置绝对定位的右侧 */
}

.Input {
  width: 100px;
  height: 100px;
  display: none;
  transform: translate(0, -100%);
  cursor: pointer;
}

.editcontent {
  width: 45%;
  display: flex;
  padding-top: 20px;
  margin: 0 auto;
  font-size: 14px;
  flex-direction: column;
}

.contentname {
  width: 100%;
}

.contentnameInput {
  width: 100%;
  height: 40px;
  margin-top: 10px;
  border-radius: 15px;
}

.contentkun {
  width: 100%;
  margin-top: 20px;
}

.el-input {
  --el-input-border-radius: 7px;
}

</style>