let numberOfVowels = function(str) {
  let listOfVowels = ['a','e','i','o','u'];
  let vowelCounter = 0;
  for (var i = 0; i < str.length; i++) {
    if (listOfVowels.includes(str.charAt(i))) {
      vowelCounter ++;
    }
  }
  return vowelCounter;
}

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));