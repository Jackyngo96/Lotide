const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`โโโAssertion Passed:${actual} === ${expected}`);
  } else {
    console.log(`๐๐๐ Assertion Failed:${actual} !== ${expected}`);
  }
}; 

const findKey = function (object, callback) {
for (let key of Object.keys(object)) { 
  if (callback(object[key])) { 
    return key
  } 
}
return undefined
} ;


console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)) // => "noma" 

