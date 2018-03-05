// Write a function that takes two or more arrays and returns a new array of unique values
// in the order of the original provided arrays.

// In other words, all values present from all arrays should be included in their original order,
// but with no duplicates in the final array.

// The unique numbers should be sorted by their original order,
// but the final array should not be sorted in numerical order.

function uniteUnique(arr) {
	let result = [];
	
	for (let arg of arguments) {
		for (el of arg) {
			result.push(el);
		}
	}
	
	for (let num of result) {
		while (result.indexOf(num) !== result.lastIndexOf(num)) {
			result.splice(result.lastIndexOf(num), 1);
		}
	}
	return result;
}

function uniteUnique(arr) {
	let flattened = Array.from(arguments).reduce(function(a, b) {
		return a.concat(b);
	})
	
	let result = [];
	flattened.forEach(function(el) {
        while (flattened.lastIndexOf(el) !== flattened.indexOf(el)) {
            flattened.splice(flattened.lastIndexOf(el), 1);
        }
       	result.push(el); 
	});
	return result;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
// [1, 3, 2, 5, 4]
uniteUnique([1, 3, 2], [1, [5]], [2, [4]]); 
// [1, 3, 2, [5], [4]]
uniteUnique([1, 2, 3], [5, 2, 1]);
// [1, 2, 3, 5]
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);
// [1, 2, 3, 5, 4, 6, 7, 8]

function flatten(arr) {
	return Array.prototype.reduce.call(arguments, function(a, b) {
		return a.concat(b);
	});
}

function flatten(...arr) {
	return arr.reduce(function(a, b) {
		return a.concat(b);
	});
}

function uniteUnique(arr) {
	let result = [];
	for (el of arr) {
		while (arr.indexOf(el) !== arr.lastIndexOf(el)) {
			arr.splice(arr.lastIndexOf(el), 1);
        }
		result.push(el);
	}
	return result;
}

uniteUnique(flatten([1, 3, 2], [5, 2, 1, 4], [2, 1]));
// [1, 3, 2, 5, 4]
uniteUnique(flatten([1, 3, 2], [1, [5]], [2, [4]])); 
// [1, 3, 2, [5], [4]]
uniteUnique(flatten([1, 2, 3], [5, 2, 1]));
// [1, 2, 3, 5]
uniteUnique(flatten([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));
// [1, 2, 3, 5, 4, 6, 7, 8]