const conditionalSum = function(values, condition) {
  let cumulativeEvenSum = 0;
  let cumulativeOddSum = 0;
  for(var i = 0; i < values.length; i++) {
    if (values[i] % 2 === 0) {
      cumulativeEvenSum += values[i];
    } else {
      cumulativeOddSum += values[i];
    }
  }
  if (condition === "even") {
    return cumulativeEvenSum;
  } else if (condition === "odd") {
    return cumulativeOddSum;
  } else {
    return "The condition must be 'even' or 'odd'.";
  }
}

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "hello world"));