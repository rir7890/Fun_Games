// let age = 20
let hasBlackjack = false
let cards = [];
let sum = 0;

let isAlive = false;

let message = '';
// console.log(sum)

let messageEl = document.getElementById("message-el");
// let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector(".card-el");

let player = { //player is the object
    Name: "Rahul",
    Chips: 45,
    sayHello: function() {
        console.log("hi rahul");
    }
}
let playerEl = document.getElementById("player-el");
playerEl.textContent = player.Name + " : $" + player.Chips;

function getRandomCard() {

    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber > 10) {
        return 10;
    } else if (randomNumber == 1) {
        return 11;
    } else {
        return randomNumber;
    }
}

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame() {


    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }



    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "do you want to draw a new card?";
    } else if (sum === 21) {
        message = "wohoo! you have got blackjack!";
        hasBlackjack = true;
        // isAlive = false;
    } else if (sum > 21) {
        message = "you are out of the game";
        isAlive = false;
    }
    messageEl.textContent = message;
    //console.log(message);
}

// console.log(hasBlackjack);
// console.log(isAlive);

function newCard() {
    //Only allow the player to get a new card if she is alive and does not have black jack
    if (isAlive === true && hasBlackjack === false) {
        let card = Math.floor(Math.random() * 11 + 2);
        sum += card;
        cards.push(card);
        renderGame();
    }
}