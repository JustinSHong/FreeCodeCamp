// We'll pass you an array of two numbers.
// Return the sum of those two numbers and all numbers between them.

// The lowest number will not always come first.

function sumAll(arr) {
	let max = Math.max(arr[0], arr[1]);
	let min = Math.min(arr[0], arr[1]);
	let nums = [];	

	for (let i = min ; i <= max; i++) {
		nums.push(i);
	}

	let sum = 0;
	for (let j = 0; j < nums.length; j++) {
		sum += nums[j];
	}
	return sum;
}

sumAll([1, 4]); // 10
sumAll([4, 1]); // 10
sumAll([5, 10]); // 45
sumAll([10, 5]); // 45