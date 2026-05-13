// —— Task 1 — reference solution ——
const name = "gouri";
const college = "Sree buddha";
const favSub = "maths";
const build = "game";

const lines1 = [];

console.log(name, college, favSub, build);

lines1.push("Name → " + name);
lines1.push("College → " + college);
lines1.push("Favorite Subject → " + favSub);
lines1.push("Favorite Build → " + build);

document.querySelector("#task1Output").textContent = lines1.join("\n");


// —— Task 2 — reference solution ——
let currentMood = "focused";

const lines2 = [];

console.log(currentMood);
lines2.push("Before reassignment → " + currentMood);

currentMood = "curious";

console.log(currentMood);
lines2.push("After reassignment → " + currentMood);

document.querySelector("#task2Output").textContent = lines2.join("\n");


// —— Task 3 — reference solution ——

// Hero of the story
const heroName = "Laila";

// Villain of the story who is a classmate of Laila
const villainName = "Rasheed";

// Place where the story occurs
const place = "Afghanistan";

// Laila planted a mango seed and waters it every day
const tree = "mango";

// After 30 days the seed starts to sprout
const days = 30;

const lines3 = [];

lines3.push("Hero → " + heroName);
lines3.push("Villain → " + villainName);
lines3.push("Place → " + place);
lines3.push("Tree → " + tree);
lines3.push("Days passed → " + days);

document.querySelector("#task3Output").textContent = lines3.join("\n");