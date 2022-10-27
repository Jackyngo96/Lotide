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
const eqObjects = function (object1, object2) {
  // compare object lengths
  if (Object.keys(object1).length === Object.keys(object2).length) {
    // loop through object keys
    for (let key of Object.keys(object1)) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      } else if (object1[key] !== object2[key]) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
}; 

const assertObjectsEqual = function(actual, expected) { 
  const inspect = require('util').inspect;
 
  if (eqObjects(actual,expected)) { 
    console.log(`✅✅✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}` )
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:${inspect(actual)} !== ${inspect(expected)}`)
  } 
} 
   
const ab = { a: "1", b: "4" };
const ba = { b: "4", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

assertObjectsEqual(cd,dc) 
assertObjectsEqual(cd,cd2) 

