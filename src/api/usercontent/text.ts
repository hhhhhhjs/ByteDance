import { ref } from "vue";
// 动态打印函数
const temStr = ref<string>('')
// 控制光标闪烁
const blinkCursor = ref<boolean>(true)
const printing = async(str:string, delayTime:number) => {
    let Time = startCursorBlink()
    // 每次在函执行之前先清空字符串，否则在返回的时候再进来会造成字符串冗余
    temStr.value = ''
    for(let key of str){
        temStr.value += key;
        await new Promise(resolve => setTimeout(resolve, delayTime));
    }
    clearInterval(Time)
    blinkCursor.value = true
    setTimeout(() => {
        blinkCursor.value = false
    }, 1000)
}


// 光标函数
const startCursorBlink  = () => {
    let timer = setInterval(() => {
        blinkCursor.value =!blinkCursor.value;
    }, 500);
    return timer
}
export {
    printing,
    temStr,
    blinkCursor,
}