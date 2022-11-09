const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed:${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:${actual} !== ${expected}`);
  }
};

const countLetters = function (sentence) {
  // create empty obj to store results
  const results = {};
  // convert all strings to lowercases
  const lowerCase = string.toLowerCase();
  // loop through string
  for (let letters of lowerCase) {
    // if value of the string is falsy, give value of 0
    if (!results[letters])  {
      results[letters] = 0;
    }
    // increment value of string if a letter
    results[letters]++;
  }
  return results;
};

const string = "Lighthouse in the house";

const answer ={
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
}
console.log(countLetters(string));
assertEqual(countLetters(string),answer)

