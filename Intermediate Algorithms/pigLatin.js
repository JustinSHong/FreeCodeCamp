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

translatePigLatin("california"); // "aliforniacay"
translatePigLatin("paragraphs"); // "aragraphspay"
translatePigLatin("glove"); // "oveglay" 
translatePigLatin("algorithm"); // "algorithmway"
translatePigLatin("eight"); // "eightway"