// Arrays that lists out all of the options
var characterNames = ["mickey", "ariel", "simba", "aladin"];
var alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// Variables to hold the number of wins and loses
var GuessedRight = 0;
var GuessedWrong = 0;
var ChanceRemaining = 10;

// Variables that hold references to HTML
var GuessedRight = document.getElementById("guessed-right-text");
var GuessedWrong = document.getElementById("guessed-wrong-text");
var ChanceRemaining = document.getElementById("chance-remaining");

// Functions
var Name = Math.floor(Math.random()*characterNames.length);

document.onkeyup = function(event) {
}