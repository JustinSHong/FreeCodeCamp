// Reverse the provided string.
// You may need to turn the string into an array
// before you can reverse it.
// Your result must be a string.


// use split, reverse, and join() methods
function reverseString(str) {

	var reversed = str.split('').reverse().join('');
	return reversed;
}

// iterate from end of str and push to new string
function reverseString(str) {
	var reversed = '';

	for (let i = str.length - 1; i >= 0; i--) {
		reversed += str[i];
	}
	
	return reversed;
}

reverseString('hello');
reverseString('Howdy');
reverseString('Greetings from Earth');