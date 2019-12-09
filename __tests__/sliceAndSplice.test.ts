// import { frankenSplice } from "../sliceAndSplice";

describe('it should splice an array in to the target array at a given index', () => {
	const testCases = [
		[[1, 2, 3], [4, 5], 1],
		[[1, 2], ['a', 'b'], 1],
		[['claw', 'tentacle'], ['head', 'shoulders', 'knees', 'toes'], 2]
	]

	describe.each([testCases])('takes 3 arguments as inputs', a => {
		it('should take 2 arrays and one number as input', () => {
			const arrToCopy = a[0]
			const target = a[1]
			const idx = a[2]

			expect(Array.isArray(arrToCopy)).toBe(true)
			expect(Array.isArray(target)).toBe(true)
			expect(typeof idx).toBe('number')
		})
		it('should return one array as output', () => {})
		it('should correctly combine the arrays at the given idx', () => {})
	})
})
