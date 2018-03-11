// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers.
// The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

function sumFibs(num) {
	let fibNums = [1, 1, 2, 3, 5, 8];
	let sum = 0;
	let index = 0;
	
	// add more fibonacci nums
	let i = 5;
	while (i <= num) {
		i++;
		fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
	}
	
	// add all odd fibonnaci nums
	for (let n of fibNums) {
		if (n <= num && n % 2 === 1) {
			sum += n;
		}
	}
	return sum;
}

function sumFibs(num) {
	let fibNums = [1, 1, 2, 3, 5, 8];
	let sum = 0;

	let index = 0;
	let i = 5;
	while (fibNums[index] <= num) {
		// add more fibonnaci nums
		i++;
		fibNums[i] = fibNums[i - 1] + fibNums[i - 2];

		// add all odd fibNums to sum
		if (fibNums[index] % 2 === 1) {
			sum += fibNums[index];
		}
		index++;
	}
	return sum;
}

function sumFibs(num) {
	let fibNums = [1, 1, 2, 3, 5, 8];
	let sum = 0;

	let index = 0;
	let i = 5;
	while (fibNums[i] <= num) {
		i++;
		fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
	}
	
	return fibNums.filter(function(n) {
		return n % 2 === 1 && n <= num;
	}).reduce(function(a, b) {
		return a + b;
	});
}

sumFibs(1); // 1 
sumFibs(1000); // 1785
sumFibs(4000000); // 4613732
sumFibs(4); // 5
sumFibs(75024); // 60696
sumFibs(75025); // 135721  