// Require other js files and inquirer
var game = require('./game');
var letter = require('./letter');
var word = require('./word');
var hangman = require('./hangman');
var inquirer = require('inquirer');

// Show welcome and first hangman
console.log('\n+---------------------+\n| Welcome to Hangman! |\n+---------------------+\n');
var guesses = 6;
hangman.print(guesses);

// Select word and show blanks
var word = game.selectWord();
var Letter = new letter(word);
Letter.init();
Letter.print();

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
		return 'Please type a valid letter:';
	}
}];

function askQuestion() {
	inquirer.prompt(question).then(function (answer) {
	  console.log(answer.input);
	});
}

askQuestion();