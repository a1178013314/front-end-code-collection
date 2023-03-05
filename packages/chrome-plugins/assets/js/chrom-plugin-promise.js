function getCurrentWindowTab(){
    return new Promise((reslove) => {
        chrome.tabs.query({
            currentWindow: true
        },function(tabs){
            reslove(tabs)
        })
    })
}