const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed:${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:${actual} !== ${expected}`);
  }
}; 

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

assertArraysEqual([1, 2, 3],[1, 2, 3]); 

const assertArraysareEqual = function (a,b){ 
  return assertEqual(eqArrays(a,b),true)
}  
assertArraysareEqual([1, 2, 3],[1, 2, 3]); 
