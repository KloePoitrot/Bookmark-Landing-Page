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
        if(tab.className === ""){
            tab.classList.add('active')
            return
        }
        if(tab.className === "active"){
            tab.classList.remove('active')
            return
        }
    })
})





// Form
document.querySelector('#submit').addEventListener('click', (e) => {
    e.preventDefault

    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    let mailCheck = document.querySelector('#email').value

    if(regex.test(mailCheck)){
        console.log('Good!')
        document.querySelector('#errorMsg').classList.add('success')
        document.querySelector('#errorMsg p').classList.add('success')
    } else {
        console.log('No good...')
        document.querySelector('#errorMsg').classList.add('error')
        document.querySelector('#errorMsg').classList.add('error')
    }
}, true)