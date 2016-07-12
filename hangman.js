var Hangman = {
	print: function(guesses) {
		console.log('  +----+');
		console.log('  |/   |');
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
		console.log('----------');
		console.log('Guesses left: ' + guesses);
	},
	head: function() {
		console.log('  |    O');
	},
	rightArm: function() {
		console.log('  |   \\O');
	},
	leftArm: function() {
		console.log('  |   \\O/');
	},
	body: function() {
		console.log('  |    |');
	},
	rightLeg: function() {
		console.log('  |   /');
	},
	leftLeg: function() {
		console.log('  |   / \\');
	},
	empty: function() {
		console.log('  |');
	}
};

module.exports.print = Hangman.print;