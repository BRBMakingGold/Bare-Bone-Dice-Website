// Generates random number from 1 to 6
const firstRandomNumber = Math.floor(Math.random() * 6) + 1;

// Loads the dice
const firstDiceImage = "img/dice" + firstRandomNumber + ".png";

//Dice for player 1
document.querySelectorAll("img")[0].setAttribute("src", firstDiceImage);

// Generates random number from 1 to 6
const secondRandomNumber = Math.floor(Math.random() * 6) + 1;

// Loads the dice
const secondDiceImage = "img/dice" + secondRandomNumber + ".png";

// Dice for player 2
document.querySelectorAll("img")[1].setAttribute("src", secondDiceImage);

// Logic Winner
if (firstRandomNumber > secondRandomNumber) {
  document.querySelector(".logic").innerHTML = "Player 1 Wins";
} else if (firstRandomNumber < secondRandomNumber) {
  document.querySelector(".logic").innerHTML = "Player 2 Wins";
} else {
  document.querySelector(".logic").innerHTML = "DRAW";
}
