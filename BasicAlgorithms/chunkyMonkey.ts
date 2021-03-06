// Write a function that splits an array into groups the length of size
// and returns them as a two-dimensional array.

// SOLUTION #1
export const chunkArrayInGroups = <T>(arr: T[], size: number): T[][] => {
	const result: T[][] = []

	for (let i = 0; i < arr.length; i += size) {
		result.push(arr.slice(i, i + size))
	}
	return result
}

// SOLUTION #2
export const chunkArrayInGroups2 = <T>(arr: T[], size: number): T[][] => {
	const result: T[][] = []

	let i = 0
	while (i < arr.length) {
		result.push(arr.slice(i, i + size))
		i += size
	}
	return result
}

chunkArrayInGroups(['a', 'b', 'c', 'd'], 2) // [["a", "b"], ["c", "d"]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) // [[0, 1, 2], [3, 4, 5]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) // [[0, 1], [2, 3], [4, 5]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) // [[0, 1, 2, 3], [4, 5]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) // [[0, 1, 2], [3, 4, 5], [6]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) // [[0, 1, 2, 3], [4, 5, 6, 7], [8]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) // [[0, 1], [2, 3], [4, 5], [6, 7], [8]]

chunkArrayInGroups2(['a', 'b', 'c', 'd'], 2) // [["a", "b"], ["c", "d"]]
chunkArrayInGroups2([0, 1, 2, 3, 4, 5], 3) // [[0, 1, 2], [3, 4, 5]]
chunkArrayInGroups2([0, 1, 2, 3, 4, 5], 2) // [[0, 1], [2, 3], [4, 5]]
chunkArrayInGroups2([0, 1, 2, 3, 4, 5], 4) // [[0, 1, 2, 3], [4, 5]]
chunkArrayInGroups2([0, 1, 2, 3, 4, 5, 6], 3) // [[0, 1, 2], [3, 4, 5], [6]]
chunkArrayInGroups2([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) // [[0, 1, 2, 3], [4, 5, 6, 7], [8]]
chunkArrayInGroups2([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) // [[0, 1], [2, 3], [4, 5], [6, 7], [8]]
