// Return true if the given string is a palindrome. Otherwise, return false.

// A palindrome is a word or sentence that's spelled the same way both forward and backward,
// ignoring punctuation, case, and spacing.

// Note
// You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols)
// and turn everything lower case in order to check for palindromes.

function palindrome(str) {

	// step 1: remove non-alphanumeric chars
	var simpleStr = str.toLowerCase().replace(/[\W_]/g, '');
	var reversed = simpleStr.split('').reverse().join(''); 

	// compare str to its reverse
	return simpleStr === reversed;
}

function palindrome(str) {
	var simpleStr = str.toLowerCase().replace(/[\W_]/g, '');
	var len = simpleStr.length;

	// test letters in each half of str
	for (var i = 0; i < len / 2; i++) {
		if (simpleStr[i] !== simpleStr[len - 1 - i]) {
			// false when letters do not match
			return false;
		}
	}
	// all letters match
	return true;
}

function palindrome(str) {
	var simpleStr = str.toLowerCase().replace(/[\W_]/g, '');
	var reversed = simpleStr.split('').reverse().join('');

	// test: first letter matches last letter
	if (simpleStr[0] !== reversed[0]) {
		return false;
	} 
	// test all other letters
	else {
		for (let i = 0; i < simpleStr.length; i++) {
			// false if any letter does not match its mirror
			if (simpleStr[i] !== reversed[i]) {
				return false;
			}
		}
		// all letters match
		return true;
	}
}

// test cases 
palindrome('eye'); // true
palindrome('_eye'); // true
palindrome('race car'); // true
palindrome('not a palindrome'); // false
palindrome('A man, a plan, a canal. Panama'); // true
palindrome('never odd or even'); // true
palindrome('nope'); // false
palindrome('almostomla'); // false
palindrome('My age is 0, 0 si ega ym.'); // true
palindrome('1 eye for of 1 eye.'); // false
palindrome('0_0 (: /-\ :) 0-0'); // true
palindrome('five|\_/|four'); // false