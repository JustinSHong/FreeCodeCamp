// Return the provided string with the first letter of each word capitalized.
// Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

function titleCase(str) {
 	var result = [];
 	var capitalize = "";
 	// remove case from str and split str
 	var split = str.toLowerCase().split(' ');

 	// capitalize first letter of each word
 	for (let i = 0; i < split.length; i++) {
 		capitalize = split[i][0].toUpperCase() + split[i].slice(1);
 		result.push(capitalize);
 	}
 	return result.join(' ');
}

function titleCase(str) {
	var split = str.toLowerCase().split(' ');

	// capitalize the first letter of each word in the array
	// join the words in the array with a ' '
	return split.map(function(word) {
		return word[0].toUpperCase() + word.slice(1);
	}).join(' ');
}

function titleCase(str) {
	var split = str.toLowerCase().split(' ');

	return split.map(function(word) {
		return word.replace(word[0], word[0].toUpperCase());
	}).join(' ');
}

// test cases
titleCase("I'm a little tea pot"); // "I'm A Little Tea Pot"
titleCase("sHoRt AnD sToUt"); // "Short And Stout"
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"); // "Here Is My Handle Here Is My Spout"