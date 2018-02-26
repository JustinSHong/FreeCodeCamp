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

function diffArray(arr1, arr2) {
	let result = [];
	let arr3 = arr1.concat(arr2).sort();
// 	let arr3 = [...arr1,...arr2];
	
	for (let i = 0; i < arr3.length; i++) {
		if (arr3[i] !== arr3[i + 1] &&
			arr3[i] !== arr3[i - 1]) {
			result.push(arr3[i]);
		}
	}
	return result;
}

function diffArray(arr1, arr2) {
	
	let arr3 = [...arr1,...arr2];
	// console.log('arr3 ' + arr3);
	return arr3.filter(function(el) {
		return arr3.indexOf(el) === arr3.lastIndexOf(el);
	});
}

function diffArray(arr1, arr2) {
	let result = [];

	function findUniqueEl(arr1, arr2) {
		for (let i = 0; i < arr1.length; i++) {
			if (arr2.indexOf(arr1[i]) === -1) {
				result.push(arr1[i]);
			}
		}
		return result;
	}
	// test elements from arr1 in arr2
	findUniqueEl(arr1, arr2);
	// test elements from arr2 in arr1
	findUniqueEl(arr2, arr1);

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
