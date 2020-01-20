import { multiplesOf3and5 } from '../ProjectEuler/multiplesOf3And5'

describe('multiplesOf3And5', () => {
	const testCases = [
		[1000, 233168],
		[49, 543],
		[19564, 89301183],
		[8456, 16687353]
	]

	describe.each(testCases)(
		'Returns the sum of all the multiples of 3 and 5',
		(a, b) => {
			it(`should take a number ${a} and return ${b}`, () => {
				expect(multiplesOf3and5(a)).toBe(b)
			})
		}
	)
})
