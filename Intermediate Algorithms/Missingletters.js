// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

function fearNotLetter(str) {
	let missing;
	let min = str.charCodeAt(0);
	let max = str.charCodeAt(str.length - 1);
	let index = 0;
	
	for (let i = min; i <= max; i++) {
		if (str[index] !== String.fromCharCode(i)) {
			missing = String.fromCharCode(i);
			return missing;
		}
		index++;
	}
	return undefined;
}

function fearNotLetter(str) {
	let strCode = str.charCodeAt(0);
	let missing;

	let mapped =  str.split('').map(function(char) {

		if (char.charCodeAt(0) === strCode) {
			strCode++;
		} else {
			missing = String.fromCharCode(strCode);
        }
	});

	return missing;
}

fearNotLetter("abce"); // "d"
fearNotLetter("abcdefghjklmno"); // "i"
fearNotLetter("bcd"); // undefined
fearNotLetter("yz"); // undefined
