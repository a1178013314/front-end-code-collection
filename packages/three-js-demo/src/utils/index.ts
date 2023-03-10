export const getContainer = function(){
    let dom : HTMLElement 
    let windowHeight : Number
    let windowWidth : Number
    let containerHeight : Number
    let containerWidth : Number
    let id : string
    return function(id: "three-container"){
        if(dom && windowHeight && windowWidth && containerHeight && containerWidth){
            return {
                dom,
                windowHeight,
                windowWidth,
                containerHeight,
                containerWidth
            }
        }
        let _dom = document.getElementById(id)
        if(!_dom){
            throw new Error('dom节点不存在')
        }


        return {
            dom : _dom,
            windowHeight: window.innerHeight,
            windowWidth: window.innerWidth,
            containerHeight: _dom.offsetHeight,
            containerWidth: _dom.offsetWidth

        }


    }
}



