// Arrays that lists out all of the options
var characterNames = ["minnie", "ariel", "elsa", "jasmine", "belle"];
var alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// Variables - generate random name from array
var answerName = characterNames[Math.floor(Math.random() * characterNames.length)];

var answerNameSplit = answerName.split("");
console.log (answerNameSplit);

// Variables - hold the number of wins and loses
var answerSpaces;
var guessedRight = [];
var guessedWrong = [];
var chanceRemaining = 10;
console.log(answerSpaces);
// Variables - hold references to HTML
var directionsText = document.getElementById("directions-text");
var answerSpaces = document.getElementById("answer-spaces-text");
var guessedRight = document.getElementById("guessed-right-text");
var guessedWrong = document.getElementById("guessed-wrong-text");
var chanceRemaining = document.getElementById("chance-remaining");

// Function - create answer spaces???
function showAnswerSpaces() {
    answerSpaces = [];
    for (i = 0; i < answerNameSplit.length; i++) {
        console.log(i);
        answerSpaces.push("_");
    }
}
showAnswerSpaces();

// Functions - event listener on user guess
document.onkeyup = function(event) {

    // directionsText.textContent = "";

    var userGuess = event.key;
    // var userGuessUppercase = userGuess.toUpperCase();
    // var alphabetsUppercase = alphabets.toUpperCase();

    // for (i = 0; i < alphabets.length; i++) {
    //     if (userGuess === alphabets[i]) {
    //         for (j = 0; j < characterNames.length; j++){
    //             if (userGuess === answerNameSplit.charAt(j)) {
    //                 guessedRight.push("");
    //             }
    //             else {
    //                 guessedWrong.push("");
    //             }
    //         }
    //     }
    // }
    // console.log(userGuess);
    answerNameSplit.includes(userGuess);
    // console.log(answerNameSplit.includes(userGuess));

}


// chartAt?
// logical operators?
// Hide the directions?
