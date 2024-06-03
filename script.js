let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomDiceImages1 = "\IMAGES/dado" + randomNumber1 + ".png";
let player1 = document.querySelectorAll("img")[0].setAttribute("src",randomDiceImages1);

let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomDiceImages2 = "\IMAGES/dado" + randomNumber2 + ".png";
let player2 = document.querySelectorAll("img")[1].setAttribute("src",randomDiceImages2);



if (randomNumber1 > randomNumber2){
    document.querySelector("h3").innerHTML = "Fantastico! Giocatore 1 ha vinto il match";
}
else if (randomNumber1 == randomNumber2){
    document.querySelector("h3").innerHTML = "Pareggio!";
}
else if (randomNumber1 < randomNumber2){
    document.querySelector("h3").innerHTML = "Wow! Giocatore 2 ha vinto il match";
}

document.getElementById("playAgain").addEventListener("click", function() {
    location.reload();
});