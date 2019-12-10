import { rot13 } from '../BasicAlgorithms/caesarCipher'

describe('Decypts the ROT13 cipher and returns the decoded string', () => {
	const testCases = [
		'SERR PBQR PNZC',
		'SERR CVMMN!',
		'SERR YBIR?',
		'GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.'
	]

	const solutions: { [key: string]: string } = {
		'SERR PBQR PNZC': 'FREE CODE CAMP',
		'SERR CVMMN!': 'FREE PIZZA!',
		'SERR YBIR?': 'FREE LOVE?',
		'GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.':
      'THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX.'
	}

	describe.each([testCases])('takes a string as input', a => {
		it('should take a string as input', () => {
			expect(typeof a).toBe('string')
		})

		it('should return the decoded string as output', () => {
			expect(typeof rot13(a)).toBe('string')
		})

		it('should return the correct decoded string as output', () => {
			expect(rot13(a)).toBe(solutions[a])
		})
	})
})
