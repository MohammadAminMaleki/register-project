let validUserName = "mohammad"
let validPassword = "123456"

let userName = document.getElementById('username')
let password = document.getElementById('password')
let link = document.getElementById('link')
console.log(link)

link.addEventListener("click",function (event){
    event.preventDefault()
    if(userName.value == validUserName && password.value == validPassword){
        window.location.href='./sales-invoice.html'
    }else{
        alert('نام کاربری و رمز ورود نامعتبر است.')
        link.setAttribute("target","#")
    }
})
