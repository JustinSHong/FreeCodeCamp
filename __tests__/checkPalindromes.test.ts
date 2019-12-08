// import {
// 	palindrome,
// 	palindrome2,
// 	palindrome3
// } from '../Basic Algorithms/checkPalindromes'

describe('Determines if the given input string is a palindrome', () => {
	const testCases = [
		'eye',
		'_eye',
		'race car',
		'not a palindrome',
		'A man, a plan, a canal. Panama',
		'never odd or even',
		'nope',
		'almostomla',
		'My age is 0, 0 si ega ym.',
		'1 eye for of 1 eye.',
		'0_0 (: /- :) 0-0',
		'five|_/|four'
	]

	describe.each([testCases])('takes a string as input', a => {
		it('should take a string as input', () => {
			expect(typeof a).toBe('string')
		})
	})
})
