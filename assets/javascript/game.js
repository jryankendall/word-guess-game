var wordsList = ["tremble", "barbecue", "soylent", "heretofore", "hitherto", "crispy", 
"vinegar", "quinoa", "masonry", "alcoholism", "unionize", "eulogize", "phlebotomy", "quest", "liberation",
"crawlspace", "justify", "phantom", "appreciate", "calamity", "gilded", "monetize", "transaction", "unbridled",
"chartreuse", "divulge", "excavate", "weather", "xenomorph", "fruitbat", "rudimentary"];

var goalWord = "";
var goalWordArray = [];
var playerWins = 0;
var playerLosses = 0;
var guessesRemaining = 1;
var guessedLetters = [];
var correctLetters = [];

var bigWordDisplay = document.getElementById("word-big-blank-display");
var guessedLettersDisplay = document.getElementById("guessed-letters-display");
var guessesRemainingP = document.getElementById("guesses-remaining-p");

document.body.onload = function() {
    initGame();
}

function initGame() {
    //Code to start game goes here
    clearDisplays();
    getWord();
    printBlankSpaces();
    setGuessesLeft();
}

function clearDisplays() {
    guessesRemainingP.innerHTML = "";
    bigWordDisplay.innerHTML = "";
    guessedLettersDisplay.innerHTML = "";

}

function setGuessesLeft() {
    //Resets number of remaining guesses, resets guessed letters array
    guessesRemaining = 7;
    guessedLetters = [];
    for (i = 0; i < guessesRemaining; i++){ 
        guessesRemainingP.append("I");
    }
}
 
function printBlankSpaces() {
    //Empties the correctLetters array, erases the marquee
    //Fills marquee and correctlettters array with underscores
    correctLetters = [];
    for(i = 0; i < goalWord.length; i++){
        var blankSpot = document.createTextNode("_");
        bigWordDisplay.appendChild(blankSpot);
        correctLetters.push("_");
    }
}



function playerDefeated() {
    alert("Looks like you lose, loser.");
    printGoalWord();
    playerLosses++;
}

function playerVictory() {
    alert("Congratulations, you win!");
    playerWins++;
}

function printGoalWord() {
    //Displays the full word, this function is called when the player loses
    bigWordDisplay.innerHTML = "";
    for(i = 0; i < goalWordArray.length; i++){
        bigWordDisplay.append(goalWordArray[i]);
    }
}

function displayScore() {
    // updates the score display when called
    document.getElementById("wins-counter").innerHTML = playerWins;
    document.getElementById("loss-counter").innerHTML = playerLosses;
}

function getWord() {
    //Fetches a random word from the array and copies it into the goalWord variable.
    //Then takes that word and puts each letter into a separate index in an array
    //All after ensuring the word variable and array are both empty.
    goalWord = "";
    goalWordArray = [];
    goalWord = wordsList[Math.floor(Math.random()*wordsList.length)];
    for(i = 0; i < goalWord.length; i++) {
        goalWordArray.push(goalWord.charAt(i));
    }
}

function wrongGuess() {

    //Decrements guessesremaining's value, checks if the player is out of guesses
    guessesRemaining--;
    console.log(guessesRemaining);
    guessesRemainingP.innerHTML = "";
    for (i = 0; i < guessesRemaining; i++){ 
        guessesRemainingP.append("I");
    }

    if (guessesRemaining < 0) {
        //Declares player defeat if last guess is used
        playerDefeated();
    } else { return; }
}

function catchPlayerKey(eventInput, keyUnicode) {
    console.log(eventInput);

    var keyPressed = eventInput.toLowerCase();

    //Checks if key is spacebar, and starts new game if it is.

    if (keyPressed == " ") {
        initGame();
    }
    else

    //Checks to make sure player input is a letter from A to Z

    { if (keyUnicode <= 90 && keyUnicode >= 65) { 
        console.log(keyUnicode);

        //Checks if key has not already been guessed
        if (guessedLetters.indexOf(keyPressed) == -1) {


        //Checks if pressed key is in goal word at least once
        if (goalWordArray.indexOf(keyPressed) != -1 ) {
            bigWordDisplay.innerHTML = "";

        // If it hasn't been guessed and is in the word, places the letter in the correctLetters array
        for (i = 0; i < goalWordArray.length; i++) {
            if (goalWordArray[i] == keyPressed) {
                correctLetters[i] = keyPressed;
            }

            //Prints out the word marquee again
            bigWordDisplay.append(correctLetters[i]);

        }

        //Checks to see if the player has won
            
        if (correctLetters.indexOf("_") == -1) {
            playerVictory();
        }

        //Decrements guesses remaining if letter is not in word and hasn't been guessed already
        }  else if (goalWordArray.indexOf(keyPressed) == -1) {
            wrongGuess();
        } 

        //Adds the letter to the array of letters guessed, prints them out
        guessedLetters.push(keyPressed);
        guessedLettersDisplay.innerHTML = "";
        for (u = 0; u < guessedLetters.length; u++) {
            guessedLettersDisplay.append(guessedLetters[u]);
            if (guessedLetters.length > 1 && u < guessedLetters.length -1) {
                guessedLettersDisplay.append(", ");
            }
        }


    }

    }
}
};


//Sets up the page to listen for keyups
document.addEventListener("keyup", function() {
    catchPlayerKey(event.key, event.keyCode); });
