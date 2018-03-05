// Convert the characters &, <, >, " (double quote), and ' (apostrophe)
 // in a string to their corresponding HTML entities.

 function convertHTML(str) {
	
	for (let letter of str) {
		switch (letter) {
            case '&':
				str = str.replace(letter, "&amp;");
				break;
            case '<':
				str = str.replace(letter, "&lt;");
				break;
            case '>':
				str = str.replace(letter, "&gt;");
				break;
            case '"':
				str = str.replace(letter, "&quot;");
				break;
            case "'":
				str = str.replace(letter, "&apos;");
				break;
		}
	}
	return str;
}

function convertHTML(str) {
	let entities = {
		"&" : "&amp;",
		"<" : "&lt;",
		">" : "&gt;",
		'"' : "&quot;",
		"'" : "&apos;"
	};

	return str.split('').map(function(char) {
		return (char in entities) ?  entities[char] : char;
	}).join('');
}

convertHTML("Dolce & Gabbana");
// Dolce &​amp; Gabbana
convertHTML("Hamburgers < Pizza < Tacos");
// Hamburgers &​lt; Pizza &​lt; Tacos
convertHTML("Sixty > twelve");
// Sixty &​gt; twelve
convertHTML('Stuff in "quotation marks"');
// Stuff in &​quot;quotation marks&​quot;
convertHTML("Shindler's List");
// Shindler&​apos;s List
convertHTML("<>"); 
// &​lt;&​gt;
convertHTML("abc");
// abc 


