// Arrays that lists out all of the options
var characterNames = ["ariel", "elsa", "mulan", "simba", "lilo", "jasmine", "cinderella", "belle", "jafar", "pocahontas", "alice", "bambi"];
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
var chanceRemainingText = document.getElementById("chance-remaining");
var directionsText = document.getElementById("directions-text");

// Method - display score 
chanceRemainingText.innerHTML = chanceRemaining;

// Function - create answer spaces
function showAnswerSpaces() {
    for (i = 0; i < answerNameSplit.length; i++) {
        // console.log(i);
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

// Functions - event listener on key pressed
document.onkeyup = function(event) {

    // clear direction text
    directionsText.textContent = "";

    var userGuess = event.key;

    // eliminate duplicate guesses in guessedRight
    if (guessedRight.includes(userGuess)) {
            alert ("you guessed that already");
    }

    // eliminate duplicate guesses in guessedWrong
    else if (guessedWrong.includes(userGuess)) {
            alert ("you guessed that already");
    }

    else {
        // logic operator - if the guess is correct...
        if (answerNameSplit.includes(userGuess)) {
            var index = answerNameSplit.indexOf(userGuess);

            for (i=0; i<answerNameSplit.length; i++)
            {
                if (answerNameSplit[i] == userGuess)
                {
                    answerSpaces[i] = userGuess; 
                }
            }
            // generate guessedRightText and answerSpacesText
            guessedRight.push(userGuess);
            guessedRight.sort();
            guessedRightText.innerHTML = guessedRight.join(", ");
            answerSpacesText.innerHTML = answerSpaces.join(" ");
            
            // win condition:
            if (answerSpaces.join("") == answerName) {
                alert("you win!");
                // not sure how to only reload name and keep track of win score. need comments
                reloadPage();
            }
        }

        // logic operator - if the guess is incorrect...
        else if (alphabets.includes(userGuess)){
            guessedWrong.push(userGuess);
            guessedWrong.sort();
            guessedWrongText.innerHTML = guessedWrong.join(", ");
            chanceRemainingText.innerHTML = -1 + chanceRemaining--;

            // lose condition:
            if (guessedWrong.length > 9) {
                alert("you lose!");
            }
        }  
        // eliminate uses of non-alphabet characters  
        else {
            alert("alphabets only...")
        }
    }
    // console.log (answerSpaces);
    // console.log (guessedRight);
    // console.log (guessedWrong);
}