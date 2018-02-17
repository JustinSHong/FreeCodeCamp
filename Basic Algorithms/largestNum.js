// Return an array consisting of the largest number from each provided sub-array.
// For simplicity, the provided array will contain exactly 4 sub-arrays.

function largestOfFour(arr) {
	// holds largest num in each sub-arr
	var result = [];
	var current = 0;

	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr[i].length; j++) {
			if (arr[i][j] > current) {
				current = arr[i][j];
			}
		}
		// push largest num in each subarr to result
		result.push(current);
		// reset current before moving to the next subarr
		current = 0;
	}
	return result;
}

function largestOfFour(arr) {
	// holds result from reduce()
	var result = [];
	var max = 0;

	for (let i = 0; i < arr.length; i++) {
		max = arr[i].reduce(function(num1, num2) {
			return Math.max(num1, num2);
		});
		result.push(max);
	}
	return result;
}


function largestOfFour(arr) {
	var result = [];
	var max = [];

	for (let i = 0; i < arr.length; i++) {
		max = arr[i].sort(function(a, b) {
			return b - a;
		});
		result.push(max[0]);
	}
	return result;
}

// test cases
largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
// [27,5,39,1001]
largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]);
// [9, 35, 97, 1000000]

