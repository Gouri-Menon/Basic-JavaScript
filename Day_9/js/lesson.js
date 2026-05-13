// —— Task 1 — reference solution ——
const name = "priya";
const age = 24;

const msg1 = "Hi " + name + "! I'm " + age + " years old.";
console.log(msg1);

const msg2 = `Hi ${name}! I'm ${age} years old.`;
console.log(msg2);

const multiline = `Hi my name is
Gouri and
I'm 24 years old`;

console.log(multiline);

const total = 1500;

const print = `Total ${total >= 1000 ? "qualifies" : "doesn't qualify"} for free shipping`;

console.log(print);

const taxed = `Final price = ${(1000 * 1.18).toFixed(2)}`;

console.log(taxed);

const lines1 = [];

lines1.push(msg1);
lines1.push(msg2);

lines1.push("");
lines1.push("Multiline string:");
lines1.push(multiline);

lines1.push("");
lines1.push(print);
lines1.push(taxed);

document.querySelector("#task1Output").textContent = lines1.join("\n");


// —— Task 2 — reference solution ——
const colors = ["red", "green", "blue"];

const [first, second, third] = colors;

console.log(first, second, third);

const [, , last] = colors;

console.log(last);

const [a, b, c, d = "yellow"] = colors;

console.log(d);

let x = 1,
    y = 2;

[x, y] = [y, x];

console.log(`x is ${x}`);
console.log(`y is ${y}`);

const nums = [1, 2, 3, 4, 5];

const [head, ...tail] = nums;

console.log(head);
console.log(tail);

const lines2 = [];

lines2.push(`First → ${first}`);
lines2.push(`Second → ${second}`);
lines2.push(`Third → ${third}`);

lines2.push("");
lines2.push(`Last → ${last}`);

lines2.push("");
lines2.push(`Default value → ${d}`);

lines2.push("");
lines2.push(`Swapped x → ${x}`);
lines2.push(`Swapped y → ${y}`);

lines2.push("");
lines2.push(`Head → ${head}`);
lines2.push(`Tail → ${tail.join(", ")}`);

document.querySelector("#task2Output").textContent = lines2.join("\n");


// —— Task 3 — reference solution ——
const showInfo = ({ name = "Guest", role = "User" } = {}) =>
    `${role}: ${name}`;

console.log(showInfo());
console.log(showInfo({ role: "admin" }));
console.log(showInfo({ name: "riya" }));

function greet(greeting, ...names) {
    return names.map(n => `${greeting}, ${n}`).join(" | ");
}

console.log(greet("Hi", "Priya", "Arnav"));

const max = (...n) => Math.max(...n);

console.log(max(3, 1, 4, 1, 5, 9, 2, 6));

const lines3 = [];

lines3.push("showInfo() → " + showInfo());
lines3.push('showInfo({ role: "admin" }) → ' + showInfo({ role: "admin" }));
lines3.push('showInfo({ name: "riya" }) → ' + showInfo({ name: "riya" }));

lines3.push("");
lines3.push('greet("Hi", "Priya", "Arnav")');
lines3.push("→ " + greet("Hi", "Priya", "Arnav"));

lines3.push("");
lines3.push("max(3, 1, 4, 1, 5, 9, 2, 6)");
lines3.push("→ " + max(3, 1, 4, 1, 5, 9, 2, 6));

document.querySelector("#task3Output").textContent = lines3.join("\n");


// —— Task 4 — reference solution ——
const fieldName = "email";
const value = "priya@x.in";

const userProp = {
    name: "Priya",
    [fieldName]: value,
    [`is_${fieldName}_verified`]: true
};

console.log(userProp);

const lines4 = [];

lines4.push("Dynamic object properties:");
lines4.push(JSON.stringify(userProp, null, 2));

document.querySelector("#task4Output").textContent = lines4.join("\n");