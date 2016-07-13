function Word(word) {
	this.word = word;
	this.check = function(obj) {
		this.positions = obj.positions;
		this.wrong = obj.wrong;
		this.userGuess = obj.input;
		// See if user input was already a bad guess
		if(this.alreadyguessed(obj.wrong)) return false;
		// See if user input was already a good guess
		if(this.alreadyguessed(obj.positions)) return false;
		// Else replace the letter
		return this.checkReplace();
	};
	this.alreadyguessed = function(check) {
		for (var i=0; i<check.length; i++) {
			if (check[i] === this.userGuess) {
				return true;
			}
		}
	};
	this.checkReplace = function() {
		var places = [];
		var count = 0;
		for (var i=0; i<this.word.length; i++) {
			if (this.word[i] == this.userGuess) {
				places.push(i);
				count++;
			}
		}
		// If no replacements return -1
		if (count === 0) return -1;
		// Else return the places found
		return places;		
	};
}

module.exports = Word;