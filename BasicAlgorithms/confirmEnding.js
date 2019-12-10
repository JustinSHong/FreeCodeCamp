// Check if a string (first argument, str) ends with 
// the given target string (second argument, target).
// This challenge can be solved with the .endsWith() method
// But for the purpose of this challenge, we would like you to use
// one of the JavaScript substring methods instead.

// use str.endsWith()
function confirmEnding(str, target) {
	return str.endsWith(target);
}

// use str.substr()
function confirmEnding(str, target) {
	var subStr = str.substr(-target.length);

	return subStr === target;
}

// use str.substring()
function confirmEnding(str, target) {
	var subStr = str.substring(str.length, str.length - target.length);
	
	return subStr === target;
}

// use slice()
function confirmEnding(str, target) {
	var subStr = str.slice(-target.length);

	return subStr === target;
}

// test cases
confirmEnding("Bastian", "n"); // true
confirmEnding("Connor", "n"); // false
confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"); // false
confirmEnding("He has to give me a new name", "name"); // true
confirmEnding("Open sesame", "same"); // true
confirmEnding("Open sesame", "pen"); // false
confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain"); // false
