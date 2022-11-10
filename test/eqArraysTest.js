const eqArrays = require('../eqArrays'); 
const assertEqual = require('../assertEqual');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS 
assertEqual(eqArrays([1, 2, 3], [1, 3, 3]), false) 
 
module.exports = eqArrays