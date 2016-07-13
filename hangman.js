var chalk = require('chalk');

var Hangman = {
	print: function(guesses) {
		console.log(chalk.bold.red('Guesses left: ' + guesses));
		console.log(chalk.bold.yellow('  +----+'));
		console.log(chalk.bold.yellow('  |/   |'));
		switch(guesses) {
			case 6:
				Hangman.empty();
				Hangman.empty();
				Hangman.empty();
				break;
			case 5:
				Hangman.head();
				Hangman.empty();
				Hangman.empty();
				break;
			case 4:
				Hangman.head();
				Hangman.body();
				Hangman.empty();
				break;
			case 3:
				Hangman.rightArm();
				Hangman.body();
				Hangman.empty();
				break;
			case 2:
				Hangman.leftArm();
				Hangman.body();
				Hangman.empty();
				break;
			case 1:
				Hangman.leftArm();
				Hangman.body();
				Hangman.rightLeg();
				break;
			case 0:
				Hangman.leftArm();
				Hangman.body();
				Hangman.leftLeg();
				break;
		}
		Hangman.empty();
		console.log(chalk.bold.yellow('----------'));
	},
	head: function() {
		console.log(chalk.bold.yellow('  |    O'));
	},
	rightArm: function() {
		console.log(chalk.bold.yellow('  |   \\O'));
	},
	leftArm: function() {
		console.log(chalk.bold.yellow('  |   \\O/'));
	},
	body: function() {
		console.log(chalk.bold.yellow('  |    |'));
	},
	rightLeg: function() {
		console.log(chalk.bold.yellow('  |   /'));
	},
	leftLeg: function() {
		console.log(chalk.bold.yellow('  |   / \\'));
	},
	empty: function() {
		console.log(chalk.bold.yellow('  |'));
	}
};

module.exports.print = Hangman.print;