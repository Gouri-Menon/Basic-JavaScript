// —— Task 1 — reference solution ——
const title = document.querySelector("#title");

title.textContent = "Hello, Gouri!";
title.style.color = "crimson";
title.style.fontFamily = "Georgia, serif";

const lines1 = [];

lines1.push('title.textContent → "Hello, Gouri!"');
lines1.push('title.style.color → "crimson"');
lines1.push('title.style.fontFamily → "Georgia, serif"');

console.log(title.textContent);

document.querySelector("#task1Output").textContent = lines1.join("\n");


// —— Task 2 — reference solution ——
const theme = document.querySelector("#theme-btn");

document.body.classList.toggle("dark");

const firstToggle = document.body.classList.contains("dark");

document.body.classList.toggle("dark");

const secondToggle = document.body.classList.contains("dark");

console.log(firstToggle);
console.log(secondToggle);

const lines2 = [];

lines2.push("After first toggle → dark class present: " + firstToggle);
lines2.push("After second toggle → dark class present: " + secondToggle);

document.querySelector("#task2Output").textContent = lines2.join("\n");