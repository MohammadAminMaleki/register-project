let validUserName = "mohammad"
let validPassword = "123456"

let userName = document.getElementById('username')
let password = document.getElementById('password')
let login = document.getElementById('login')

login.addEventListener("click",function (event){
    event.preventDefault()
    if(userName.value == validUserName && password.value == validPassword){
        window.location.href='./html/sales-invoice.html'
    }else{
        alert('نام کاربری و رمز ورود نامعتبر است.')
        // login.setAttribute("target","#")
    }
})


