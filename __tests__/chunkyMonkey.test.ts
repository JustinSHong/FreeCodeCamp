// import {
//     chunkArrayInGroups,
//     chunkArrayInGroups2
// } from "../BasicAlgorithms/chunkyMonkey";

describe('Splits an array in to groups the length of size and returns them as a 2D array', () => {
	const testCases = [
		['a', 'b', 'c', 'd'],
		[0, 1, 2, 3, 4, 5],
		[0, 1, 2, 3, 4, 5],
		[0, 1, 2, 3, 4, 5],
		[0, 1, 2, 3, 4, 5, 6],
		[0, 1, 2, 3, 4, 5, 6, 7, 8],
		[0, 1, 2, 3, 4, 5, 6, 7, 8]
	]

	describe.each([testCases])('takes an array and a number as input', a => {
		it('should take an array as an argument', () => {
			expect(Array.isArray(a)).toBe(true)
		})
	})
})
