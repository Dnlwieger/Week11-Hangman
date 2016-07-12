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

// Select word and show in blank
var word = game.selectWord();
var Letter = new letter(word);
Letter.init();
Letter.print();