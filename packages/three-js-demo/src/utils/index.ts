// import { WebGLRenderer} from "three"


type DomInfoType = {
    containerDom:HTMLElement,
    windowWidth:Number,
    windowHeight:Number
}


/**
 * 获得容器相关信息
 */
export const getDom = function( id = "three-container" ) : DomInfoType{
    const dom = document.getElementById(id)
    if(dom === null){
        throw new Error('容器不存在，请检查传入的ID')
    }
    return {
        containerDom:dom,
        windowWidth: window.innerWidth,
        windowHeight:window.innerHeight
    }
    
}
/**
 * 获得WebGLRenderer渲染器
 */
// const getWebGLRenderer = function(){

// }
