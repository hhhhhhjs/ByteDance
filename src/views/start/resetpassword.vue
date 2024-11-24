<script setup lang="ts">
import { ref } from "vue";
import { ElMessage } from "element-plus";
import { antiShake } from "@/api/login/login";
import Tickcom from "@/components/Homecomp/tick.vue";
import router from "@/router/router";
import { log } from "console";

const Mail = ref<string>("");
const verificationCode = ref<string>("");
const newPassword = ref<string>("");
const newPassword2 = ref<string>("");

// 居中对话框
const centerDialog = ref<boolean>(false);
// 重置密码成功对话框
const resetSuccess = ref<boolean>(false);
// 重置密码成功打勾按钮
const showCheckmark = ref<boolean>(false);

// 信息检验
const isPassword = () => {
  if (Mail.value === "") {
    ElMessage({
      message: "邮箱不能为空",
      type: "error",
      duration: 1000,
    });
  }
  if (newPassword.value === "") {
    ElMessage({
      message: "密码不能为空",
      type: "error",
      duration: 1000,
    });
  }

  // TODO:验证码校验
  if (verificationCode.value === "") {
    ElMessage({
      message: "验证码不能为空",
      type: "error",
      duration: 1000,
    });
  }

  if (newPassword.value !== newPassword2.value) {
    ElMessage({
      message: "两次输入密码不一致",
      type: "error",
      duration: 1000,
    });
  } else if (
    newPassword.value !== "" &&
    newPassword2.value !== "" &&
    newPassword.value === newPassword2.value
  ) {
    centerDialog.value = true;
  }
};

// 确认重置密码
const confirmReset = () => {
  // TODO：后端校验
  centerDialog.value = false;
  resetSuccess.value = true;
  showCheckmark.value = true;
};

// 重置密码成功底部确认按钮
const confirmResetSuccess = () => {
  resetSuccess.value = false;
  router.push({
    path: "/login",
  });
};

// 防抖调用
const debouncedIsPassword = antiShake(isPassword, 500);
</script>

<template>
  <div class="loginBody">
    <div class="linetop"></div>
    <strong>
      <p style="font-size: 24px; color: #f3f3f3">
        哈哈，忘记密码了吧？笨蛋！🤡
      </p>
    </strong>
    <div class="container">
      <div style="display: flex; flex-direction: column; width: 100%">
        <div style="display: flex; margin-bottom: 20px; align-items:center">
          <strong><p class="pTwo">邮箱</p></strong>
            <el-input
              placeholder="请输入邮箱地址"
              v-model="Mail"
              size="default"
              clearable
              style="border-color: #292929"
            ></el-input>
            <span class="require">*</span>
        </div>
        <div style="display: flex; margin-bottom: 20px; align-items:center">
          <strong><p class="pTwo">验证码</p></strong>
          <el-input
            placeholder="请输入验证码"
            size="default"
            clearable
            v-model="verificationCode"
          ></el-input>
          <span class="require">*</span>
        </div>
        <div style="display: flex; margin-bottom: 20px; align-items:center">
          <strong><p class="pTwo">重置密码</p></strong>
          <el-input
            placeholder="请输入新密码"
            size="default"
            clearable
            v-model="newPassword"
            show-password
          ></el-input>
          <span class="require">*</span>
        </div>
        <div style="display: flex; margin-bottom: 20px; align-items:center">
          <strong><p class="pTwo">再次输入</p></strong>
          <el-input
            placeholder="确保两次输入密码一致"
            size="default"
            clearable
            v-model="newPassword2"
            show-password
          ></el-input>
          <span class="require">*</span>
        </div>
        <el-button class="confirm" color="#585858" @click="debouncedIsPassword"
          >确认</el-button
        >
      </div>
    </div>
    <div class="line-buttom"></div>
  </div>
  <el-dialog v-model="centerDialog" title="Tips" width="500" align-center>
    <p style="font-size: 20px">确定重置密码？</p>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="centerDialog = false" color="#292929"
          >取消</el-button
        >
        <el-button color="#292929" @click="confirmReset"> 确认 </el-button>
      </div>
    </template>
  </el-dialog>
  <el-dialog v-model="resetSuccess" width="500" align-center>
    <div class="successbtn">
      <Tickcom :showCheckmark="showCheckmark"> </Tickcom>
      <p style="font-size: 20px; margin-left: 5px">重置密码成功！</p>
    </div>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="confirmResetSuccess" color="#292929">确定</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<style scoped>
.loginBody {
  font-size: 20px;
  font-weight: 500;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #1c1c1e; /* 深灰色背景 */
}

.container {
  width: 500px;
  display: flex;
  flex-direction: column; /* 垂直排列输入框 */
  padding: 20px;
  background-color: #2c2c2e; /* 较浅的背景，区分内容区域 */
  border-radius: 8px;
}

.pTwo {
  display: flex;
  width: 120px;
  margin-right: 5px;
  justify-content: center;
  align-items: center;
  color: #f3f3f3; /* 浅色文字 */
}

.require {
  color: #ff6666;
  margin-left: 5px;
}

.confirm {
  width: 100%;
  margin: 0 auto;
  border: none;
}

.linetop,
.line-buttom {
  width: 800px;
  height: 0.5px;
  background-color: #292929;
  margin: 30px 0;
}

.successbtn {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>