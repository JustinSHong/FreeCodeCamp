import { Person } from '../IntermediateAlgorithms/makeAPerson'

describe('it should create a Person instance with methods to set and to retrieve first and last name', () => {
	const bob = new Person('Bob Ross')
	const alice = new Person('Alice Kinneman')

	const testCases = [
		[bob.getFirstName(), 'Bob'],
		[bob.getLastName(), 'Ross'],
		[bob.getFullName(), 'Bob Ross'],
		[alice.getFirstName(), 'Alice'],
		[alice.getLastName(), 'Kinneman'],
		[alice.getFullName(), 'Alice Kinneman']
	]

	describe.each(testCases)('create a Person given their full name', (a, b) => {
		it('should have a method to get a person\'s first name', () => {})
		it('should have a method to get a person\'s last name', () => {})
		it('should have a method to get a person\'s full name', () => {})
		it('should have a method to set a person\'s first name', () => {})
		it('should have a method to set a person\'s last name', () => {})
		it('should have a method to set a person\'s full name', () => {})
		it(`should take ${a} and return ${b}`, () => {
			expect(a).toBe(b)
		})
	})
})
