const assert = require('chai').assert;
const tail  = require('../tail');

// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

// assertEqual(tail([0,2,5]),[2,5])  

describe("#tail", () => {
  it("returns [] for []", () => {
    assert.deepEqual(tail([]),[]) ; 
  });
  it("returns [2] for []", () => {
    assert.deepEqual(tail([2]),[]) ; 
  });
  it("returns [2,5] for [0,2,5]", () => {
    assert.deepEqual(tail([0, 2, 5]),[2,5]) ; 
  });
});


module.exports = tail