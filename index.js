var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomImageNumber1 = "dice" + randomNumber1 + ".png";

var randomImageSource1 = "images/" + randomImageNumber1;

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);

// For second image

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageNumber2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "images/" + randomImageNumber2;

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 wins!";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
