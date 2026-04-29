/*Task 3 String Toolbox

· Create a const called fullName and assign your full name with extra spaces around it — e.g. ' Aarav

Sharma '

· Using string methods, log: (1) the name trimmed, (2) in ALL CAPS, (3) the number of characters after

trimming, (4) whether it includes your first name.

· Bonus: Use .slice() to extract just your first name from the trimmed string.
 */

const myName = "    Gouri menon   ";
console.log(myName.trim().toUpperCase().length);
console.log(myName.includes("gouri"));