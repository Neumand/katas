/*


Create a function named camelCase that will convert a string to camel case, and return the result.

*/

let camelCase = function(input) {
  let camelText = input.charAt(0);
  for (var i = 0; i < input.length; i++) {
    if (input.charAt(i) === ' ') {
      camelText += input.charAt(i + 1).toUpperCase();
    } else if (input.charAt(i) !== ' ' && input.charAt(i - 1) !== input.charAt(i - 1).toUpperCase()) {
      camelText += input.charAt(i);
    }
  }
  return camelText;
}

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));