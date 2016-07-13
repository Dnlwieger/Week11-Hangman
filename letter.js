var chalk = require('chalk');

function Letter(word) {
	this.positions = [];
	this.wrong = [];
	this.init = function() {
		for (var i=0; i<word.length; i++) {
			this.positions.push('_');
		}
	};
	this.print = function() {
		console.log(chalk.bold.blue('Word: ' + this.positions.join(' ')));
		console.log(chalk.bold.magenta('Wrong letters: ' + this.wrong.join(' ') + '\n'));
	};
	this.replace = function(change) {
		for (var i=0; i<change.index.length; i++) {
			this.positions[change.index[i]] = change.input;
		}
	};
	this.incorrect = function(letter) {
		this.wrong.push(letter);
	};
	this.checkWin = function() {
		for (var i=0; i<this.positions.length; i++) {
			if (this.positions[i] === '_') return false;
		}
		return true;
	};
}

module.exports = Letter;