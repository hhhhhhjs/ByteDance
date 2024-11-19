<script setup lang="ts">
import { ref } from "vue";
import { ElMessage } from "element-plus";
import { antiShake } from "@/api/login";
import Tickcom from "@/components/Homecomp/tick.vue";
import router from "@/router/router";

const Mail = ref<string>("");
const verificationCode = ref<string>("");
const Password = ref<string>("");
const Password2 = ref<string>("");
const account = ref<string>("");

// 居中对话框
const centerDialog = ref<boolean>(false);
// 打勾按钮
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
  if (Password.value === "") {
    ElMessage({
      message: "密码不能为空",
      type: "error",
      duration: 1000,
    });
  }
  if (account.value === "") {
    ElMessage({
      message: "账号不能为空",
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

  if (Password.value !== Password2.value) {
    ElMessage({
      message: "两次输入密码不一致,请确保两次输入密码一致",
      type: "error",
      duration: 1000,
    });
  } else if (
    Password.value !== "" &&
    Password2.value !== "" &&
    Password.value === Password2.value
  ) {
    centerDialog.value = true;
    showCheckmark.value = true;
  }
};

// 申请账号
const confirmReset = () => {
  // TODO：后端校验
  centerDialog.value = false;
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
    <div class="container">
      <div style="display: flex; flex-direction: column; width: 100%">
        <div style="display: flex; align-items:center; margin-bottom: 20px">
          <strong><p class="pTwo">邮箱</p></strong>
            <el-input
            placeholder="请输入邮箱"
            clearable
            v-model="Mail"
            />
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
        <div style="display: flex; margin-bottom: 20px;align-items:center">
          <strong><p class="pTwo">设置账号</p></strong>
          <el-input
            placeholder="请输入账号"
            size="default"
            clearable
            v-model="account"
            show-password
          ></el-input>
          <span class="require">*</span>
        </div>
        <div style="display: flex; margin-bottom: 20px;align-items:center">
          <strong><p class="pTwo">设置密码</p></strong>
          <el-input
            placeholder="请输入密码"
            size="default"
            clearable
            v-model="Password"
            show-password
          ></el-input>
          <span class="require">*</span>
        </div>
        <div style="display: flex; margin-bottom: 20px;align-items:center">
          <strong><p class="pTwo">再次输入</p></strong>
          <el-input
            placeholder="确保两次输入密码一致"
            size="default"
            clearable
            v-model="Password2"
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
    <div class="successbtn">
      <div style="display:flex; justify-content:center; align-items:center">
        <Tickcom :showCheckmark="showCheckmark"> </Tickcom>
        <p style="font-size: 20px; margin-left: 5px; margin-bottom:8px">创建账号成功！</p>
      </div>
      <div>
        <p style="font-size: 20px; margin-left: 5px">账号：{{ account }}</p>
        <p style="font-size: 20px; margin-left: 5px">密码：{{ Password }}</p>
      </div>
    </div>
    <template #footer>
      <div class="dialog-footer">
        <el-button color="#292929" @click="confirmReset"> 确认 </el-button>
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

</style>