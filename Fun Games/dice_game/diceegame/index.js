var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var addimage = "images/dice" + randomNumber1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", addimage);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var add2image = "images/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", add2image);

/* Create
var randomnumber2=Math.floor(Math.random()*6)+1;
var add2image = "images/dice"+randomnumber2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src", add2image);
*/

if (randomNumber1 == randomNumber2) {
    document.querySelector("h1").textContent = "you win!";
} else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "player 1 wins!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "player 2 wins!";
}