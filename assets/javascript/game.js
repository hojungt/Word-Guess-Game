// Arrays that lists out all of the options
var characterNames = ["mickey", "ariel", "simba", "aladin",];
var alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// Variables to hold the number of wins and loses
var guessedRight = 0;
var guessedWrong = 0;
var chanceRemaining = 10;

// Variables that hold references to HTML
var directionsText = document.getElementById("directions-text");
var guessedRight = document.getElementById("guessed-right-text");
var guessedWrong = document.getElementById("guessed-wrong-text");
var chanceRemaining = document.getElementById("chance-remaining");

// Functions - generate random name from array
var Name = Math.floor(Math.random()*characterNames.length);

// Functions - event listener on user guess
document.onkeyup = function(event) {
    var userGuess = event.key;
}


// check all variables are declared and connected to HTML
// chartAt  logical operators   answer box and wrong alphabets?


// Hide the directions
directionsText.textContent = "";
