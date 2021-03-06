// You will be provided with an initial array
// followed by one or more arguments.
// Remove all elements from the initial array that are of the same value as these arguments.

function destroyer(arr) {
	
	var args = Array.prototype.slice.call(arguments);
	return arr.filter(function(current) {
		return args.indexOf(current) === -1;
	});
}

function destroyer(arr) {
	
	var args = Array.prototype.slice.call(arguments);
	return arr.filter(function(current) {
		return !(args.includes(current));
	});

}

function destroyer(arr) {
	
	var args = Array.prototype.slice.call(arguments);
	var result = [];
	
	for(let i = 0; i < arr.length; i++) {
		if (args.indexOf(arr[i]) === - 1) {
			result.push(arr[i]);
		}
	}
	return result;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3); // [1, 1]
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3); // [1, 5, 1]
destroyer([3, 5, 1, 2, 2], 2, 3, 5); // [1]
destroyer([2, 3, 2, 3], 2, 3); // []
destroyer(["tree", "hamburger", 53], "tree", 53); // ["hamburger"]