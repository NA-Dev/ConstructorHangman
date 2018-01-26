let Letter = require('./constructLetter.js'),
    Word = require('./constructWord.js'),
    inquirer = require('inquirer');

let word = new Word,
    attempts = 6;

let question = {
    name: "guessLetter",
    message: "Guess a new letter.",
    validate: function(input) {
        // removes digits and special characters from input then capitalizes
        input = input.replace(/\W|\d/g, '').substr(0, 1).toUpperCase();
        let guessedIndex = word.guessed.indexOf(input);

        if (guessedIndex !== -1) {
        return "You already guessed " + input + ", try again.";

        } else if (!input) {
        return "Invalid input, please enter a letter.";

        } else {
            this.guessedLetter = input;
            return true;
        }
    }
}

inquirer
.prompt(question)
.then(function(input) {
    // removes digits and special characters from input then capitalizes
    let t = input.replace(/\W|\d/g, '').substr(0, 1).toUpperCase();
    console.log(input);
    letter = new Letter(input);
});


