// Variables - provide references to HTML
var answerSpacesText = document.getElementById("answer-spaces-text");
var guessedRightText = document.getElementById("guessed-right-text");
var guessedWrongText = document.getElementById("guessed-wrong-text");
var chanceRemainingText = document.getElementById("chance-remaining");
var directionsText = document.getElementById("directions-text");
var totalWinsText = document.getElementById("total-wins-text");

// rewrite all variables with state object
var state = {
    characterNames: ["ariel", "sebastian", "stitch", "rapunzel", "mulan", "simba", "lilo", "jasmine", "cinderella", "belle", "aladdin", "jafar", "pocahontas", "alice", "bambi"],
    alphabets: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p","q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    answerName: [],
    answerNameSplit: [],
    answerSpaces: [],
    guessedRight: [],
    guessedWrong: [],
    chanceRemaining: 10,
    totalWins: 0
};

// // set the value of answerName after creating the object
// state.answerName = state.characterNames[Math.floor(Math.random() * state.characterNames.length)];
// console.log(state.answerName);

// // set the value of answerNameSplit
// state.answerNameSplit = state.answerName.split("");
// console.log(state.answerNameSplit);

// Method - display score 
chanceRemainingText.innerHTML = state.chanceRemaining;
totalWinsText.innerHTML = state.totalWins;

// Function - update the value of answerNames
function clearAnswerName() {
    state.answerSpaces.length=0;
}

// Function - reload page
function reloadPage() {
    location.reload();
  }

// Function - reset guessedRight and guessedWrong
function resetGuesses () {
    guessedRightText.innerHTML = [];
    state.guessedRight.length = 0;
    guessedWrongText.innerHTML = [];
    state.guessedWrong.length = 0;
}

// Function - create answer spaces
function showAnswerSpaces() {
    state.answerName = state.characterNames[Math.floor(Math.random() * state.characterNames.length)];
    state.answerNameSplit = state.answerName.split("");
    for (i = 0; i < state.answerNameSplit.length; i++) {
        // console.log(i);
        state.answerSpaces.push("_");
    }
    answerSpacesText.innerHTML = state.answerSpaces.join(" ");
}

// ==================================================================================
// When page is load, display answer spaces
showAnswerSpaces() 

// Event listener on key pressed
document.onkeyup = function(event) {

    // clear direction text
    directionsText.textContent = "";

    var userGuess = event.key;

    // eliminate duplicate guesses in guessedRight
    if (state.guessedRight.includes(userGuess)) {
            alert ("you guessed that already");
    }

    // eliminate duplicate guesses in guessedWrong
    else if (state.guessedWrong.includes(userGuess)) {
            alert ("you guessed that already");
    }

    else {
        // logic operator - if the guess is correct...
        if (state.answerNameSplit.includes(userGuess)) {
            var index = state.answerNameSplit.indexOf(userGuess);

            for (i=0; i<state.answerNameSplit.length; i++)
            {
                if (state.answerNameSplit[i] == userGuess)
                {
                    state.answerSpaces[i] = userGuess; 
                }
            }
            // generate guessedRightText and answerSpacesText
            state.guessedRight.push(userGuess);
            state.guessedRight.sort();
            guessedRightText.innerHTML = state.guessedRight.join(", ");
            answerSpacesText.innerHTML = state.answerSpaces.join(" ");
            
            // win condition:
            if (state.answerSpaces.join("") === state.answerName) {
                alert("Correct! It is " + state.answerName + "!");
                // nkeep track of win score. need comments
                totalWinsText.innerHTML = 1 + state.totalWins++;
                chanceRemainingText.innerHTML = state.chanceRemaining = 10;
                resetGuesses();
                clearAnswerName();
                showAnswerSpaces();
                if (state.totalWins > 4) {
                    alert("you are a true Disney lover!");
                    alert("play again?");
                    reloadPage();
                }
            }
        }

        // logic operator - if the guess is incorrect...
        else if (state.alphabets.includes(userGuess)){
            state.guessedWrong.push(userGuess);
            state.guessedWrong.sort();
            guessedWrongText.innerHTML = state.guessedWrong.join(", ");
            chanceRemainingText.innerHTML = -1 + state.chanceRemaining--;

            // lose condition:
            if (state.guessedWrong.length > 9) {
                alert("you lose!");
                alert("play again?");
                reloadPage();
            }
        }  
        // eliminate uses of non-alphabet characters  
        else {
            alert("lowercase alphabets only...")
        }
    }
    // console.log (answerSpaces);
    // console.log (guessedRight);
    // console.log (guessedWrong);

    // Function - make uppercase letters
    // var userGuessUppercase = userGuess.toUpperCase();
    // var alphabetsUppercase = alphabets.toUpperCase();
}