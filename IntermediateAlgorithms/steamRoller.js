// Flatten a nested array. You must account for varying levels of nesting.

const steamrollArray = (elements) => {
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
  const flat = [];
  function flattenArr(a) {
      // base case: el in arr is not an array
    if (!Array.isArray(a)) {
      flat.push(a);
    } else {
      // recursive case: el is an array
      // iterate over a: go one level into el
      a.forEach(el => flattenArr(el));
    }
    return flat;
  }
  return flattenArr(elements);
};

steamrollArray([[["a"]], [["b"]]]); // ["a", "b"]
steamrollArray([1, [2], [3, [[4]]]]); // [1, 2, 3, 4]
steamrollArray([1, [], [3, [[4]]]]); // [1, 3, 4]
steamrollArray([1, {}, [3, [[4]]]]); // [1, {}, 3, 4]