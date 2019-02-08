var wordsList = ["tremble", "barbecue", "soylent", "heretofore", "hitherto", "crispy", 
"vinegar", "quinoa", "masonry", "alcoholism", "unionize", "eulogize", "phlebotomy", "quest", "liberation",
"crawlspace", "justify", "phantom", "appreciate", "calamity", "gilded", "monetize", "transaction", "unbridled",
"chartreuse", "divulge", "excavate", "weather", "xenomorph", "fruitbat", "rudamentary"];

var goalWord = "";
var goalWordArray = [];
var playerWins = 0;
var playerLosses = 0;
var guessesRemaining = 1;
var guessedLetters = [];

var bigWordDisplay = document.getElementById("word-big-blank-display");

document.body.onload = function() {
    initGame();
}

function initGame() {
    //Code to start game goes here
    getWord();
    printBlankSpaces();
}

 
function printBlankSpaces() {
    bigWordDisplay.innerHTML = "";
    for(i = 0; i < goalWord.length; i++){
        var blankSpot = document.createTextNode("_");
        bigWordDisplay.appendChild(blankSpot);
    }
}

function resetVariables() {
    playerWins = 0;
    playerLosses = 0;
    guessesRemaining = 5;
    guessedLetters = [];
    goalWord = "";
}

function playerDefeated() {
    alert("Looks like you lose, loser.");
    incrementLosses();
    playerLosses++;
}

function playerVictory() {
    alert("Congratulations, you win!");
    incrementWins();
    playerWins++;
}

function displayScore() {
    // updates the score display when called
    document.getElementById("wins-counter").innerHTML = playerWins;
    document.getElementById("loss-counter").innerHTML = playerLosses;
}

function getWord() {
    //Fetches a random word from the array and copies it into the goalWord variable.
    //Then takes that word and puts each letter into a separate index in an array
    goalWord = "";
    goalWordArray = [];
    goalWord = wordsList[Math.floor(Math.random()*wordsList.length)];
    for(i = 0; i < goalWord.length; i++) {
        goalWordArray.push(goalWord.charAt(i));
    }
}

function wrongGuess() {
    guessesRemaining--;

    if (guessesRemaining < 0) {
        playerDefeated();
    } else { return; }
}

function catchPlayerKey(eventInput) {
    console.log(eventInput);
    var keyPressed = eventInput.toLowerCase();
    if (keyPressed == " ") {
        initGame();
    }
    else
    { if (goalWordArray.indexOf(keyPressed) != -1 ) {
        for (i = 0; i < goalWordArray.length; i++) {

        }

        } 
        
        else

        {;
        }
    }
}

document.addEventListener("keyup", function() {
    catchPlayerKey(event.key);
});

