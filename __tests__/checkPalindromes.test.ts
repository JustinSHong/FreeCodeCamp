import {
	palindrome,
	palindrome2,
	palindrome3
} from '../BasicAlgorithms/checkPalindromes'

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

	const solutions: { [key: string]: boolean } = {
		eye: true,
		_eye: true,
		'race car': true,
		'not a palindrome': false,
		'A man, a plan, a canal. Panama': true,
		'never odd or even': true,
		nope: false,
		almostomla: false,
		'My age is 0, 0 si ega ym.': true,
		'1 eye for of 1 eye.': false,
		'0_0 (: /- :) 0-0': true,
		'five|_/|four': false
	}

	describe.each([testCases])('takes a string as input', a => {
		it('should take a string as input', () => {
			expect(typeof a).toBe('string')
		})

		it('should return a boolean as output', () => {
			expect(typeof palindrome(a)).toBe('boolean')
			expect(typeof palindrome2(a)).toBe('boolean')
			expect(typeof palindrome3(a)).toBe('boolean')
		})

		it('should correctly determine if the input string is a palindrome', () => {
			expect(palindrome(a)).toBe(solutions[a])
			expect(palindrome2(a)).toBe(solutions[a])
			expect(palindrome3(a)).toBe(solutions[a])
		})
	})
})
