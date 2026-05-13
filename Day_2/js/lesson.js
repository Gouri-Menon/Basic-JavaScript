// —— Task 1 — reference solution ——
const lines1 = [];

console.log("Hello JavaScript");
lines1.push("Hello JavaScript");

console.log(42);
lines1.push("42");

console.log(3.14);
lines1.push("3.14");

console.log(true);
lines1.push("true");

console.log("Name:Rahul", "Age:25");
lines1.push("Name:Rahul Age:25");

const name = "gouri";

console.log(name);
lines1.push("Name variable → " + name);

document.querySelector("#task1Output").textContent = lines1.join("\n");


// —— Task 2 — reference solution ——
let score = 0;

const lines2 = [];

lines2.push("Initial score → " + score);

score = 10;
lines2.push("After reassignment → " + score);

score = score + 5;

console.log(score);
lines2.push("Final score → " + score);

document.querySelector("#task2Output").textContent = lines2.join("\n");


// —— Task 3 — reference solution ——
let city;

const lines3 = [];

console.log(city);
lines3.push("Initial city value → " + city);

city = "kochi";

console.log(city);
lines3.push("Updated city value → " + city);

document.querySelector("#task3Output").textContent = lines3.join("\n");