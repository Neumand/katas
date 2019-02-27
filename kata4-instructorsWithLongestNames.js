/*

Create a function named instructorWithLongestName that will receive an array of instructor objects, and return the object that has the longest name. If there are two instructors with the longest name, return the first one.

*/

/* 
frankie's thoughts:
Great job! javascript objects (often referred to as 'hashmaps' or 'maps') are super useful for efficiency (we can get to that another day).
You asked: I think there’s a way to not keep track of more than one variable
The answer is yes, there's a way so you only need to keep track of one variable and that is by just keeping the index - shown below.
Is it better than what you have? Not necessarily. I think your way is just as fine. 
Another thing you could've done is instead of holding currentLongestName, hold currentLongestNameLength and store the actual length of the string.
Some testing thoughts:
- Does your algorithm work if: 
  - the name is an empty string ('')?
  - the name is null?
  - the name is a number?
  - the object doesn't have 'name' in it?

No need to test it all as that isn't the point of you doing these algorithms, but just keep it in mind. 
When you're making websites, you can't assume the user is going to act the ideal way. You assume they will try and break it.

Godspeed!
*/

const instructorWithLongestName = function(instructors) {
  let indexPositionOfLongestName = 0;
  for (var i = 0; i < instructors.length; i++) {
    if (instructors[i].name.length > instructors[indexPositionOfLongestName].length) {
      indexPositionOfLongestName = i;
    }
  }
  return instructors[indexPositionOfLongestName];
}

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));
