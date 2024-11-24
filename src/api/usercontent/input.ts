// 自动聚焦
const vFocus = {
    mounted: (el:any) => el.focus()
  }


// 动态调整输入框高度
const adjustInputHeight = (el:HTMLTextAreaElement, maxHeight:number) => {
    // 重置高度，确保 scrollHeight 能够正确计算
    el.style.height = 'auto'
    if(el.scrollHeight <= maxHeight){
        el.style.height = `${el.scrollHeight}px`
        el.style.overflowY = 'hidden' // 隐藏滚动条
    }else{
        el.style.height = `${maxHeight}px`
        el.style.overflowY = 'scroll' // 显示滚动条
    }
}

export{
    vFocus,
    adjustInputHeight,
}