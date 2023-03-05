window.addEventListener("load",() => {
    begin()
})


const begin = () => {
    
    initEvent()

}


const jumpRecord = function(){
    let  currentRoute = localStorage.getItem('current-route')

    if(currentRoute){
        location.href = currentRoute
    }
    
}

const initEvent = () => {
    let dom = window['job-hunting']
    if(!dom){
        throw new Error('需要绑定事件的ID不存在')
    }
    dom.addEventListener('click', () => {
        location.href='./pages/job-hunting.html'
    })
    console.log(dom)
    
}




