import { frankenSplice } from '../BasicAlgorithms/sliceAndSplice'

describe('it should splice an array in to the target array at a given index', () => {
	const testCases = [
		[[1, 2, 3], [4, 5], 1, [4, 1, 2, 3, 5]],
		[[1, 2], ['a', 'b'], 1, ['a', 1, 2, 'b']],
		[
			['claw', 'tentacle'],
			['head', 'shoulders', 'knees', 'toes'],
			2,
			['head', 'shoulders', 'claw', 'tentacle', 'knees', 'toes']
		]
	]

	describe.each(testCases)(
		'takes 3 arguments as inputs',
		(a, b, c, expected) => {
			it('should take 2 arrays and one number as input', () => {
				expect(Array.isArray(a)).toBe(true)
				expect(Array.isArray(b)).toBe(true)
				expect(typeof c).toBe('number')
			})

			it(`should take ${a} and ${b} and ${c} and retunr ${expected}`, () => {
				expect(frankenSplice(a as any, b as any, c as any)).toEqual(expected)
			})
		}
	)
})
