import {
	chunkArrayInGroups,
	chunkArrayInGroups2
} from '../BasicAlgorithms/chunkyMonkey'

describe('Splits an array in to groups the length of size and returns them as a 2D array', () => {
	// prettier-ignore
	const testCases = [
		[['a', 'b', 'c', 'd'], 2, [['a', 'b'], ['c', 'd']]],
		[[0, 1, 2, 3, 4, 5], 3, [[0, 1, 2], [3, 4, 5]]],
		[[0, 1, 2, 3, 4, 5], 2, [[0, 1], [2, 3], [4, 5]]],
		[[0, 1, 2, 3, 4, 5], 4, [[0, 1, 2, 3], [4, 5]]],
		[[0, 1, 2, 3, 4, 5, 6], 3, [[0, 1, 2], [3, 4, 5], [6]]],
		[[0, 1, 2, 3, 4, 5, 6, 7, 8], 4, [[0, 1, 2, 3], [4, 5, 6, 7], [8]]],
		[[0, 1, 2, 3, 4, 5, 6, 7, 8], 2, [[0, 1], [2, 3], [4, 5], [6, 7], [8]]]
	]

	describe.each<any>(testCases)(
		'takes an array and a number as input',
		(a, b, expected) => {
			it('should take an array as an argument', () => {
				expect(Array.isArray(a)).toBe(true)
			})

			it('should take a number as an argument', () => {
				expect(typeof b).toBe('number')
			})

			it(`should take ${a} and ${b} and return ${expected}`, () => {
				expect(chunkArrayInGroups(a, b)).toEqual(expected)
				expect(chunkArrayInGroups2(a, b)).toEqual(expected)
			})
		}
	)
})
