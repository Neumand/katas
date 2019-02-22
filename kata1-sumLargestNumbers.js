let sumLargestNumbers = function(array) {
  var sortedNumbers = array.sort(function(a,b){return b - a});
  if (sortedNumbers.length < 2) {
    return "The array must include more than two elements.";
  } else {
    return sortedNumbers[0] + sortedNumbers[1];
  }
}

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
console.log(sumLargestNumbers([3]));
