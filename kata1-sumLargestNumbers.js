  /*
  Hi Dave,

  This is how I would write it out. Think of it this way: if you know the array is less than size two, 
  why bother sorting it?
  
  Another thing to keep in mind is that a variable can be null. This is more of a object-oriented programming thing, but when testing, 
  you want to take into consideration all possibilities. 

  Instead of just sending back a string, think about "throwing" an error. Look into that more. It provides a safer,
  self-documentating way to write code. Only problem is that throwing will end your program instead of continuing on, so 
  you won't be able to test past that line of code.
  
  I used let instead of var. Not a big deal, just thought it was better practice. 
  
  Some things to consider:
  - what if there are duplicate values
  - what if the array has something else other than numbers, inside (i.e. characters)
  
  All my notes are overkill for where you're at, but I think it's important to expose you to as many different perspectives as possible.

  Great job on naming your variables and your concise, working code!

  Going deeper into the void of compsci:

  Sorting is an inefficient process [O(n log n) at best] when you're looking for a specific number of indices/values.
  another way you could do it is look for the two largest numbers through a loop [O(n) runtime], 
  but for simplicity sake, what you have is perfect. It becomes a problem when you're looking at massive arrays.
  (p.s. n in O(n) is the length of the array)

  Let's say you have an array of 1,000,000 values. If it takes 1 second to process one index
  and one algorithms runtime is O(n log n) and the other is O(n), there's quite a big time difference.
  O(n):       1,000,000s
  O(n log n): 1,301,029s
  
  When we look at an algorithm's efficiency, that's what we look at. You'll be more aware of how efficient certain
  algorithms are in comparison to others when you get into the compsci fundamentals in your bootcamp.
  For a website that will showcase the best, average and worst (we mostly look at worst) case for each algorithm and
  data structure, check out http://bigocheatsheet.com/ - a bit overwhelming, but check out something like bubble sort, 
  go to wikipedia/youtube videos that showcases bubble sort and try and understand what it's doing to be O(n^2).
  */

let sumLargestNumbers = function(array) {
  if (array === null || array.length > 2) throw "The array must include more than two elements."
  let sortedNumbers = array.sort(function(a,b){return b - a}); 
  return sortedNumbers[0] + sortedNumbers[1];
}

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
console.log(sumLargestNumbers([3]));
//won't go past the above line as we "threw" the error which ends the script.
let arr = null
console.log(sumLargestNumbers(arr));
