const assertEqual = require('../assertEqual');

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("apples", "apples");
assertEqual("apples", "oranges");
assertEqual(5, 5);
assertEqual(5, 9);

module.exports = assertEqual;