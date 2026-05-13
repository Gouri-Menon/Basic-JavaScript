// —— Task 1 — reference solution ——
const lines1 = [];

// Arithmetic Operators
console.log(10 + 3);
lines1.push("10 + 3 = " + (10 + 3));

console.log(10 * 3);
lines1.push("10 * 3 = " + (10 * 3));

console.log(10 % 3);
lines1.push("10 % 3 = " + (10 % 3));

console.log(10 - 3);
lines1.push("10 - 3 = " + (10 - 3));

console.log(10 / 3);
lines1.push("10 / 3 = " + (10 / 3));

console.log(2 ** 8);
lines1.push("2 ** 8 = " + (2 ** 8));

document.querySelector("#task1Output").textContent = lines1.join("\n");


// —— Task 2 — reference solution ——
const lines2 = [];

// Assignment Operators
let x = 10;

x += 5;
console.log(x);
lines2.push("x += 5  → " + x);

x -= 2;
console.log(x);
lines2.push("x -= 2  → " + x);

x *= 4;
console.log(x);
lines2.push("x *= 4  → " + x);

x /= 5;
console.log(x);
lines2.push("x /= 5  → " + x);

document.querySelector("#task2Output").textContent = lines2.join("\n");


// —— Task 3 — reference solution ——
const lines3 = [];

// Comparison Operators
const comp1 = 5 == "5";
console.log(comp1);
lines3.push('5 == "5" → ' + comp1);

const comp2 = 5 === "5";
console.log(comp2);
lines3.push('5 === "5" → ' + comp2);

const comp3 = 0 == false;
console.log(comp3);
lines3.push("0 == false → " + comp3);

const comp4 = 0 === false;
console.log(comp4);
lines3.push("0 === false → " + comp4);

const comp5 = null == undefined;
console.log(comp5);
lines3.push("null == undefined → " + comp5);

const comp6 = null === undefined;
console.log(comp6);
lines3.push("null === undefined → " + comp6);

document.querySelector("#task3Output").textContent = lines3.join("\n");


// —— Task 4 — reference solution ——
const lines4 = [];

// Logical Operators
const num1 = 1;
const num2 = 2;

console.log(num1 > num2 && num1 < num2);
lines4.push("(1 > 2 && 1 < 2) → " + (num1 > num2 && num1 < num2));

console.log(num1 > num2 || num1 < num2);
lines4.push("(1 > 2 || 1 < 2) → " + (num1 > num2 || num1 < num2));

const boolVal = true;

console.log(!boolVal);
lines4.push("!true → " + (!boolVal));

document.querySelector("#task4Output").textContent = lines4.join("\n");


// —— Task 5 — reference solution ——
const lines5 = [];

// Ternary Operator
const age = 7;

console.log(age <= 18 ? "minor" : "adult");
lines5.push("Age: " + age);
lines5.push("Result: " + (age <= 18 ? "minor" : "adult"));

const mark = 25;

console.log(mark >= 40 ? "passed" : "failed");
lines5.push("");
lines5.push("Mark: " + mark);
lines5.push("Result: " + (mark >= 40 ? "passed" : "failed"));

document.querySelector("#task5Output").textContent = lines5.join("\n");


// —— Task 6 — reference solution ——
const lines6 = [];

// Optional Chaining and Nullish Coalescing
const order = {
    id: 123,
    customer: {
        name: "Alice",
        address: {
            city: "New York"
        }
    }
};

console.log(order?.customer?.address?.city);
lines6.push("City → " + order?.customer?.address?.city);

console.log(order?.customer?.address?.street);
lines6.push("Street → " + order?.customer?.address?.street);

console.log(order?.customer?.phone?.number);
lines6.push("Phone → " + order?.customer?.phone?.number);

const userAge = 0;

const ageToShow = userAge ?? "not provided";
console.log(ageToShow);

lines6.push("");
lines6.push("Using ?? operator → " + ageToShow);

const ageToShowOr = userAge || "not provided";
console.log(ageToShowOr);

lines6.push("Using || operator → " + ageToShowOr);

document.querySelector("#task6Output").textContent = lines6.join("\n");