const assertArraysEqual = function (a, b) {
  if (eqArrays(a, b)) {
    console.log(`✅✅✅Assertion Passed:${a} === ${b}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:${a} !== ${b}`);
  }
};

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

const middle = function (array) {
  let middleElement = array[Math.floor(array.length / 2)];
  let middleArray = [];
  if (array.length <= 2) {
    return middleArray;
  } else if (array.length % 2 !== 0) {
    middleArray.push(middleElement);
  } else if (array.length % 2 === 0) {
    middleArray.push(middleElement - 1, middleElement);
  }
  return middleArray;
};
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => []
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4]))