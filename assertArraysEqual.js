const eqArrays = require("./eqArrays");


 const assertArraysEqual = function (a,b){ 
  if (eqArrays(a,b)) { 
    console.log(`โโโAssertion Passed:${a} === ${b}`)
  } else {
    console.log(`๐๐๐ Assertion Failed:${a} !== ${b}`)
  } 
} 

module.exports = assertArraysEqual


