const organizeInstructors = function (instructors) {
  let instructorsObj = {};
  for (var i = 0; i < instructors.length; i++) {
    let instructorCourse = instructors[i].course;
    if (instructorsObj[instructorCourse]) {
      instructorsObj[instructorCourse].push(instructors[i].name);
    } else {
      instructorsObj[instructorCourse] = [];
      instructorsObj[instructorCourse].push(instructors[i].name);
    }
  }
  return instructorsObj;
}

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));