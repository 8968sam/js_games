let randomNumber_1 = Math.floor(Math.random() *6) + 1;
let randomNumber_2 = Math.floor(Math.random() *6) + 1;

let randomImage_1 = "images/dice" + randomNumber_1 + ".png";
let randomImage_2 = "images/dice" + randomNumber_2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", `${randomImage_1}`);
document.querySelectorAll("img")[1].setAttribute("src", `${randomImage_2}`);

if(randomNumber_1 === randomImage_2){
    document.querySelector("h1").textContent = "Draw";
}else if(randomImage_1 < randomImage_2){
    document.querySelector("h1").textContent = "Player2 won!";
}else{
    document.querySelector("h1").textContent = "Player1 Won!";
}