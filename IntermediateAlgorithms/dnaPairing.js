// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

// Base pairs are a pair of AT and CG. Match the missing element to the provided character.
// Return the provided character as the first element in each array.

// For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

function pairElement(str) {
	let dna = [];

	for (let el of str) {
		let pair = [];
		pair.push(el);
		switch(el) {
            case "G":
				pair.push("C");
				break;
            case "C":
				pair.push("G");
				break;
            case "A":
				pair.push("T");
				break;
            case "T":
				pair.push("A");
				break;
		}
		dna.push(pair);
	}
	return dna;
}

function pairElement(str) {
	return str.split('').map(function(el) {
		let pair = [];
		pair.push(el);		

  		el === "G" ? pair.push("C")
		: el === "C" ? pair.push("G")
		: el === "A" ? pair.push("T")
		: pair.push("A")

		return pair;
	});
}

function pairElement(str) {
	var basePairs = {
		A : "T",
		T : "A",
		G : "C",
		C : "G"		
	};
	
	let dna = [];
	
	for (let i = 0; i < str.length; i++) {
		dna[i] = [str[i], basePairs[str[i]]];
	}
	return dna;
}

pairElement("ATCGA"); 
// [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]
pairElement("TTGAG"); 
// [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]
pairElement("CTCTA"); 
// [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]