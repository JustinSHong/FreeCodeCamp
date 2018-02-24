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

mutation(["hello", "hey"]); // false
mutation(["hello", "Hello"]); // true
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]); // true
mutation(["Mary", "Army"]); // true
mutation(["Mary", "Aarmy"]); // true
mutation(["Alien", "line"]); // true
mutation(["floor", "for"]); // true
mutation(["hello", "neo"]); // false
mutation(["voodoo", "no"]); // false