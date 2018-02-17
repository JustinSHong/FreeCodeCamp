// Return the length of the longest word in the provided sentence.
// Your response should be a number.

function findLongestWord(str) {
	var len = 0;
	// convert str into array
	var words = str.split(' ');

	// compare lengths of each word
	for (let i = 0; i < words.length; i++) {
		if (words[i].length > len) {
			len = words[i].length;
		}
	}
	return len;
}

function findLongestWord(str) {
	var words = str.split(' ');
	var len = [];

	// push word lengths to len
	for (let i = 0; i < words.length; i++) {
		len.push(words[i].length);
	}

	// sort from smallest to largest length
	len.sort(function(a,b) {
		return a - b;
	});

	// largest length is last value in len
	return len[len.length - 1];
}

function findLongestWord(str) {
	// sort from largest length to smallest length
	var words = str.split(' ').sort(function(a, b) {
		return b.length - a.length;
	});

	// return largest length
	return words[0].length;
}

function findLongestWord(str) {
	var words = str.split(' ').reduce(function(previousVal, currentVal) {
		if (currentVal.length > previousVal.length) {
			return currentVal;
		} else {
			return previousVal;
		}
	}, "");
	return words.length;
}


// test cases
findLongestWord("The quick brown fox jumped over the lazy dog"); // 6
findLongestWord("May the force be with you"); // 5
findLongestWord("Google do a barrel roll"); // 6
findLongestWord("What is the average airspeed velocity of an unladen swallow"); // 8
findLongestWord("What if we try a super-long word such as otorhinolaryngology"); // 19
