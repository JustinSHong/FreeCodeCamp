// import {
//     confirmEnding,
//     confirmEnding2,
//     confirmEnding3
// } from '../BasicAlgorithms/confirmEnding'

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
		(a, b) => {
			it('should take 2 strings as input', () => {
				expect(typeof a).toBe('string')
				expect(typeof b).toBe('string')
			})
		}
	)
})
