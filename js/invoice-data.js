let totalPrice = document.getElementById("total-price")
let dateNumber = document.getElementById("date-number")
let invoiceNumber = document.getElementById("invoice-number")
let name = document.getElementById("name")
let email = document.getElementById("email")
let phone = document.getElementById("phone")

name.innerHTML = localStorage.getItem('usernameValue')
email.innerHTML = localStorage.getItem('emailValue')
phone.innerHTML = localStorage.getItem('mobileNumberValue')

totalPrice.innerHTML = localStorage.getItem('priceValue')