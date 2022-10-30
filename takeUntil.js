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

/*The function will return a "slice of the array with elements taken from the beginning." 
It should keep going until the callback/predicate returns a truthy value.
*/
const takeUntil = function (array, callback) {
  const take = [];
  for (let item of array) {
    if (callback(item) === false) {
      take.push(item);
    } else { 
      break
    }
  }
  return take;
};
//};
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);



