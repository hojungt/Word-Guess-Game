# Word Guess Game: Disney Characters
[Word Guess Game](https://hojungt.github.io/Word-Guess-Game/) is a dynamic web game, similar to hangman, that asks user to guess a randomly generated answer and score to win the game.

-  __Game Rules__:
1. Begin the game by entering any key.
2. The numbers of underscored spaces are assigned by the number of alphabets of the answer.
3. For every letter guessed right, it will pop up in Right Guesses and replace the underscored spaces with the guess.
4. For every letter guessed wrong, it will pop up in Wrong Guesses and deduct chances remaining.
5. If you have no chances remaining, you are out!

### Project Goal
Creating a game app that runs in the browser and feature dynamically updated HTML and CSS powered by JavaScript code.

### Application Feature
The .js code stores an array of string values to be the possible answer choices. With randomizer, the code picks one of the values in this array as the answer to be guessed for the round. Event listener then picks up the key pressed by user and reference logical operators, which comprise the guessed-right, guessed-wrong, winning, and losing conditions. All condition outputs are then displayed in HTML. 


### Resources
- Language
    - HTML
    - CSS
    - JavaScript

### Special Thanks
Jamal O'Garro, Michael Russo, Pete Tascio, and [Henry Chen](https://github.com/hchen651).

### Notes
This is an ongoing project. Comments and feedbacks are appreciated!