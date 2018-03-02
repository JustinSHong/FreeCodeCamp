// Make a function that looks through an array of objects and
// returns an array of all objects that have matching property and value pairs. 
// Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

function whatIsInAName(collection, source) {
	let arr = [];
	let srcKeys = Object.keys(source);
	let count = 0;

	for (let i = 0; i < collection.length; i++) {
		if (Object.keys(collection[i]).length >= srcKeys.length) {
			for (let key of srcKeys) {
				if (key in collection[i]) {
					if (collection[i][key] === source[key]) {
						count++;
                    }
				}	
			}

			if (count === srcKeys.length) {
				arr.push(collection[i]);
			}
			count = 0;
		}
	}
	return arr;
}

function whatIsInAName(collection, source) {

	let srcKeys = Object.keys(source);

	return collection.filter(function(obj) {
		for (let key of srcKeys) {
            if (!(key in obj) || (obj[key] !== source[key])) {
                return false;
            }
        }
		return true;
	});
}

function whatIsInAName(collection, source) {

	let srcKeys = Object.keys(source);

	return collection.filter(function(obj) {
		return srcKeys.every(function(key) {
			return key in obj && obj[key] === source[key]; 
        })
    });
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
// [{ first: "Tybalt", last: "Capulet" }]
whatIsInAName([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 });
//  [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }]
whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });
// [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }]
whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 });
// [{ "a": 1, "b": 2, "c": 2 }]