var randomNumber1 = Math.floor(Math.random() *6 )+1;
var x ="images/" + "dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src",x);

var randomNumber2 = Math.floor(Math.random() *6 )+1;
var y ="images/" + "dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",y);
 

if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent = "Player 1 wins.";
}else if(randomNumber1<randomNumber2){
    document.querySelector("h1").textContent = "Player 2 wins.";
}else{
    document.querySelector("h1").textContent = "It's a tie...";
}