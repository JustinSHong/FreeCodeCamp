// Each new term in the Fibonacci sequence is generated by adding the previous two terms.
// By starting with 1 and 2, the first 10 terms will be: 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// By considering the terms in the Fibonacci sequence that do not exceed the nth term, find the sum of the even-valued terms.

// iterative solution
const fiboEvenSum = (n: number): number => {
	const fibNums = [0, 1]
	let sum = 0

	for (let i = 2; i <= n + 1; i++) {
		const next = fibNums[i - 1] + fibNums[i - 2]
		if (next % 2 === 0) {
			sum += next
		}
		fibNums[i] = next
	}

	return sum
}
