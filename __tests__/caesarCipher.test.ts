// import { rot13 } from "../Basic Algorithms/caesarCipher.ts";

describe('Decypts the ROT13 cipher and returns the decoded string', () => {
	const testCases = [
		'SERR PBQR PNZC',
		'SERR CVMMN!',
		'SERR YBIR?',
		'GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.'
	]

	describe.each([testCases])('takes a string as input', a => {
		expect(typeof a).toBe('string')
	})

	it('should return the decoded string as output', () => {})
})
