<script setup lang="ts">
import Nav from './nav.vue'
import { ref, onUpdated, onMounted } from 'vue'
import { useRouter } from 'vue-router'
 
const logGroup = ref<HTMLElement | null>(null)
const logImg = ref<HTMLImageElement | null>(null)
const isshow = ref(false)
const router = useRouter()

const isenter = () => {
    isshow.value = true
}
const isleave = () => {
    isshow.value = false
}
const login = () => {
    router.push({
        path: '/login'
    })
}
const register = () => {
    router.push({
        path:'/register'
    })
}
</script>
<template>
    <div class="HomeLeft">
        <div class="header">
            <Nav></Nav>
        </div>
        <div class="imgCon">
            <img 
            src="../../../public/page/kun.jpg" 
            alt="我是坤坤"
            @mouseenter="isenter"
            @mouseleave="isleave"
            >
            <div v-show="isshow" 
            class="logcss"
            >
                <el-button 
                size="large"
                @click="login"
                >登录</el-button>
                <el-button
                size="large"
                auto-insert-space
                @click="register"
                >注册</el-button>
            </div>
        </div>
    </div>
</template>
<style scoped>
.HomeLeft{
    width: 50vw;
    height: 100vh;
    background-color: rgb(14, 13, 13);
    
}
.font-circle{
    font-family: Circle, system-ui, sans-serif;
}
.header{
    margin-top:10px
}

.imgCon{
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}
img{
    border-radius: 50%;
  --s: 400px; /* image size */
  --b: 5px; /* border thickness */
  --c: #C02942; /* border color */
  --f: 1; /* initial scale */

  --_g: 50% / calc(100% / var(--f)) 100% no-repeat content-box;
  --_o: calc((1 / var(--f) - 1) * var(--s) / 2 - var(--b));

  width: var(--s);
  aspect-ratio: 1;
  padding-top: calc(var(--s)/5);
  cursor: pointer;
  border-radius: 0 0 999px 999px;
  outline: var(--b) solid var(--c);
  outline-offset: var(--_o);
  background: 
    radial-gradient(
      circle closest-side,
      #ECD078 calc(99% - var(--b)),
      var(--c) calc(100% - var(--b)) 99%,
      #0000) var(--_g);
  mask:
    linear-gradient(#000 0 0) no-repeat
    50% calc(-1 * var(--_o)) / calc(100% / var(--f) - 2 * var(--b)) 50%,
    radial-gradient(
      circle closest-side,
      #000 99%,
      #0000) var(--_g);
  transform: scale(var(--f));
  transition: .5s;
  position: absolute;
  z-index: 20;
}
img:hover{
     --f: 1.35; /* hover scale */
     
}

.logcss{
    width: 350px;
    position: relative;
    z-index: 21;
    display: flex;
    justify-content: space-around;
}
</style>