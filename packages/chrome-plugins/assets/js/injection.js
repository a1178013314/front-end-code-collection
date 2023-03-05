console.log("加载输入脚本")
let messageData = {
    HRName: "",
    positionName: ""
}




chrome.runtime.onMessage.addListener((data, sender, sendResponse) => {
    console.log("收到的信息", data)
    if (data.type === "getJobInfo") {
        determineWebsiteType(sendResponse)
    }
    return true
})



function determineWebsiteType(sendResponse) {
    console.log(location.href)
    if (location.href.indexOf("zhipin") > -1) {
        getHRName("boss")
        getPositionName('boss')
        sendResponse(JSON.stringify(messageData))
        return
    }


    if (location.href.indexOf("liepin") > -1) {
        getHRName("猎聘")
        getPositionName('猎聘')
        console.log("messageData", messageData)
        sendResponse(JSON.stringify(messageData))
        return
    }


    return null
}

//获取  HR姓名
function getHRName(type) {
    if (type === "boss") {
        let HRname = document.getElementsByClassName('job-boss-info')[0].getElementsByClassName('name')[0].firstChild.textContent
        messageData.HRName = HRname
        return
    }
    if (type === '猎聘') {
        let HRname = document.getElementsByClassName('recruiter-container')[0].getElementsByClassName('name')[0].innerText
        messageData.HRName = HRname
        return
    }
    return ""
}
//获取  职位名称
function getPositionName(type) {
    if (type === "boss") {
        let positionName = document.getElementsByClassName('info-primary')[0].getElementsByClassName('name')[0].getElementsByTagName('h1')[0].innerText
        messageData.positionName = positionName
        return
    }
    if (type === '猎聘') {
        let positionName = document.getElementsByClassName('job-apply-content')[0].getElementsByClassName('name')[0].innerText
        messageData.positionName = positionName
        return
    }
    return ""
}
