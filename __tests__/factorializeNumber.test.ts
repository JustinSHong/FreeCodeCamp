import {
	factorialize1,
	factorialize2
} from '../BasicAlgorithms/factorializeNumber'

describe('it should provide the factorial of a number', () => {
	const testCases = [
		[0, 1],
		[5, 120],
		[10, 3628800],
		[20, 2432902008176640000]
	]

	describe.each(testCases)('returns the factorial of a number', (a, b) => {
		const result1 = factorialize1(a)
		const result2 = factorialize2(a)

		it(`should take a number: ${a} and returns its factorial: ${b}`, () => {
			expect(result1).toBe(b)
			expect(result2).toBe(b)
		})
	})
})
