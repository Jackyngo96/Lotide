# Lotide 
Install it:

npm install @jayengeo/lotide

Require it:

const _ = require('@jayengeo/lotide');

Call it:

const results = _.tail([1, 2, 3]) // => [2, 3]

Documentation
The following functions are currently implemented:

assertArraysEqual: prints out if two arrays are equal
assertEqual: determines if two arguments are equal
countLetters: counts the total number of each letter in a sentence
countOnly: counts instances of an array if boolean value is true
eqArrays: determines if two arrays are equal
eqObjects: determines if two objects are equal
findKey: finds key of an object based on condition inside callback function
findKeyByValue: finds key of an object by its value
flatten: flattens an array with arrays inside
head: returns the first element of an array
letterPositions: determines the indices of letters inside a string
map: maps an array and returns only the first letter of each value
middle: returns the middle element of an array
tail: returns the end last element of an array
takeUntil: returns values of an array while callback condition is false
without: removes items from an array
