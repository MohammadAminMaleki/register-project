let name = document.getElementById('name')
let email = document.getElementById('email')
let phone = document.getElementById('phone')
let totalPrice = document.getElementById('total')

let one = document.getElementById('1')
let two = document.getElementById('2')
let three = document.getElementById('3')
let tbody = document.getElementById('tbody')

one.innerHTML = localStorage.getItem('nameValue')
two.innerHTML = localStorage.getItem('amountValue')
three.innerHTML = localStorage.getItem('priceValue')

email.innerHTML = localStorage.getItem('emailValue')
name.innerHTML = localStorage.getItem('usernameValue')
phone.innerHTML = localStorage.getItem('mobileNumberValue')

let total = document.getElementById('total-price')
total.innerHTML = localStorage.getItem('priceValue')

function newItem(){
    // let newTr = document.createElement('tr')
    // console.log(newTr);
    // newTr.innerHTML = `
    // <td>${localStorage.getItem('nameValue')}</td>  
    // <td>${localStorage.getItem('amountValue')}</td>
    // <td>${localStorage.getItem('priceValue')}</td> 
    // `
    // tbody.appendChild(newTr)
}