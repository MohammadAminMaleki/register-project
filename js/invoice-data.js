let invoiceData = [
    {id: 1 , name:"Reza",family:"hasani",city:"Qazvin",phone: "02833456781",date:"2023/12/03",totalPrice:"12000",invoiceNumber:"0012"},
    {id: 2 , name:"Mohammad",family:"maleki",city:"Tehran",phone: "02133434581",date:"2024/09/12",totalPrice:"3200",invoiceNumber:"2341"},
    {id: 3 , name:"Mohsen",family:"rajaei",city:"Shiraz",phone: "02198056781",date:"2024/06/18",totalPrice:"11000",invoiceNumber:"1243"},
    {id: 4 , name:"Ahmad",family:"marofkhani",city:"Zanjan",phone: "02123547908",date:"2023/03/10",totalPrice:"32500",invoiceNumber:"8990"},
    {id: 5 , name:"Hasan",family:"mortazavi",city:"Alborz",phone: "02133451243",date:"2022/11/04",totalPrice:"14000",invoiceNumber:"9087"},
    {id: 6 , name:"AKbar",family:"nankali",city:"Qazvin",phone: "02833455181",date:"2022/01/14",totalPrice:"10000",invoiceNumber:"9077"},
]

// generate random number
let randomNumber = Math.random() * 6
let randomData = Math.floor(randomNumber)


let totalPrice = document.getElementById("total-price")
let dateNumber = document.getElementById("date-number")
let invoiceNumber = document.getElementById("invoice-number")
let name = document.getElementById("name")
let family = document.getElementById("family")
let city = document.getElementById("city")
let phone = document.getElementById("phone")

dateNumber.innerHTML=invoiceData[randomData].date
totalPrice.innerHTML=invoiceData[randomData].totalPrice
invoiceNumber.innerHTML=invoiceData[randomData].invoiceNumber
name.innerHTML=invoiceData[randomData].name
family.innerHTML=invoiceData[randomData].family
city.innerHTML=invoiceData[randomData].city
phone.innerHTML=invoiceData[randomData].phone