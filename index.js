let randomNumber1 = Math.floor(Math.random() * 6) + 1; // return numbers from 1-6

let randomImageSource1 = "images/dice" + randomNumber1 + ".png";

document.getElementsByClassName("img1")[0].setAttribute("src", randomImageSource1);


let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.getElementsByClassName("img2")[0].setAttribute("src", randomImageSource2);


if (randomNumber1 > randomNumber2) { //If player 1 wins
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) { // if player 2 wins
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else { //draw if dices are equal
  document.querySelector("h1").innerHTML = "Draw!";
}