function sumPrimes(num) {
	let primes = [];
	
	while (num % 2 === 0) {
		primes.push(2);
		num /= 2;
	}
	
	let factor = 3;
	while (num > 1) {
		if (num % factor === 0) {
			primes.push(factor);
			num /= factor;
		} else {
			factor += 2;
		}
	}
	return primes;
}

function smallestCommons(arr) {
	arr = arr.sort();

	let factors = [];

	for (let i = arr[0]; i <= arr[1]; i++) {
		if (i === 1) {
			continue;
		}
		factors.push(sumPrimes(i));
	}
	console.log(factors);
}