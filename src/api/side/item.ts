interface childObj{
    name:string;
    dialogID:number;
}

// 后端传递的 item 数据接口

interface item {
    title:string;
    child:childObj[];
}

export {
    item,
    childObj
}