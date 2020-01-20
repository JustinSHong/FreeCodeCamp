// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
// The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below the provided parameter value number.

const multiplesOf3and5 = (number: number): number => {
	let sum = 0
	let current = 1
	while (current < number) {
		if (current % 3 === 0 || current % 5 === 0) {
			sum += current
		}
		current++
	}
	return sum
}

multiplesOf3and5(1000) // 233168
multiplesOf3and5(49) // 543
multiplesOf3and5(19564) // 89301183
multiplesOf3and5(8456) // 16687353
