// import { getIndexToIns, getIndexToIns2 } from "../Basic Algorithms/belong";

describe('Returns the lowest index where a value should be inserted into an array once sorted', () => {
	const testCases = {
		one: {
			array: [10, 20, 30, 40, 50],
			target: 35,
			returnVal: 3
		},
		two: {
			array: [10, 20, 30, 40, 50],
			target: 30,
			returnVal: 2
		},
		three: {
			array: [40, 60],
			target: 50,
			returnVal: 1
		},
		four: {
			array: [3, 10, 5],
			target: 3,
			returnVal: 0
		},
		five: {
			array: [5, 3, 20, 3],
			target: 5,
			returnVal: 2
		},
		six: {
			array: [2, 20, 10],
			target: 19,
			returnVal: 2
		},
		seven: { array: [2, 5, 10], target: 15, returnVal: 3 }
	}

	it('should take an array of numbers as an argument', () => {
		expect(Array.isArray(testCases.one.array)).toBe(true)
		expect(Array.isArray(testCases.two.array)).toBe(true)
		expect(Array.isArray(testCases.three.array)).toBe(true)
		expect(Array.isArray(testCases.four.array)).toBe(true)
		expect(Array.isArray(testCases.five.array)).toBe(true)
		expect(Array.isArray(testCases.six.array)).toBe(true)
		expect(Array.isArray(testCases.seven.array)).toBe(true)
	})

	it('should take a number as an argument', () => {
		expect(typeof testCases.one.target).toBe('number')
		expect(typeof testCases.two.target).toBe('number')
		expect(typeof testCases.three.target).toBe('number')
		expect(typeof testCases.four.target).toBe('number')
		expect(typeof testCases.five.target).toBe('number')
		expect(typeof testCases.six.target).toBe('number')
		expect(typeof testCases.seven.target).toBe('number')
	})

	it('should return the index of the given value', () => {})
})
