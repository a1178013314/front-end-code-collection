window.addEventListener('load', () => {
    public_start()
})

const public_start = () => {
    public_init_event()
}

const public_init_event = () => {
    const saveDom = window['public-save']
    const clearDom = window['public-clear']

    if(saveDom){
        saveDom.addEventListener('click', () => {
            localStorage.setItem('current-route', location.href)
        })
    }

    if(clearDom){
        clearDom.addEventListener("click", () => {
            localStorage.removeItem('current-route')
            location.href=`${location.origin}/popup.html`
        })
    }
}


