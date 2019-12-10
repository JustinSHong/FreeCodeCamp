import {
	palindrome,
	palindrome2,
	palindrome3
} from '../BasicAlgorithms/checkPalindromes'

describe('Determines if the given input string is a palindrome', () => {
	const testCases = [
		['eye', true],
		['_eye', true],
		['race car', true],
		['not a palindrome', false],
		['A man, a plan, a canal. Panama', true],
		['never odd or even', true],
		['nope', false],
		['almostomla', false],
		['My age is 0, 0 si ega ym.', true],
		['1 eye for of 1 eye.', false],
		['0_0 (: /- :) 0-0', true],
		['five|_/|four', false]
	]

	describe.each(testCases)('takes a string as input', (a, b) => {
		it('should take a string as input', () => {
			expect(typeof a).toBe('string')
		})

		const result = palindrome(a as string)
		const result2 = palindrome2(a as string)
		const result3 = palindrome3(a as string)

		it('should return a boolean as output', () => {
			expect(typeof result).toBe(typeof b)
			expect(typeof result2).toBe('boolean')
			expect(typeof result3).toBe('boolean')
		})

		it(`takes ${a} and returns ${b}`, () => {
			expect(result).toBe(b)
			expect(result2).toBe(b)
			expect(result3).toBe(b)
		})
	})
})
