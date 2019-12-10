// import {
//     chunkArrayInGroups,
//     chunkArrayInGroups2
// } from "../BasicAlgorithms/chunkyMonkey";

describe('Splits an array in to groups the length of size and returns them as a 2D array', () => {
	const testCases = [
		[['a', 'b', 'c', 'd'], 2],
		[[0, 1, 2, 3, 4, 5], 3],
		[[0, 1, 2, 3, 4, 5], 2],
		[[0, 1, 2, 3, 4, 5], 4],
		[[0, 1, 2, 3, 4, 5, 6], 3],
		[[0, 1, 2, 3, 4, 5, 6, 7, 8], 4],
		[[0, 1, 2, 3, 4, 5, 6, 7, 8], 2]
	]

	describe.each([testCases])('takes an array and a number as input', a => {
		it('should take an array as an argument', () => {
			expect(Array.isArray(a[0])).toBe(true)
		})

		it('should take a number as an argument', () => {
			expect(typeof a[1]).toBe('number')
		})
	})
})
