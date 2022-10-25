const eqArrays = function (a, b) {
  if (a.length !== b.length) {
    return false;
  }
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (a, b) {
  if (eqArrays(a, b)) {
    console.log(`✅✅✅Assertion Passed:${a} === ${b}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:${a} !== ${b}`);
  }
};

const letterPositions = function (sentence) {
  // create empty obj to store results
  const results = {};
  // convert all strings to lowercases
  const lowerCase = sentence.toLowerCase();
  // loop through string, sets letters as the keys of the results object
  for (let letters of lowerCase) {
    // if value of the string is not falsy
    if (results[letters] !== false && results[letters] !== " ") {
      // have the value of he keys be an empty array 
      results[letters] = [];
      //loop through the string
      for (let i = 0; i < lowerCase.length; i++) {
        // if the key matches the indexed letter inside the string assign the key value as the index location
        if (letters === lowerCase[i]) {
          results[letters].push(i);
        }
      }
    }
  }
  return results;
};

const string = "lighthouse in the house";

const answer = {
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12],
};

console.log(letterPositions(string));
