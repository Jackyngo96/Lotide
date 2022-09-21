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

const without = function (source,itemsTORemove){ 
  const result = []
  for (let i = 0; i < source.length; i++) {
    //console.log(i, source[i], itemsTORemove)
    if (!itemsTORemove.includes(source[i])) {
    result.push(source[i])  
    //source.splice(i,1) can not use splice because splcie modifies the array
   // console.log(source[i])
    } 
  }
  return result
} 
console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"] 

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]); 

