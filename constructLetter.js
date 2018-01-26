function Letter(input) {

  this.inWord =  function() {
    // input = input.replace(/\W|\d/g, '').substr(0, 1).toUpperCase();
    if (word.indexOf(input) !== -1) {
      return true;
    } else {
      return false;
    }
  },

  this.guess = function() {
    if (this.inWord) {
      //replace _ with letter in phrase
      console.log(input + " is in the mystery word.");
      word.checkWin();
    } else {
      console.log(input + " is not in the mystery word.");
      
    }
  }
}

module.exports = Letter;