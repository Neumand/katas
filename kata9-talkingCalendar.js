let talkingCalendar = function(date) {
  var date = date.split('/');
  var year = parseInt(date[0]);
  var month = parseInt(date[1]);
  var day = parseInt(date[2]);
  var dayString = day.toString();


  if (dayString[dayString.length - 1] === "1" && dayString !== "11") {
    dayString += "st";
  } else if (dayString[dayString.length - 1] === "2") {
    dayString += "nd";
  } else if (dayString[dayString.length - 1] === "3") {
    dayString += "rd";
  } else {
    dayString += "th";
  }

  var monthStrArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var monthStr = monthStrArr[month - 1];

  return monthStr + " " + dayString + ", " + year;
}


console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));