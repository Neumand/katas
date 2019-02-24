/*

Create a function named urlEncode that will receive a string of words, and return that string with all of the whitespace characters converted to %20. If there is whitespace on the outside of the string, just the whitespace.

Use some sort of looping. Do Not use String.prototype.replace

*/

const urlEncode = function(text) {
  let newText = '';
  for (var i = 0; i < text.length; i++) {
    if (text[i] !== ' ' || text[i] === text[0] || text[i] === text[text.length - 1]) {
      newText += text[i];
    } else {
      newText += '%20';
    }
  }
  return newText.trim();
}

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));