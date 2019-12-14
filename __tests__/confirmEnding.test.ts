import {
	confirmEnding,
	confirmEnding2,
	confirmEnding3
} from '../BasicAlgorithms/confirmEnding'

describe('it should return a boolean describing if a string ends with a given substring', () => {
	const testCases = [
		['Bastian', 'n', true],
		['Connor', 'n', false],
		[
			'Walking on water and developing software from a specification are easy if both are frozen',
			'specification',
			false
		],
		['He has to give me a new name', 'name', true],
		['Open sesame', 'pen', false],
		[
			'If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing',
			'mountain',
			false
		]
	]

	describe.each(testCases)(
		'checks if a string ends with a target substr',
		(a, b, expected) => {
			it('should take 2 strings as input', () => {
				expect(typeof a).toBe('string')
				expect(typeof b).toBe('string')
			})
			it('should return a bool as output', () => {
				expect(typeof confirmEnding(a as string, b as string)).toBe('boolean')
				expect(typeof confirmEnding2(a as string, b as string)).toBe('boolean')
				expect(typeof confirmEnding3(a as string, b as string)).toBe('boolean')
			})
			it(`should take ${a} and ${b} and return ${expected}`, () => {
				expect(confirmEnding(a as string, b as string)).toBe(expected)
				expect(confirmEnding2(a as string, b as string)).toBe(expected)
				expect(confirmEnding3(a as string, b as string)).toBe(expected)
			})
		}
	)
})
