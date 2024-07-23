let validUserName = "mohammad"
let validPassword = "123456"

let userName = document.getElementById('username')
let password = document.getElementById('password')
let link = document.getElementById('link')
console.log(link)

link.addEventListener("click",function (){
    if(userName.value == validUserName && password.value == validPassword){
        // link.style.href="./sales-invoice.html"
        link.setAttribute("href","./sales-invoice.html")
        console.log(link)
    }else{
        alert('رمز ورود نامعتبر است.')
        link.setAttribute("target","#")
    }
})

// function clickFunc(){
//     if(userName.value == validUserName && password.value == validPassword){
//         // link.style.href="./sales-invoice.html"
//         link.setAttribute("href","./sales-invoice.html")
//         console.log(link)
//     }else{
//         alert('رمز ورود نامعتبر است.')
//         link.setAttribute("target","#")
//     }
// }
