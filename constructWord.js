let words = [
	"TURNTABLE",
	"POKER",
	"MINECRAFT",
]

function Word() {
	this.guessed = [],
	this.unguessed = [
		'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
		'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
		'U', 'V', 'W', 'X', 'Y', 'Z'],
  this.solved = random(words),
	this.displayed = hide(this.solved),
	this.checkWin = function() {
		//check if phrase has blanks left
		if (this.displayed === this.solved) {
			console.log("You Win!");
		} else {
			inquirer.prompt(question);
		}
	}
}

function hide(word) {
	for (let i = 0; i < word.length; i++) {
			word = word.replace(word.charAt(i),'_');
	}
	return word;
}

function random(words) {
	let word = words[
		Math.floor(Math.random()*(words.length))
	];
	return word;
}

module.exports = Word;