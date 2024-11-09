// 防抖函数
const antiShake = (fn:Function,delay:number) => {
    let timer:ReturnType<typeof setTimeout>
    return function(...args:any[]){
      if(timer){
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  }

export {
    antiShake
}