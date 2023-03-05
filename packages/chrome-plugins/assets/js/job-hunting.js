let data = {

}
let pageData ={}

window.addEventListener('load', () => {
    start()
})

function start() {
    eventInit()
    initData()
}

function eventInit() {
    translateEvnent()
    copywritingInputEnent()
    createCopywriting()
}

function initData() {
    data.translate = localStorage.getItem('translateValue')
    data["#1"] = localStorage.getItem('#1')
    data["#2"] = localStorage.getItem('#2')
    window['translate'].value = data.translate
    window['#1'].value = data['#1']
    window['#2'].value = data['#2']
}

function translateEvnent() {
    window['translate'].addEventListener('change', (e) => {
        let value = e.target.value
        data.translate = value
        localStorage.setItem("translateValue", value)
    })
}

function copywritingInputEnent() {
    let prefixArray = ["#1", "#2"]

    prefixArray.forEach(el => {
        let param = `${el}`
        window[param].addEventListener("change", (e) => {
            let value = e.target.value
            data[param] = value
            localStorage.setItem(param, e.target.value)
        })
    })
}

function createCopywriting() {
    window['create'].addEventListener('click', async () => {
        if (!data.translate) {
            alert('模板内容不能为空')
            return
        }

        let tabs = await chrome.tabs.query({ active: true, currentWindow: true })
        let tab = tabs[0];

        let message = ""
        console.log(data)

        if(data["#1"] && data["#2"]){
            message = data.translate.replace("#1",data["#1"]).replace("#2",data["#2"])
        }else{
            const res = await chrome.tabs.sendMessage(tab.id, {type:"getJobInfo"})
            pageData = JSON.parse(res)   
            console.log(pageData)
            message = data.translate.replace("#1",pageData.HRName).replace("#2",pageData.positionName)
        }

        await navigator.clipboard.writeText(message)
    })
}
/**
 * 判断网站类型
 * @param url String 网站URL
 */
function determineWebsiteType(url){
    if(url.includes('zhipin')){
        return "BOSS"
    }

    return null
}


