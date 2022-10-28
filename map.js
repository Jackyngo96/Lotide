const eqArrays = function (a,b){ 
  if (a.length !== b.length){ 
   return false
  } 
   for (let i = 0; i < a.length; i++){ 
      if ( a[i] !== b[i] ){ 
       return false
      }
 } 
 return true
 } 
const assertArraysEqual = function (a,b){ 
  if (eqArrays(a,b)) { 
    console.log(`✅✅✅Assertion Passed:${a} === ${b}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:${a} !== ${b}`)
  } 
} 
const words = ["ground", "control", "to", "major", "tom"]; 
const map = function(array, callback) { 
  const results = [];
  // console.log('array: ', array);
  // console.log('callback: ', callback);
  for (let item of array) {
    // console.log('item BEFORE: ', item);
    // console.log('item AFTER: ', callback(item));
    // console.log('---'); 
    results.push(callback(item));
  }
  return results;
};
const results1 = map(words, word => word[0]);
console.log(results1);  

assertArraysEqual(words,results1)