// Return true if the given string is a palindrome. Otherwise, return false.

// A palindrome is a word or sentence that's spelled the same way both forward and backward,
// ignoring punctuation, case, and spacing.

// Note
// You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols)
// and turn everything lower case in order to check for palindromes.

// SOLUTION #1
export const palindrome = (str: string): boolean => {
	// step 1: remove non-alphanumeric chars
	const simpleStr = str.toLowerCase().replace(/[\W_]/g, '')
	const reversed = simpleStr
		.split('')
		.reverse()
		.join('')

	// compare str to its reverse
	return simpleStr === reversed
}

// SOLUTION #2
export const palindrome2 = (str: string): boolean => {
	const simpleStr = str.toLowerCase().replace(/[\W_]/g, '')
	const len = simpleStr.length

	// test letters in each half of str
	for (let i = 0; i < len / 2; i++) {
		if (simpleStr[i] !== simpleStr[len - 1 - i]) {
			// false when letters do not match
			return false
		}
	}
	// all letters match
	return true
}

// SOLUTION #3
export const palindrome3 = (str: string): boolean => {
	const simpleStr = str.toLowerCase().replace(/[\W_]/g, '')
	const reversed = simpleStr
		.split('')
		.reverse()
		.join('')

	// test: first letter matches last letter
	if (simpleStr[0] !== reversed[0]) {
		return false
	}
	// test all other letters
	else {
		for (let i = 0; i < simpleStr.length; i++) {
			// false if any letter does not match its mirror
			if (simpleStr[i] !== reversed[i]) {
				return false
			}
		}
		// all letters match
		return true
	}
}

// test cases
palindrome('eye') // true
palindrome('_eye') // true
palindrome('race car') // true
palindrome('not a palindrome') // false
palindrome('A man, a plan, a canal. Panama') // true
palindrome('never odd or even') // true
palindrome('nope') // false
palindrome('almostomla') // false
palindrome('My age is 0, 0 si ega ym.') // true
palindrome('1 eye for of 1 eye.') // false
palindrome('0_0 (: /- :) 0-0') // true
palindrome('five|_/|four') // false

palindrome2('eye') // true
palindrome2('_eye') // true
palindrome2('race car') // true
palindrome2('not a palindrome2') // false
palindrome2('A man, a plan, a canal. Panama') // true
palindrome2('never odd or even') // true
palindrome2('nope') // false
palindrome2('almostomla') // false
palindrome2('My age is 0, 0 si ega ym.') // true
palindrome2('1 eye for of 1 eye.') // false
palindrome2('0_0 (: /- :) 0-0') // true
palindrome2('five|_/|four') // false

palindrome3('eye') // true
palindrome3('_eye') // true
palindrome3('race car') // true
palindrome3('not a palindrome3') // false
palindrome3('A man, a plan, a canal. Panama') // true
palindrome3('never odd or even') // true
palindrome3('nope') // false
palindrome3('almostomla') // false
palindrome3('My age is 0, 0 si ega ym.') // true
palindrome3('1 eye for of 1 eye.') // false
palindrome3('0_0 (: /- :) 0-0') // true
palindrome3('five|_/|four') // false
