// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
// Remember, you can access object properties through either dot notation or [] notation.

function truthCheck(collection, pre) {
  // iterate over the collection
  for (let item of collection) {
    // test pre for truthiness
    // pre in each item must eval to true
    if (item[pre] && item.hasOwnProperty(pre)) {
      continue;
    }
	// false case: item does not have pre and/or item[pre] is falsey
    else {
      return false;
    }
  }
  // output: boolean describing if pre is truthy for all items
	// passed all false cases
  return true;
}

// test cases
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"); 
// true
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"); 
// false
truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age"); 
// false
truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat"); 
// false
truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat"); 
// true
truthCheck([{"single": "yes"}], "single");
// true
truthCheck([{"single": ""}, {"single": "double"}], "single");
// false
truthCheck([{"single": "double"}, {"single": undefined}], "single");
// false
truthCheck([{"single": "double"}, {"single": NaN}], "single");
// false
