var wordsList = ["tremble", "barbecue", "soylent", "heretofore", "hitherto", "crispy", 
"vinegar", "quinoa", "masonry", "alcoholism", "unionize", "eulogize", "phlebotomy", "quest", "liberation",
"crawlspace", "justify", "phantom", "appreciate", "calamity", "gilded", "monetize", "transaction", "unbridled",
"chartreuse", "divulge", "excavate", "weather", "xenomorph", "fruitbat", "rudamentary"];

var goalWord = "";
var playerWins = 0;
var playerLosses = 0;
var guessesRemaining = 1;
var guessedLetters = [];

function playerDefeated() {
    alert("Looks like you lose, loser.");
}

function displayScore() {
    document.getElementById("wins-counter").innerHTML = playerWins;
    document.getElementById("loss-counter").innerHTML = playerLosses;
}

function getWord() {
    goalWord = wordsList[Math.floor(Math.random()*wordsList.length)];
}

function incrementWins(){
    playerWins++;
}

function incrementLosses() {
    playerLosses++;
}

function wrongGuess() {
    guessesRemaining--;

    if (guessesRemaining < 0) {
        playerDefeated;
    }
}

