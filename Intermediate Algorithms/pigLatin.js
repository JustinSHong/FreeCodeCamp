// Translate the provided string to pig latin.
// Pig Latin takes the first consonant (or consonant cluster) of an English word,
	// moves it to the end of the word and suffixes an "ay".
// If a word begins with a vowel you just add "way" to the end.
// Input strings are guaranteed to be English words in all lowercase.

function translatePigLatin(str) {
	let vowels = /[aeiou]/;
	let index = 0;
	let consonants = '';
	
	if (vowels.test(str[0])) {
		str = str + "way";
	} else {
    	for (let i = 0; i < str.length; i++) {
			if (!vowels.test(str[i])) {
				consonants += str[i];
				index++;
			} else {
				break;
			} 
		}
		str = str.slice(index) + consonants + 'ay';
	}
	return str;
}

function translatePigLatin(str) {
	let vowels = /[aeiou]/;
	let index = 0;
	let consonants = '';
	
	if (vowels.test(str[0])) {
		str = str + "way";
		return str;
	}

	while (!vowels.test(str[index])) {
		consonants += str[index];
		index++;
	}
	str = str.slice(index) + consonants + "ay";
	return str;
}

function translatePigLatin(str) {
	let vowels = /[aeiou]/g;

	if (str[0].match(vowels)) {
		return str + "way"; 
	} else {
		let index = str.indexOf(str.match(vowels)[0]);
		
		str = str.substr(index) + str.substr(0, index) + "ay";
		return str;
	}
}

function translatePigLatin(str) {
	let vowels = ['a','e','i','o','u'];

	// check if each letter is a vowel or consonant
	// returns corresponding index
	function checkForVowel(index) {
		if (vowels.indexOf(str[index]) === -1) {
			return checkForVowel(index + 1);
		} 
		return index;
	}

	if (checkForVowel(0) === 0) {
		return str + "way";
	}
	return str.substr(checkForVowel(0)) + str.substr(0, checkForVowel(0)) + "ay";	
}

translatePigLatin("california"); // "aliforniacay"
translatePigLatin("paragraphs"); // "aragraphspay"
translatePigLatin("glove"); // "oveglay" 
translatePigLatin("algorithm"); // "algorithmway"
translatePigLatin("eight"); // "eightway"