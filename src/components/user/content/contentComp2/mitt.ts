// 用来传递 input 组件和 footer 组件的name
import mitt from 'mitt'

interface Emitter {
    inputvalue:string
}


const mittEmitter = mitt()


const mitt_obj:Emitter = {
    inputvalue:'inputvalue'
}
export {
    mittEmitter,
    mitt_obj
}