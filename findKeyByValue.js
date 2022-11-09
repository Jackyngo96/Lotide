const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed:${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:${actual} !== ${expected}`);
  }
};
const findKeyByValue = function (object, value) {
  let result = "";
  //loop through object keys and store the keys under the key variable
  for (let key of Object.keys(object)) {
    // if the value given as an argument matches the values inside each of the keys, make result = to key and returnt the result
    if (value === object[key]) {
      result = key;
      return result;
    } else {
      result = undefined;
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
