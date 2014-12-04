module.exports = function(characters, callback) {
	
	var i, intToCharacterBasedString, result, sortedCharacters;
	
	if(typeof characters == 'string')
		characters = characters.split("");
	
	// Sort all characters
	characters.sort();
	characters = characters.filter(function(value, index, arr){
		if(index < 1) {
			return true;
		} else {
			return value != arr[index-1];
		}
	});
	
	characters = [""].concat(characters); // Useless empty value to start this array on index = 1
	
	intToCharacterBasedString = function(num) { // Anoying algorithm..
		var charBasedString, modulo;
		
		charBasedString = "";

		while (num > 0) {
			modulo = num % characters.length // Basic calculating
			charBasedString = characters[modulo] + charBasedString; // Just push it before the old characters
			num = ((num - modulo) / characters.length); // New value of num, annoying calculation
		} 

		return charBasedString;
	};
	
	i = 1;
	while(i > 0) {
		
		result = callback( intToCharacterBasedString( i ) );
		
		if( result ){ // If callbacks returns true: we did our job!
			break;
		}
		
		i++;
	}
}
