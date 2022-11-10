const assertArraysEqual = require("./assertArraysEqual");
const eqArrays = require("./eqArrays");
  

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

module.exports = middle