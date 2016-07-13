// Require other js files and inquirer
var game = require('./game');
var letter = require('./letter');
var word = require('./word');
var hangman = require('./hangman');
var inquirer = require('inquirer');
var chalk = require('chalk');

// Show welcome and first hangman
console.log(chalk.bold.green('\n+---------------------+\n| Welcome to Hangman! |\n+---------------------+\n'));
var guesses = 6;
hangman.print(guesses);

// Select word and show blanks
var splitWord = game.selectWord().split('');
var Letter = new letter(splitWord);
Letter.init();
Letter.print();

// Create word
var Word = new word(splitWord);

// Let user guess
var question = [{
	type: 'input',
	name: 'input',
	message: 'Please type a letter:',
	validate: function (value) {
    // Regex matching
		var pass = value.match(/^[a-zA-Z]$/);
		// Check if passing
		if (pass) {
			return true;
		}
		return 'Please type a single valid letter:';
	}
}];

function askQuestion() {
	inquirer.prompt(question).then(function (answer) {
		// Check user guess
		var obj = {
			positions: Letter.positions,
			wrong: Letter.wrong,
			input: answer.input.toUpperCase()
		}
		// Get response back from word check
		// If returned false
		if (!Word.check(obj)) {
			reshow(chalk.bold.red('You already guessed this letter!'));
		} else {
			// If returned -1
			if (Word.check(obj) === -1) {
				Letter.incorrect(obj.input);
				guesses--;
				reshow(chalk.bold.red('Wrong letter! Keep trying!'));
			} else {
				// Tell letter what positions and value to replace
				var change = {
					index: Word.check(obj),
					input: obj.input
				}
				Letter.replace(change);
				reshow(chalk.bold.cyan('Great job! Keep it up!'));
			}			
		}
	});
}

function reshow(log) {
	// Print hangman and letters
	console.log('\n*****************************\n')
	hangman.print(guesses);
	Letter.print();
	console.log(log);
	askQuestion();
}

askQuestion();