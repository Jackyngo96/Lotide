const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`โโโAssertion Passed:${actual} === ${expected}`);
  } else {
    console.log(`๐๐๐ Assertion Failed:${actual} !== ${expected}`);
  }
};
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual("apples", "apples");
// assertEqual("apples", "oranges");
// assertEqual(5, 5);
// assertEqual(5, 9);

module.exports = assertEqual;