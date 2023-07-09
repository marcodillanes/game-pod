
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //generates a number between 1-6
var randomDiceImage = "dice" + randomNumber1 + ".png"; // this is combining the values of 'dice' + randomly generating a number 1-6 + .png to create a filename of an image
var randomImageSource = "DiceImages/" + randomDiceImage; // creates a string by combining 'diceimages' witht the value of randomDiceImage


var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "DiceImages" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Play 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}


function refreshPage() {
    location.reload();
}

