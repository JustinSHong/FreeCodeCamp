// Return true if the string in the first element of the array contains
// all of the letters of the string in the second element of the array.

function mutation(arr) {
	let first = arr[0].toLowerCase();
	let second = arr[1].toLowerCase();
	
	for (let i = 0; i < second.length; i++) {
		if (first.indexOf(second[i]) === -1) {
			return false;
		}
	}
	return true;
}

function mutation(arr) {
	let first = arr[0].toLowerCase();
	let second = arr[1].toLowerCase();
	
	let i = 0;
	while (i < second.length) {

		if (first.indexOf(second[i]) === -1) {
			return false;
		}
		i++;
	}
	return true;
}

function mutation(arr) {
	return arr[1].toLowerCase().split('').every(function(current) {
		return arr[0].toLowerCase().indexOf(current) !== -1;
	});
}

function mutation(arr) {

	function isEqualTo(current) {
		return arr[0].toLowerCase().indexOf(current) !== -1;
	}

	return arr[1].toLowerCase().split('').every(isEqualTo);
}

mutation(["hello", "hey"]); // false
mutation(["hello", "Hello"]); // true
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]); // true
mutation(["Mary", "Army"]); // true
mutation(["Mary", "Aarmy"]); // true
mutation(["Alien", "line"]); // true
mutation(["floor", "for"]); // true
mutation(["hello", "neo"]); // false
mutation(["voodoo", "no"]); // false