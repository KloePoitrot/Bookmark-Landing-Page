// TABS
document.querySelector('#navBookmark').addEventListener('click', () =>{
    document.querySelector('#navBookmark').classList.add("active")
    document.querySelector('#navSearhing').classList.remove("active")
    document.querySelector('#navsharing').classList.remove("active")

    document.querySelector('#simpleBookmark').classList.add("active")
    document.querySelector('#speedySearching').classList.remove("active")
    document.querySelector('#easySharing').classList.remove("active")
})

document.querySelector('#navSearhing').addEventListener('click', () =>{
    document.querySelector('#navBookmark').classList.remove("active")
    document.querySelector('#navSearhing').classList.add("active")
    document.querySelector('#navsharing').classList.remove("active")
    
    document.querySelector('#simpleBookmark').classList.remove("active")
    document.querySelector('#speedySearching').classList.add("active")
    document.querySelector('#easySharing').classList.remove("active")
})

document.querySelector('#navsharing').addEventListener('click', () =>{
    document.querySelector('#navBookmark').classList.remove("active")
    document.querySelector('#navSearhing').classList.remove("active")
    document.querySelector('#navsharing').classList.add("active")

    document.querySelector('#simpleBookmark').classList.remove("active")
    document.querySelector('#speedySearching').classList.remove("active")
    document.querySelector('#easySharing').classList.add("active")
})





// TABS
document.querySelectorAll('.collapses > div').forEach(tab => {
    tab.addEventListener('click', (e) => {
        if(document.querySelector('.collapses > div').className === ""){
            document.querySelector('.collapses > div').classList.add('active')
            return
        }
        if(document.querySelector('.collapses > div').className === "active"){
            document.querySelector('.collapses > div').classList.remove('active')
            return
        }
    })
})