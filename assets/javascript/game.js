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
    answerSpacesText.innerHTML = answerSpaces.join(" ");
}
showAnswerSpaces() 

// Function - reload page
function reloadPage() {
    location.reload();
  }

// Function - make uppercase letters???
// var userGuessUppercase = userGuess.toUpperCase();
// var alphabetsUppercase = alphabets.toUpperCase();

// Functions - event listener on user guess
document.onkeyup = function(event) {

    // Function - clear direction text
    directionsText.textContent = "";

    var userGuess = event.key;

    if (guessedRight.includes(userGuess)) {
            alert ("you guessed that already");
    }

    else if (guessedWrong.includes(userGuess)) {
            alert ("you guessed that already");
    }

    else {
        if (answerNameSplit.includes(userGuess)) {
            var index = answerNameSplit.indexOf(userGuess);

            for (i=0; i<answerNameSplit.length; i++)
            {
                if (answerNameSplit[i] == userGuess)
                {
                    answerSpaces[i] = userGuess; 
                }
            }
            
            guessedRight.push(userGuess);
            guessedRight.sort();
            guessedRightText.innerHTML = guessedRight.join(", ");

            if (guessedRight.length === answerNameSplit.length) {
                alert("you win!");
                reloadPage();
            }
        }
        else if (alphabets.includes(userGuess)){
            guessedWrong.push(userGuess);
            guessedWrong.sort();
            guessedWrongText.innerHTML = guessedWrong.join(", ");

            if (guessedWrong.length > 9) {
                alert("you lose!");
            }
        }    
        else {
            alert("alphabets only...")
        }
    }

    console.log (answerSpaces);
    console.log (guessedRight);
    console.log (guessedWrong);
    // console.log (chanceRemaining);
}