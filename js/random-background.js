
/* random image backgroun */
let randomBackground = ['65ea973aff8798ab070de71f_most beautiful landscapes in the world.webp','65ea99845e53084280471b71_most beautiful landscapes in the world.webp','Canada-Rockies-2101-Edit.jpg','659e6c1875a6ef6d59572be3_types of landscapes.webp','dab558241364bd6da1a52aa396f041a4.jpeg']
let background = document.body
let randomNumber = Math.random() * randomBackground.length
let roundRandomNumber = Math.floor(randomNumber)
background.style.backgroundImage = `url("../images/${randomBackground[roundRandomNumber]}")`
