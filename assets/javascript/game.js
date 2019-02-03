// Arrays that lists out all of the options
var characterNames = ["minnie", "ariel", "elsa", "jasmine", "belle"];
var alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// Variables - generate random name from array
var answerName = characterNames[Math.floor(Math.random() * characterNames.length)];
var answerNameSplit = answerName.split("");
console.log(answerName);
console.log(answerNameSplit);

// Variables - hold the record of wins and loses
var answerSpaces = [];
var guessedRight = [];
var guessedWrong = [];
var chanceRemaining = 10;

// Variables - provide references to HTML
var answerSpacesText = document.getElementById("answer-spaces-text");
var guessedRightText = document.getElementById("guessed-right-text");
var guessedWrongText = document.getElementById("guessed-wrong-text");
var chanceRemaining = document.getElementById("chance-remaining");
var directionsText = document.getElementById("directions-text");

// Function - create answer spaces
function showAnswerSpaces() {
    for (i = 0; i < answerNameSplit.length; i++) {
        console.log(i);
        answerSpaces.push("_");
    }
}
showAnswerSpaces() 

// Functions - event listener on user guess
document.onkeyup = function(event) {

    // directionsText.textContent = "";

    var userGuess = event.key;
    console.log (userGuess);
    // var userGuessUppercase = userGuess.toUpperCase();
    // var alphabetsUppercase = alphabets.toUpperCase();

    if (answerNameSplit.includes(userGuess)) {
        var index = answerNameSplit.indexOf(userGuess);
        if (index !== -1) {
            answerSpaces[index] = userGuess;
        }
        guessedRight.push(userGuess);
        guessedRight.sort();
    }
    else {
        guessedWrong.push(userGuess);
        guessedWrong.sort();

        function chanceDeduct(num1) {
            num1 - 1;
        }
        return chanceDeduct();
    }    

    console.log (answerSpaces);
    console.log (guessedRight);
    console.log (guessedWrong);
}

// Function - write HTML content 
// function write() {
//     document.getElementById("answer-space-text").innerHTML = answerSpacesText.join("");
// }
// console.log(write(answerSpacesText));

// chartAt?
// logical operators?
// Hide the directions?
