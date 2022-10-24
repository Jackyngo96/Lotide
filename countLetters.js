const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed:${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:${actual} !== ${expected}`);
  }
};

const countLetters = function (string) {
  // create empty obj to store results
  const results = {};
  // convert all strings to lowercases 
  const lowerCase = string.toLowerCase();
  // loop through string
  for (let letters of lowerCase) {
  // if value of the string is falsy, give value of 0
    if (!results[letters]) {
      results[letters] = 0;
    }
  // increment value of string if a letter
    results[letters]++;
  }
  return results;
};

const string = "Hello my name is Jacky Ngo and I have a dog named Toshi";

console.log(countLetters(string)); 
