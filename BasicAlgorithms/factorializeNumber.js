// Return the factorial of the provided integer.
// If the integer is represented with the letter n,
// a factorial is the product of all positive integers less than or equal to n.

//Factorials are often represented with the shorthand notation n!
//For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

function factorialize(num) {

	// product holds the factorial
	var product = 1;

	// special case if num is 0
	if (num === 0) {
		return 1;
	}

	var i = num;
	while(i > 0 ) {
		product *= i;
		i--;
	}
	return product;
}

function factorialize(num) {
	var product = 1;

	if (num === 0) {
		return 1;
	} else {
		for (var i = 1; i <= num; i++) {
			product *= i;
		}
	}
	return product;
}


factorialize(0);
factorialize(5);
factorialize(10);
factorialize(20);