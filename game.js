var path_img = "images/dice"

var title = document.querySelector("h1")

var randomNumber1 = Math.floor(Math.random() * 6) + 1 ;
var player1 = document.getElementById("player1");

var randomNumber2 = Math.floor(Math.random() * 6) + 1 ;
var player2 = document.getElementById("player2");


player1.setAttribute("src", path_img+randomNumber1+".png")
player2.setAttribute("src", path_img+randomNumber2+".png")


if(randomNumber1 > randomNumber2){
  title.innerHTML = " Player 1 Win!"
}
else if (randomNumber1 < randomNumber2){
  title.innerHTML = "Player 2 Win!"
}
else {
  title.innerHTML = "Draw!"
}
