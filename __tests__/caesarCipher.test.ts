import { rot13 } from '../BasicAlgorithms/caesarCipher'

describe('Decypts the ROT13 cipher and returns the decoded string', () => {
	const testCases = [
		['SERR PBQR PNZC', 'FREE CODE CAMP'],
		['SERR CVMMN!', 'FREE PIZZA!'],
		['SERR YBIR?', 'FREE LOVE?'],
		[
			'GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.',
			'THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX.'
		]
	]

	describe.each(testCases)('takes a string as input', (a, b) => {
		it('should take a string as input', () => {
			expect(typeof a).toBe('string')
		})

		const result = rot13(a)

		it('should return a string as output', () => {
			expect(typeof result).toBe('string')
		})
		it(`should take ${a} and return ${b}`, () => {
			expect(result).toBe(b)
		})
	})
})
