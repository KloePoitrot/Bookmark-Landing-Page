// Form
document.querySelector('#subm').addEventListener('click', (e) => {
    e.preventDefault
    let mailCheck = document.querySelector('#email').value

    if(regex(mailCheck)){
        console.log('Good!')
        document.querySelector('.bluesection .form div').classList.add('success')
        document.querySelector('.bluesection .form div').classList.add('error')
        document.querySelector('.bluesection .form div p').classList.add('error')
        document.querySelector('.bluesection .form div p').classList.add('success')
        document.querySelector('.bluesection .form div p').innerText = "Your email is valid!"
    } else {
        console.log('No good...')
        document.querySelector('.bluesection .form div').classList.add('error')
        document.querySelector('.bluesection .form div p').classList.add('error')
        document.querySelector('.bluesection .form div').classList.remove('success')
        document.querySelector('.bluesection .form div p').classList.remove('success')
        document.querySelector('.bluesection .form div p').innerHTML = "Whoops, make sure it's an email!"
    }
})

function regex(v){
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(v)
}






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
    tab.addEventListener('click', () => {
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







// BURGER MENU
document.querySelector('#burgerMenu').addEventListener('click', () => {
    if(document.querySelector('header').className === ""){
        document.querySelector('header').classList.add('responsive')
        document.querySelector("#burgerMenu").src = "img/icon-close.svg"
        document.querySelector("#headerLogo").src = "img/logo-bookmark-white.svg"
        return
    }
    if(document.querySelector('header').className === "responsive"){
        document.querySelector('header').classList.remove('responsive')
        document.querySelector("#headerLogo").src = "img/logo-bookmark.svg"
        document.querySelector("#burgerMenu").src = "img/icon-hamburger.svg"
        return
    }
})