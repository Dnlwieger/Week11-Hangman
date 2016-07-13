// Require other js files and inquirer
var game = require('./game');
var letter = require('./letter');
var word = require('./word');
var hangman = require('./hangman');
var inquirer = require('inquirer');
var chalk = require('chalk');

// Initialize variables to allow scope
var wins = 0;
var guesses;
var splitWord;
var Letter;
var Word;
var stop;

// Show welcome and first hangman
console.log(chalk.bold.green('\n+---------------------+\n| Welcome to Hangman! |\n+---------------------+\n'));

// User guess letter question
var questionLetter = [{
	type: 'input',
	name: 'input',
	message: 'Please type a letter:',
	validate: function (value) {
    // Regex matching
		var pass = value.match(/^[a-zA-Z]$/);
		// Check if passing
		if (pass)	return true;
		// Else reask for letter
		return 'Please type a single valid letter:';
	}
}];

// Continue question
var questionContinue = [
  {
    type: 'confirm',
    name: 'continue',
    message: 'Would you like to continue?',
    default: true
  }
];

function start() {
	// Initialize guesses and stop
	guesses = 6;
	stop = undefined;
	// Get word from game and split it into an array
	splitWord = game.selectWord().split('');
	// Create letter and word instances
	Letter = new letter(splitWord);
	Word = new word(splitWord);
	// Print hangman and letters
	hangman.print(wins,guesses);
	Letter.init();
	Letter.print();	
	// Start asking first question
	askQuestion();
}

function askQuestion() {
	inquirer.prompt(questionLetter).then(function (answer) {
		// Check user guess
		var obj = {
			positions: Letter.positions,
			wrong: Letter.wrong,
			input: answer.input.toUpperCase()
		}
		// Get response back from word check
		// If returned false
		if (!Word.check(obj)) {
			reshow('red','You already guessed this letter!');
		} else {
			// If returned -1
			if (Word.check(obj) === -1) {
				Letter.incorrect(obj.input);
				guesses--;
				// Check if user lost
				if (guesses === 0) stop = 'lost';
				reshow('red','Wrong letter! Keep trying!', stop);
			} else {
				// Tell letter what positions and value to replace
				var change = {
					index: Word.check(obj),
					input: obj.input
				}
				Letter.replace(change);
				// Check if user won
				if (Letter.checkWin()) {
					stop = 'win';
					wins++;
				}
				reshow('cyan','Great job! Keep it up!', stop);
			}			
		}
	});
}

function continueGame() {
	inquirer.prompt(questionContinue).then(function (answer) {
		if (answer.continue) {
			console.log('\n*****************************\n');
			start(); return;
		} else {
			return;
		}
	});
}

function reshow(color, log, stop) {
	// Print hangman and letters
	console.log('\n*****************************\n')
	hangman.print(wins,guesses);
	Letter.print();
	if (stop !== undefined) {
		var font = stop === 'lost' ? 'red' : 'cyan';
		console.log(chalk.bold[font]('You ' + stop + '!'));
		continueGame();
	} else {
		console.log(chalk.bold[color](log));
		askQuestion();
	}
}

// Initialize first time when starting script
start();