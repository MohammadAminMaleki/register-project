let data=[
    {id:1,productName:"laptop",price: 3000,number:1},
    {id:2,productName:"speaker",price: 3500,number:2},
    {id:3,productName:"mobile",price: 4000,number:1},
    {id:4,productName:"computer",price: 5650,number:1},
    {id:5,productName:"pen",price: 100,number:3},
    {id:6,productName:"paper",price: 120,number:5},
    // {id:7,productName:"flower",price: 243,number:1},
    // {id:8,productName:"washing machine",price: 4548,number:1},
    // {id:9,productName:"jacket",price: 1234,number:2},
    // {id:10,productName:"notebook",price: 2000,number:4},
    // {id:11,productName:"tv",price: 1290,number:1},
]

let sum = 0;
for(let i = 0;i<data.length;i++){
    sum = sum + data[i].price;
}

let selectTags = document.getElementsByTagName('td')
let totalPrice = document.getElementById('total')

console.log(selectTags)
selectTags[0].innerHTML = data[0].productName;
selectTags[1].innerHTML = data[0].number;
selectTags[2].innerHTML = data[0].price;
selectTags[3].innerHTML = (data[0].price * data[0].number);

selectTags[4].innerHTML = data[1].productName;
selectTags[5].innerHTML = data[1].number;
selectTags[6].innerHTML = data[1].price;
selectTags[7].innerHTML = (data[1].price * data[1].number);

selectTags[8].innerHTML = data[2].productName;
selectTags[9].innerHTML = data[2].number;
selectTags[10].innerHTML = data[2].price;
selectTags[11].innerHTML = (data[2].price * data[2].number);

selectTags[12].innerHTML = data[3].productName;
selectTags[13].innerHTML = data[3].number;
selectTags[14].innerHTML = data[3].price;
selectTags[15].innerHTML = (data[3].price * data[3].number);

selectTags[16].innerHTML = data[4].productName;
selectTags[17].innerHTML = data[4].number;
selectTags[18].innerHTML = data[4].price;
selectTags[19].innerHTML = (data[4].price * data[4].number);

selectTags[20].innerHTML = data[5].productName;
selectTags[21].innerHTML = data[5].number;
selectTags[22].innerHTML = data[5].price;
selectTags[23].innerHTML = (data[5].price * data[5].number);

//total price
totalPrice.innerHTML = sum;

















