// —— Task 1 — reference solution ——
const firstName = "gouri";
const age = 24;
const isApproved = true;
const number = null;
let city;

const lines1 = [];

console.log(firstName, typeof firstName);
lines1.push(`firstName → ${firstName} | type → ${typeof firstName}`);

console.log(age, typeof age);
lines1.push(`age → ${age} | type → ${typeof age}`);

console.log(isApproved, typeof isApproved);
lines1.push(`isApproved → ${isApproved} | type → ${typeof isApproved}`);

console.log(number, typeof number);
lines1.push(`number → ${number} | type → ${typeof number}`);

console.log(city, typeof city);
lines1.push(`city → ${city} | type → ${typeof city}`);

document.querySelector("#task1Output").textContent = lines1.join("\n");


// —— Task 2 — reference solution ——
const lines2 = [];

console.log("10" + 5); // 105
lines2.push('"10" + 5 → ' + ("10" + 5));

console.log("10" - 5); // 5
lines2.push('"10" - 5 → ' + ("10" - 5));

console.log(true + true); // 2
lines2.push("true + true → " + (true + true));

console.log("" + false); // false
lines2.push('"" + false → ' + ("" + false));

console.log(null + 1); // 1
lines2.push("null + 1 → " + (null + 1));

document.querySelector("#task2Output").textContent = lines2.join("\n");


// —— Task 3 — reference solution ——
const myName = "    Gouri menon   ";

const lines3 = [];

console.log(myName.trim());
lines3.push("Trimmed name → " + myName.trim());

console.log(myName.trim().toUpperCase());
lines3.push("Uppercase → " + myName.trim().toUpperCase());

console.log(myName.trim().length);
lines3.push("Character count → " + myName.trim().length);

console.log(myName.includes("gouri"));
lines3.push('Includes "gouri" → ' + myName.includes("gouri"));

console.log(myName.trim().slice(0, 5));
lines3.push("First name using slice() → " + myName.trim().slice(0, 5));

document.querySelector("#task3Output").textContent = lines3.join("\n");