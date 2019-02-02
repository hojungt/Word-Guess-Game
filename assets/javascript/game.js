// Arrays that lists out all of the options
var characterNames = ["mickey", "ariel", "simba", "aladin",];
var alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// Variables - hold the number of wins and loses
var guessedRightAnswer = [];
var guessedRight = [];
var guessedWrong = [];
var chanceRemaining = 10;

// Variables - hold references to HTML
var directionsText = document.getElementById("directions-text");
var guessedRight = document.getElementById("guessed-right-text");
var guessedWrong = document.getElementById("guessed-wrong-text");
var chanceRemaining = document.getElementById("chance-remaining");

// Variables - generate random name from array
var answerName = characterNames[Math.floor(Math.random() * characterNames.length)];
var answerNameSplit = answerName.split("");


var answerNameSplitCharacter

// Functions - event listener on user guess
document.onkeyup = function(event) {

    // vvv does not work
    // directionsText.textContent = "";

    var userGuess = event.key;

    for (i = 0; i < answerName.length; i++) {
        if (answerName.charAt(i) == upperKeyGuess) {
            if (rightGuess.indexOf(upperKeyGuess) < 0) {
                rightGuess.push(upperKeyGuess);
            }
        }

    if (userGuess === answerName.charAt(i) && userGuess === alphabets.charAt(i)) {
        guessedRight++;
    }
    else if (userGuess !== answerName.charAt(i) && userGuess === alphabets.charAt(i)) {
        guessedWrong++;
        chanceRemaining--;

    }
    else {

    }

}


// check all variables are declared and connected to HTML
// chartAt  logical operators   answer box and wrong alphabets?



// // Hide the directions
