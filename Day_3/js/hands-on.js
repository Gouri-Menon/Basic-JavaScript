// —— Task 1 — reference solution ——
const age = 18;
const hasLicense = false;
const hasCar = true;

const lines1 = [];

if (age >= 18 && hasLicense) {
    console.log("Can drive");
    lines1.push("Age: " + age);
    lines1.push("Has License: " + hasLicense);
    lines1.push("Result with && : Can drive");
} else {
    console.log("Cannot drive");
    lines1.push("Age: " + age);
    lines1.push("Has License: " + hasLicense);
    lines1.push("Result with && : Cannot drive");
}

if (hasLicense || hasCar) {
    console.log("Can drive");
    lines1.push("");
    lines1.push("Has License: " + hasLicense);
    lines1.push("Has Car: " + hasCar);
    lines1.push("Result with || : Can drive");
} else {
    console.log("Cannot drive");
    lines1.push("");
    lines1.push("Has License: " + hasLicense);
    lines1.push("Has Car: " + hasCar);
    lines1.push("Result with || : Cannot drive");
}

document.querySelector("#task1Output").textContent = lines1.join("\n");


// —— Task 2 — reference solution ——
const a = 17;
const b = 5;

const lines2 = [];

console.log(a + b);
lines2.push(`${a} + ${b} = ${a + b}`);

console.log(a - b);
lines2.push(`${a} - ${b} = ${a - b}`);

console.log(a * b);
lines2.push(`${a} * ${b} = ${a * b}`);

console.log(a / b);
lines2.push(`${a} / ${b} = ${a / b}`);

console.log(a % b);
lines2.push(`${a} % ${b} = ${a % b}`);

console.log(a ** b);
lines2.push(`${a} ** ${b} = ${a ** b}`);

const x = 42;

if (x % 2 == 0) {
    console.log("even");
    lines2.push("");
    lines2.push(x + " is even");
} else {
    console.log("odd");
    lines2.push("");
    lines2.push(x + " is odd");
}

document.querySelector("#task2Output").textContent = lines2.join("\n");


// —— Task 3 — reference solution ——
const lines3 = [];

console.log(5 == "5");
lines3.push('5 == "5" → ' + (5 == "5"));

console.log(5 === "5");
lines3.push('5 === "5" → ' + (5 === "5"));

console.log(0 == false);
lines3.push("0 == false → " + (0 == false));

console.log(0 === false);
lines3.push("0 === false → " + (0 === false));

console.log(null == undefined);
lines3.push("null == undefined → " + (null == undefined));

console.log(null === undefined);
lines3.push("null === undefined → " + (null === undefined));

document.querySelector("#task3Output").textContent = lines3.join("\n");


// —— Task 4 — reference solution ——
const age2 = 20;

const lines4 = [];

const mood = age2 >= 18 ? "adult" : "minor";

console.log(mood);
lines4.push("Age: " + age2);
lines4.push("Mood: " + mood);

const username = null;

const display = username ?? "guest";
console.log(display);

lines4.push("");
lines4.push("Using ?? operator:");
lines4.push("Display name: " + display);

const display2 = username || "guest";
console.log(display2);

lines4.push("");
lines4.push("Using || operator:");
lines4.push("Display name: " + display2);

document.querySelector("#task4Output").textContent = lines4.join("\n");