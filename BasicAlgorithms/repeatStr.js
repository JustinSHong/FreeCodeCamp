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

// use repeat()
function repeatStringNumTimes(str, num) {
	if (num < 0) {
		return '';
	}

	return str.repeat(num);
}

function repeatStringNumTimes(str, num) {
	var result = '';
	
	if (num < 0) {
		return '';
	}	
	var count = num;
	while(count > 0) {
		result += str;
		count--;
	}
	return result;
}

// use recursion
function repeatStringNumTimes(str, num) {
	if (num < 1) {
		return '';
	} 
	return str + repeatStringNumTimes(str, num - 1);
}

repeatStringNumTimes("*", 3); // "***"
repeatStringNumTimes("abc", 3); // "abcabcabc"
repeatStringNumTimes("abc", 4); // "abcabcabcabc"
repeatStringNumTimes("abc", 1); // "abc"
repeatStringNumTimes("*", 8); // "********"
repeatStringNumTimes("abc", -2); // ""