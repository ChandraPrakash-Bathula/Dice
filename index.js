var randomNumber1 = Math.floor(Math.random() * 6) +1; //1-6.
var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1-dice6png
var randomSourceImage = "images/" + randomDiceImage;//images-dice1.png-images-dice6.png
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomSourceImage);

var randomNumber2 = Math.floor(Math.random() * 6 )+1;
var randomDiceImage2 = "dice" + randomNumber2 +".png";
var randomSourceImage2 = "images/" + randomDiceImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomSourceImage2);

//If player 1 wins
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🥇 Player 1 Wins!";

    // alert("Hey  Player1  you won ");
    // prompt("Do you want to comment anything about player2  Now😉😉😉😉");
}else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "🥇 Player 2 Wins!";

    // alert("Hey Player2  Now you won ");
    // prompt("Do you want to comment anything about player1  Now😉😉😉😉");
}else{
    document.querySelector("h1").innerHTML = "Draw!";
    alert("Hey uh people are equal");
}