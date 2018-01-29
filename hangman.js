var wordList = require('./wordList.js'),
    Word = require('./constructWord.js'),
    inquirer = require('inquirer');


var word = new Word(wordList);

var questions = [
  {
    name: "start",
    type: "confirm",
    message: "Would you like to start a new game of Hangman?",
    default: true
  },
  {
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
  }
];

function start() {

  console.log('\x1Bc');

  inquirer
  .prompt(questions[0])
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
  .prompt( questions[1] )
  .then( function( answers ) {

    let checkIfSolved = word.guess(answers.guessLetter);
    if (checkIfSolved) {
        
        word.display();
        console.log('You Win!');

    } else {
        ask();
    }

  });
}

start();



