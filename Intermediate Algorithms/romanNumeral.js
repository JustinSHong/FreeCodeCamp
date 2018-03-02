// Convert the given number into a roman numeral
// All roman numerals should be provided in upper case

function convertToRoman(num) {
	let numerals = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500 , 900, 1000];
	let symbols = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
	let roman = '';
	
	for (let i = numerals.length - 1; i >= 0; i--) {
		while (num >= numerals[i]) {
			num -= numerals[i];
			roman += symbols[i];
		}
	}
	return roman;
}

convertToRoman(2); // II
convertToRoman(3); // III
convertToRoman(4); // IV
convertToRoman(5); // V
convertToRoman(9); // IX
convertToRoman(12); // XII
convertToRoman(16); // XVI
convertToRoman(29); // XXIX
convertToRoman(44); // XLIV
convertToRoman(45); // XLV 
convertToRoman(68); // LXVIII
convertToRoman(83); // LXXXIII
convertToRoman(97); // XCVII
convertToRoman(99); // XCIX
convertToRoman(500); // D
convertToRoman(501); // DI
convertToRoman(649); // DCXLIX
convertToRoman(798); // DCCXCVIII
convertToRoman(891); // DCCCXCI
convertToRoman(1000); // M
convertToRoman(1004); // MIV
convertToRoman(1006); // MVI
convertToRoman(1023); // MXXIII
convertToRoman(2014); // MMXIV
convertToRoman(3999); // MMMCMXCIX