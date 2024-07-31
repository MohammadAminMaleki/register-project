let price = document.getElementById("price");
let amount = document.getElementById("amount");
let name1 = document.getElementById("name");

let username = document.getElementById("username");
let email1 = document.getElementById("email");
let mobileNumber = document.getElementById("tel");
let password = document.getElementById("password");

let editBtn = document.getElementById("editbtn");

let button = document.getElementById("button");
let sum = document.getElementById("total__price");
let multiple = 0;

let editButton = document.getElementById("edit");

function editButton1() {
  let td = document.getElementsByTagName("td");
  let buttonSelect = document.getElementById("edit");
  let table1 = document.getElementById("tableTr");

  // console.log(buttonSelect);
  // name1.value = td[0].innerHTML
  // amount.value = td[1].innerHTML
  // price.value = td[2].innerHTML

  // amount.value = localStorage.getItem('amountValue')
  // price.value = localStorage.getItem('priceValue')
  // name1.value = localStorage.getItem('nameValue')
}

function signUpFunc() {
  localStorage.setItem("usernameValue", username.value);
  localStorage.setItem("emailValue", email1.value);
  localStorage.setItem("mobileNumberValue", mobileNumber.value);
  localStorage.setItem("passwordValue", password.value);
}

button.addEventListener("click", function (event) {
  event.preventDefault();
  localStorage.setItem("priceValue", price.value);
  localStorage.setItem("amountValue", amount.value);
  localStorage.setItem("nameValue", name1.value);

  let tbody = document.getElementById("tbody");
  let newTr = document.createElement("tr");
  // newTr.setAttribute('id','tableTr')
  newTr.innerHTML = `
    <td>${localStorage.getItem("nameValue")}</td>
    <td>${localStorage.getItem("amountValue")}</td>
    <td>${localStorage.getItem("priceValue")}</td>
    <button id="edit" onclick="editButton1()">ویرایش</button>
    `;

  let createButton = document.createElement("button");
  createButton.setAttribute("id", "edit");
  newTr.appendChild(createButton);

  tbody.appendChild(newTr);
  price.value = "";
  amount.value = "";
  name1.value = "";

  let getPrice = localStorage.getItem("priceValue");
  let getAmount = localStorage.getItem("amountValue");

  multiple = multiple + getAmount * getPrice;
  // multiple = (multiple + (amount.value * price.value))
  console.log(price.value, amount.value, name1.value);
  sum.innerHTML = multiple;

  newTr.addEventListener("click", function (event) {
    let children = event.target.parentElement.children;
    price.value = children[2].innerHTML;
    amount.value = children[1].innerHTML;
    name1.value = children[0].innerHTML;

    let item1 = localStorage.getItem("nameValue");
    let item2 = localStorage.getItem("amountValue");
    let item3 = localStorage.getItem("priceValue");

    console.log("1");
    editBtn.addEventListener("click", function (event) {
      event.preventDefault();
      console.log("2");
      children[2].innerHTML = price.value;
      children[1].innerHTML = amount.value;
      children[0].innerHTML = name1.value;
    });
  });
});