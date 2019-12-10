// Convert a string to spinal case.
// Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
	// regex for all white space and all underscores
	let regex = /\s+|_+/g;
	// replace low to uppercase char with low plus space plus uppercase char
	str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
	// replace whitespace and underscores -
	// lower case str
	return str.replace(regex, '-').toLowerCase();
}

spinalCase("This Is Spinal Tap");
// "this-is-spinal-tap"
spinalCase("thisIsSpinalTap");
// "this-is-spinal-tap"
spinalCase("The_Andy_Griffith_Show");
// "the-andy-griffith-show"
spinalCase("Teletubbies say Eh-oh");
// "teletubbies-say-eh-oh"
spinalCase("AllThe-small Things");
// "all-the-small-things"
