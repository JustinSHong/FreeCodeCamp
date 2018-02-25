// Compare two arrays and return a new array with any items only found in
// one of the two given arrays, but not both. In other words,
// return the symmetric difference of the two arrays.

function diffArray(arr1, arr2) {
	var result = [];
	
	for (let i = 0; i < arr1.length; i++) {
		// check if els in arr2 are unique
		if (arr2.indexOf(arr1[i]) === - 1) {
			result.push(arr1[i]);	
		}
	}

	for (let j = 0; j < arr2.length; j++) {
		// check if els in arr1 are unique
		if (arr1.indexOf(arr2[j]) === -1) {
			result.push(arr2[j]);
		}
	}
	return result;
}



diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); // [4] pass
diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
// ["pink wool"] pass
diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
// ["diorite", "pink wool"] pass
diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]);
// [] pass
diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);
// ["piglet", 4] pass
diffArray([], ["snuffleupagus", "cookie monster", "elmo"]);
// ["snuffleupagus", "cookie monster", "elmo"] pass
diffArray([1, "calf", 3, "piglet"], [7, "filly"]);
// [1, "calf", 3, "piglet", 7, "filly"] pass
