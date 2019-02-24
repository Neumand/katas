/*

Create a function named repeatNumbers that will return a string with each of the given values repeated the appropriate number of times, each set of values separated by a comma. If there is only one set of values then you should omit the comma.

*/

let repeatNumbers = function(data) {
  let repeatString = '';
  for (var i = 0; i < data.length; i++) {
    let valuesRepeated = data[i][0];
    let timesRepeated = data[i][1];
    for (var j = timesRepeated; j > 0; j--) {
      repeatString += valuesRepeated;
      if (j === 1 && i < data.length - 1) {
        repeatString += ', ';
      }
    }
  }
  return repeatString;
}

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));