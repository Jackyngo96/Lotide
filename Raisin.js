const raisinAlarm = function(cookie) {
  for (let ingredient of cookie) {
    if (ingredient === "🍇") {
      return 'Raisin Alert!';
    }
  }
  return 'All Good!';
};

// console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
// console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
// console.log(raisinAlarm(["🍫", "🍫", "🍫"]));


const raisinAlarmArray = function(cookies) {
  // Put your solution here
  let warning = [];
  let answer = false;
  for (let arrays of cookies) {
    answer = false;
    for (let ingredients of arrays) {
      if (ingredients === "🍇") {
        warning.push('Raisin Alert!');
        answer = true;
        break;
      }
    }
    if (!answer) {
      warning.push('All good!');
    }
    
  }
  return warning;

};

console.log(
  raisinAlarmArray([
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"],
  ])
);
