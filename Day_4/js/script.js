const score = 30;
if(score > 50){
    console.log("pass");
}

const mark = 85;

if(mark>=90){
    console.log("Your grade is: A");
}else if(mark>=75){
    console.log("Your grade is:B");
}else if(mark>=60){
    console.log("Your grade is:C");
}else{
    console.log("Your grade is:F");
}

/*Task 1 Grading System
Declare a const marks = 72;.
Use if / else if / else to log a grade based on these ranges:
90+ → "A", 75–89 → "B", 60–74 → "C", below 60 → "F".
Test by changing marks to 95, 50, and 75 — confirm each prints the right grade.
Bonus: add a check at the top — if marks is negative or above 100, log "Invalid marks" and stop.
*/

const marks = 105;
if(marks > 100 || marks < 0){
    console.log("Invalid marks");
}
else if(marks >= 90){
    console.log("Grade A");
}
else if(marks >= 75 && marks <= 89){
    console.log("Grade B");
}
else if(marks >= 60 && marks <= 74){
    console.log("Grade C");
}else {
    console.log("Grade F")
}

/*Task 2 Day Type with switch
Declare const day = "Wednesday";.
Write a switch statement that logs:
"Weekday" for Monday–Friday
"Weekend" for Saturday and Sunday
"Invalid day" for anything else
Use intentional fall-through to group the weekday cases — don't repeat code.
Test with: "Monday", "Saturday", "Holiday".*/

const day = "holiday";
switch(day){

    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday": console.log("Weekday");
    break;
    case "Saturday":
    case "Sunday": console.log("Weekend");
    break;
    default: console.log("Invalid day");

}

/*Task 3 Truthy / Falsy Detective
Predict whether each value is truthy or falsy, write your guess as a comment, then verify with if (value) { ... } else { ... }:
0, "0", "", " " (single space), null, undefined, NaN, [], {}, "false"
Below your code, write a short comment listing the 6 falsy values from memory.*/

if (0) {
  console.log("0 is truthy");
} else {
  console.log("0 is falsy");
}

if ("0") {
  console.log('"0" is truthy');
} else {
  console.log('"0" is falsy');
}

if ("") {
  console.log('"" is truthy');
} else {
  console.log('"" is falsy');
}

if (" ") {
  console.log('" " is truthy');
} else {
  console.log('" " is falsy');
}

if (null) {
  console.log("null is truthy");
} else {
  console.log("null is falsy");
}

if (undefined) {
  console.log("undefined is truthy");
} else {
  console.log("undefined is falsy");
}

if (NaN) {
  console.log("NaN is truthy");
} else {
  console.log("NaN is falsy");
}

if ([]) {
  console.log("[] is truthy");
} else {
  console.log("[] is falsy");
}

if ({}) {
  console.log("{} is truthy");
} else {
  console.log("{} is falsy");
}

if ("false") {
  console.log('"false" is truthy');
} else {
  console.log('"false" is falsy');
}
if(false){
    console.log("false is truthy");
}else{
    console.log("false is falsy");
}

/*Falsy values are:
1. false
2. 0
3. ""
4. NaN
5.undefined
6. null*/


/*Bonus Guard Clauses Refactor
Copy the nested function below into your file. It logs whether a user can post a comment.
Refactor it using guard clauses — flip each condition and return early.
Test with: a valid user, a user with isBanned = true, and null.*/
// Nested version — refactor this:
function canComment(user) {
  if (user) {
    if (!user.isBanned) {
      if (user.age >= 13) {
        console.log("Comment allowed");
      }
    }
  }
}

//refactored with Guard clauses
function canComment(user){
    if(!user) return;
    if(user.isBanned) return console.log("Banned");
    if(user.age < 13) return console.log("Underage");

    console.log("Comment allowed");
}
canComment({isBanned:true, age:20});
canComment({isBanned:null, age:20});



