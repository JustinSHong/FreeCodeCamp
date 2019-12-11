// import { getIndexToIns, getIndexToIns2 } from "../BasicAlgorithms/belong";

describe('Returns the lowest index where a value should be inserted into an array once sorted', () => {
	const testCases = [
		[[10, 20, 30, 40, 50], 35, 3],
		[[10, 20, 30, 40, 50], 30, 2],
		[[40, 60], 50, 1],
		[[3, 10, 5], 3, 0],
		[[5, 3, 20, 3], 5, 2],
		[[2, 20, 10], 19, 2],
		[[2, 5, 10], 15, 3]
	]

	describe.each(testCases)(
		'returns index where a value should be inserted',
		(a, b, expected) => {
			it(`it should take ${a} and ${b} and return ${expected}`, () => {})
			it('should take an array of numbers as an argument', () => {
				expect(Array.isArray(a)).toBe(true)
			})
		}
	)
})
