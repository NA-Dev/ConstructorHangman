let Letter = require('./constructLetter.js');

function Word(wordList) {

  this.letters = [];

  this.guessedLetters = [];

	this.attempts = 6;

  this.solution = '';

  this.isSolved = false;

  this.init = function() {
    
    let randomWord = wordList[
      Math.floor(Math.random()*(wordList.length))
    ];

    for (let i=0; i<randomWord.length; i++) {

      let char = randomWord.charAt(i).toUpperCase();
      let pattern = /[a-zA-Z]/g;
      let letter = new Letter(char, i);

      if (!pattern.test(char)) {
        letter.guessed = true;
      }
      
      this.letters.push(letter);
      this.solution += char;
    }
  }
  this.init();

  this.display = function() {
    let characters = [];

    for (let i=0; i<this.letters.length; i++) {
      characters.push(this.letters[i].display());
    }

    console.log('\nThe hidden word is: ' + characters.join(' ') + '\n');
  }

  this.guess = function(input) {

    input = input
      .replace(/\W|\d/g, '')
      .substr(0, 1)
      .toUpperCase();

    console.log('\x1Bc');
    console.log("Checking for the letter: " + input + " ..." );

    this.guessedLetters.push(input);

    let isInWord = false;
    this.isSolved = true; //temporarily set to true

    for (let i=0; i<this.letters.length; i++) {
      
      if (this.letters[i].value === input) {
        isInWord = true;
        this.letters[i].guessed = true;
      }

      if (this.letters[i].guessed === false) {
        this.isSolved = false; //will be re-set to false if not solved
      }
    }

    if (isInWord) {
      console.log("\n" + input + " is in the hidden word");

    } else {
      this.attempts--;
      console.log("\n" + input + " is not in the hidden word.");
      console.log("\nYou have " + this.attempts + " attempts left");
    }

    return this.isSolved;
  }
}

module.exports = Word;