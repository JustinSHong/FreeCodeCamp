// Sum all the prime numbers up to and including the provided number.

// A prime number is defined as a number greater than one and having only two divisors, one and itself.
// For example, 2 is a prime number because it's only divisible by one and two.

// The provided number may not be a prime.

function sumPrimes(num) {
	let primes = [2, 3];

	if (num === 2 || num === 3) {
		return num;
	}
	
	// add all numbers to prime that are not divisible by 2 and 3
	for (let i = 4; i <= num; i++) {
		if (i % 2 !== 0) {
			if (i % 3 !== 0) {
				primes.push(i);
			}
        }
	}

	// check primes for multiples of prime numbers
	// splice out all multiples of primes
	for (let i = primes.length - 1; i >= 0; i--) {
		for (let j = 0; j < primes.length; j++) {
			if (primes[i] % primes[j] === 0 &&
				primes[i] !== primes[j]) {
				primes.splice(i, 1);
			}
		}
	}
	// sum all primes
	// console.log(primes);
	return primes.reduce(function(a,b) {
		return a + b;
	});
}

function sumPrimes(num) {
	// holds all integers from 2 to num
	let integers = [];
	// marks integers in A as prime or composite
		// true means an integer is a prime
		// false means an integer is a composite
	let sieve = [];
	let sum = 0;

	// mark all integers from 2 to num as true initially
	for (let i = 2; i <= num; i++) {
		integers.push(i);
		sieve.push(Boolean(i));
    }
	
	// mark multiples of prime numbers as false
	for (let j = 0; j <= integers.length; j++) {
		if (sieve[j]) {
			for (let k = Math.pow(integers[j], 2); k <= num; k += integers[j]) {
				sieve[integers.indexOf(k)] = false;
			}
		}
	}
	
	// add primes numbers together
	for (let num of integers) {
		if (sieve[integers.indexOf(num)]) {
			sum += num;
		}
	}
	return sum;
}

sumPrimes(10); // 17
sumPrimes(977); // 73156