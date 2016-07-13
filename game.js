var Game =  {
	words: ["SPONGEBOB","PATRICK","SANDY","SQUIDWARD","GARY","PLANKTON","PEARL","KAREN","LARRY","PATCHY"],
	random: function (min, max) {
	  return Math.floor(Math.random() * (max - min + 1)) + min;
	},
	selectWord: function() {
		var random = Game.random(0,Game.words.length-1);
		return Game.words[random];
	}
}

module.exports.selectWord = Game.selectWord;