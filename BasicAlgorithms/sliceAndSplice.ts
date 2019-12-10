// You are given two arrays and an index.
// Use the array methods slice and splice to copy each element of the first array into the second array, in order.
// Begin inserting elements at index n of the second array.
// Return the resulting array. The input arrays should remain the same after the function runs.

export const frankenSplice = (
	arrToCopy: any[],
	target: any[],
	idx: number
): any[] => {
	let result = target.slice()
	result.splice(idx, 0, ...arrToCopy)
	return result
}

frankenSplice([1, 2, 3], [4, 5], 1) // [4, 1, 2, 3, 5].
frankenSplice([1, 2], ['a', 'b'], 1) // ["a", 1, 2, "b"].
frankenSplice(['claw', 'tentacle'], ['head', 'shoulders', 'knees', 'toes'], 2) // ["head", "shoulders", "claw", "tentacle", "knees", "toes"].
