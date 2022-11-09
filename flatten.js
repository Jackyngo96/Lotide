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

const flatten = function (array) {
  // create empty array for the elements of the array to be pushed
  let flattenedArray = [];
  // loop through the array
  for (let i = 0; i < array.length; i++) {
    // determine if element inside the array is an array
    if (Array.isArray(array[i])) {
      // if element inside the array is an array, loop through the array
      for (let j = 0; j < array[i].length; j++) {
        // push elements inside the array to the empty array
        flattenedArray.push(array[i][j]);
      }
      // push elements of the array into the empty array
    } else {
      flattenedArray.push(array[i]);
    }
  }
  return flattenedArray;
};
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]),[1, 2, 3, 4, 5, 6]); 
