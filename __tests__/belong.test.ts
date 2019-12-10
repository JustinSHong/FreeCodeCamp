import { getIndexToIns, getIndexToIns2 } from '../BasicAlgorithms/belong'

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

	it('getIndexToIns should return the index of the given value', () => {
		// case one
		expect(getIndexToIns(testCases.one.array, testCases.one.target)).toBe(
			testCases.one.returnVal
		)
		expect(
			testCases.one.array[
				getIndexToIns(testCases.one.array, testCases.one.target)
			]
		).toBe(testCases.one.target)
		// case two
		expect(getIndexToIns(testCases.two.array, testCases.two.target)).toBe(
			testCases.two.returnVal
		)
		expect(
			testCases.two.array[
				getIndexToIns(testCases.two.array, testCases.two.target)
			]
		).toBe(testCases.two.target)
		// case three
		expect(getIndexToIns(testCases.three.array, testCases.three.target)).toBe(
			testCases.three.returnVal
		)
		expect(
			testCases.three.array[
				getIndexToIns(testCases.three.array, testCases.three.target)
			]
		).toBe(testCases.three.target)
		// case four
		expect(getIndexToIns(testCases.four.array, testCases.four.target)).toBe(
			testCases.four.returnVal
		)
		expect(
			testCases.four.array[
				getIndexToIns(testCases.four.array, testCases.four.target)
			]
		).toBe(testCases.four.target)
		// case five
		expect(getIndexToIns(testCases.five.array, testCases.five.target)).toBe(
			testCases.five.returnVal
		)
		expect(
			testCases.five.array[
				getIndexToIns(testCases.five.array, testCases.five.target)
			]
		).toBe(testCases.five.target)
		// case six
		expect(getIndexToIns(testCases.six.array, testCases.six.target)).toBe(
			testCases.six.returnVal
		)
		expect(
			testCases.six.array[
				getIndexToIns(testCases.six.array, testCases.six.target)
			]
		).toBe(testCases.six.target)
		// case seven
		expect(getIndexToIns(testCases.seven.array, testCases.seven.target)).toBe(
			testCases.seven.returnVal
		)
		expect(
			testCases.seven.array[
				getIndexToIns(testCases.seven.array, testCases.seven.target)
			]
		).toBe(testCases.seven.target)
	})
	it('getIndexToIns2 should return the index of the given value', () => {
		// case one
		expect(getIndexToIns2(testCases.one.array, testCases.one.target)).toBe(
			testCases.one.returnVal
		)
		expect(
			testCases.one.array[
				getIndexToIns2(testCases.one.array, testCases.one.target)
			]
		).toBe(testCases.one.target)
		// case two
		expect(getIndexToIns2(testCases.two.array, testCases.two.target)).toBe(
			testCases.two.returnVal
		)
		expect(
			testCases.two.array[
				getIndexToIns2(testCases.two.array, testCases.two.target)
			]
		).toBe(testCases.two.target)
		// case three
		expect(getIndexToIns2(testCases.three.array, testCases.three.target)).toBe(
			testCases.three.returnVal
		)
		expect(
			testCases.three.array[
				getIndexToIns2(testCases.three.array, testCases.three.target)
			]
		).toBe(testCases.three.target)
		// case four
		expect(getIndexToIns2(testCases.four.array, testCases.four.target)).toBe(
			testCases.four.returnVal
		)
		expect(
			testCases.four.array[
				getIndexToIns2(testCases.four.array, testCases.four.target)
			]
		).toBe(testCases.four.target)
		// case five
		expect(getIndexToIns2(testCases.five.array, testCases.five.target)).toBe(
			testCases.five.returnVal
		)
		expect(
			testCases.seven.array[
				getIndexToIns2(testCases.seven.array, testCases.seven.target)
			]
		).toBe(testCases.seven.target)
		// case six
		expect(getIndexToIns2(testCases.six.array, testCases.six.target)).toBe(
			testCases.six.returnVal
		)
		expect(
			testCases.six.array[
				getIndexToIns2(testCases.six.array, testCases.six.target)
			]
		).toBe(testCases.six.target)
		// case seven
		expect(getIndexToIns2(testCases.seven.array, testCases.seven.target)).toBe(
			testCases.seven.returnVal
		)
		expect(
			testCases.seven.array[
				getIndexToIns2(testCases.seven.array, testCases.seven.target)
			]
		).toBe(testCases.seven.target)
	})
})
