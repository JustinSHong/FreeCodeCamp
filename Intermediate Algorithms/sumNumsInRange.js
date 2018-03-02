// We'll pass you an array of two numbers.
// Return the sum of those two numbers and all numbers between them.

// The lowest number will not always come first.

function sumAll(arr) {
	let max = Math.max(arr[0], arr[1]);
	let min = Math.min(arr[0], arr[1]);	

	let sum = 0;
	for (let i = min; i <= max; i++) {
		sum += i;
	}
	return sum;
}

function sumAll(arr) {
	let max = Math.max(arr[0], arr[1]);
	let min = Math.min(arr[0], arr[1]);
	let nums = [];

	for (let i = min; i <= max; i++) {
		nums.push(i);
	}
	return nums.reduce(function(a, b) {
		return a + b;
	});
}

function sumAll(arr) {
	let sum = 0;
	 
	for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
		sum += i;
	}
	return sum;
}

sumAll([1, 4]); // 10
sumAll([4, 1]); // 10
sumAll([5, 10]); // 45
sumAll([10, 5]); // 45