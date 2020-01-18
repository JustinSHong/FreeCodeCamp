// Return the factorial of the provided integer.
// If the integer is represented with the letter n,
// a factorial is the product of all positive integers less than or equal to n.

//Factorials are often represented with the shorthand notation n!
//For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

// Solution #1
export const factorialize1 = (num: number): number => {
	// product holds the factorial
	let product = 1

	// special case if num is 0
	if (num === 0) {
		return 1
	}

	let i = num
	while (i > 0) {
		product *= i
		i--
	}
	return product
}

// Solution #2
export const factorialize2 = (num: number): number => {
	let product = 1

	if (num === 0) {
		return 1
	} else {
		for (let i = 1; i <= num; i++) {
			product *= i
		}
	}
	return product
}

factorialize1(0) // 1
factorialize1(5) // 120
factorialize1(10) // 3628800
factorialize1(20) // 2432902008176640000

factorialize2(0) // 1
factorialize2(5) // 120
factorialize2(10) // 3628800
factorialize2(20) // 2432902008176640000
