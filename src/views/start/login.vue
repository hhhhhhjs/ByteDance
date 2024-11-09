<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref } from "vue";
import { antiShake } from '@/api/login';

const account = ref<any>('');
const password = ref<number | string>('');
const router = useRouter();



// 播放音频函数
const audioplay = () => {
  const audio = new Audio('../../public/audio/哇，真的是你啊.mp3');
  audio.play();
}

// 登录函数
const getLog = () => {
    if(account.value === '' || password.value === ''){
        ElMessage({
            message: '账号或密码不能为空',
            type: 'warning'
        });
    } else {
         audioplay();
    }
}

// 防抖函数调用
const debouncedGetLog = antiShake(getLog, 500);

// 重置密码
const resetPassword = () => {
  router.push({
    path:'/resetpassword'
  });
}
</script>

<template>
<div class="outer">
  <div class="navie">
    <img src="../../../public/page/kun.jpg" alt="欢迎" />
    <p class="welcome-text">欢迎回来 🙌</p>
  </div>
  <div class="loginBody">
    <div style="margin-top: 30px;">
      <div style="display: flex">
        <p class="pTwo">账号</p>
        <el-input
          placeholder="请输入账号"
          v-model="account"
          size="default"
          clearable
          style="border-color: #4a4a4a"
          class="input"
        ></el-input>
        <span class="require">*</span>
      </div>
      <div style="display: flex; margin-top: 20px">
        <p class="pTwo">密码</p>
        <el-input 
          placeholder="请输入密码" 
          size="default" 
          clearable
          v-model="password"
          show-password
          class="input"
        ></el-input>
        <span class="require">*</span>
      </div>
    </div>
    <p class="forgetPassword" @click="resetPassword">忘记密码?</p>
    <el-button type="primary" class="loginBtn" color="#4a4a4a" @click="debouncedGetLog">登录</el-button>
  </div>
</div>
</template>

<style scoped>
.outer {
  width: 100vw;
  height: 100vh;
  background-color: #1c1c1c; /* 深黑色背景 */
  color: #d3d3d3; /* 调整整体文本颜色 */
}
.navie {
  padding-top: 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
img {
  height: 100px;
  border-radius: 50%;
  display: block;
  margin-right: 28px;
}

.welcome-text {
  font-size: 32px;
  font-weight: 900;
  color: #f0f0f0; /* 浅灰色 */
  margin-top: 50px;
}

.loginBody {
  font-size: 20px;
  font-weight: 500;
  margin-top: 100px;
  width: 300px;
  height: 300px;
  margin: 0 auto;
}
.pTwo {
  display: flex;
  width: 50px;
  margin-right: 5px;
  justify-content: center;
  align-items: center;
  color: #f0f0f0;
}

.loginBtn {
  display: block;
  margin: 20px auto 0;
  width: 300px;
  background-color: #585858;
  color: #fff;
}
.require {
  color: red;
  margin-left: 5px;
}
.forgetPassword {
  width: 65px;
  font-size: 14px;
  cursor: pointer;
  margin-top: 20px;
  color: #5e8cb7;
  transition: color 0.3s ease;
}

.forgetPassword:hover {
  color: #0072cf;
}

.input{
  --el-input-focus-border-color: #4CAF50;
}
</style>
