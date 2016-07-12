function Letter(word) {
	this.splitWord = word.split('');
	console.log(this.splitWord);
	this.positions = [];
	this.init = function() {
		for (var i=0; i<this.splitWord.length; i++) {
			this.positions.push('_');
		}
	};
	this.print = function() {
		console.log('Word: ' + this.positions.join(' '));
	}
}

module.exports = Letter;