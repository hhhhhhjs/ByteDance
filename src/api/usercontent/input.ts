// 自动聚焦
const vFocus = {
    mounted: (el: any) => el.focus()
}


// 动态调整输入框高度
const adjustInputHeight = (el: HTMLTextAreaElement, maxHeight: number) => {
    // 重置高度，确保 scrollHeight 能够正确计算
    // 因为 textarea 高度的计算规则是不会重置的，即使是删除操作也是在增加
    el.style.height = 'auto'
    if (el.scrollHeight <= maxHeight) {
        el.style.height = `${el.scrollHeight}px`
        el.style.overflowY = 'hidden' // 隐藏滚动条
    } else {
        el.style.height = `${maxHeight}px`
        el.style.overflowY = 'scroll' // 显示滚动条
    }
}

// 将输入框向上移动
const adjustInputHeightUp = (el: HTMLTextAreaElement,container: HTMLElement, maxHeight: number) => {
    el.style.height = 'auto'; // 重置高度
    const newHeight = Math.min(el.scrollHeight, maxHeight); // 计算新高度

    // offsetHeight 是当前可见内容的高度，也就是说在没有达到最大高度之前，内容都是可见的，所以offsetHeight 的高度和滚动条的高度是一致的
    const heightDifference = newHeight - el.offsetHeight;
  
    // 更新 textarea 高度
    el.style.height = `${newHeight}px`;

    // 向上移动容器
    container.style.transform = `translateY(calc(-1 * ${heightDifference}px))`;
}

export {
    vFocus,
    adjustInputHeight,
    adjustInputHeightUp
}