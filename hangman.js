const pokemon = require('pokemon');
      Word = require('./constructWord.js'),
      inquirer = require('inquirer');

var word = new Word(pokemon.random());

function start() {
  word = new Word(pokemon.random());

  inquirer
  .prompt(  
    {
      name: "start",
      type: "confirm",
      message: "Would you like to start a new game of Pokemon Name Hangman?",
      default: true
    })
  .then(function(answers) {

    if (answers.start === true) {
        ask();

    } else {
        console.log("Game ended");
        return;
    }
  });
}

function ask() {

  word.display();
  
  inquirer
  .prompt(  {
    name: "guessLetter",
    type: "input",
    message: "Guess a new letter: ",
    validate: function (input) {
      // removes digits and special characters from input then capitalizes
      let formattedInput = input
        .replace(/\W|\d/g, '')
        .substr(0, 1)
        .toUpperCase();

      let guessedIndex = word.guessedLetters.indexOf(formattedInput);

      if (guessedIndex !== -1) {
        return "You already guessed " + formattedInput + ", try another letter.";

      } else if (!formattedInput) {
        return "Invalid input, please enter a letter.";

      } else {
        return true;
      }
    }
  })
  .then( function( answers ) {
    word.guess(answers.guessLetter);

    if (word.isSolved) {
        
        word.display();
        console.log('~ ~ ~ ~ ~ You Win! ~ ~ ~ ~ ~\n\n');
        start();

    } else {
        ask();
    }

  });
}

start();



