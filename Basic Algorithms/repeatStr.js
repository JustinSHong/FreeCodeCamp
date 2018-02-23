// Repeat a given string (first argument) num times (second argument).
// Return an empty string if num is not a positive number.

function repeatStringNumTimes(str, num) {
	var result = '';
	
	if (num < 0) {
		return '';
	}
	for (let i = 0; i < num; i++) {
		result += str;
	}
	return result;
}

repeatStringNumTimes("*", 3); // "***"
repeatStringNumTimes("abc", 3); // "abcabcabc"
repeatStringNumTimes("abc", 4); // "abcabcabcabc"
repeatStringNumTimes("abc", 1); // "abc"
repeatStringNumTimes("*", 8); // "********"
repeatStringNumTimes("abc", -2); // ""