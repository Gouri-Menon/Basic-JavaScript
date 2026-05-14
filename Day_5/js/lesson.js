// —— Task 1 — reference solution ——
const fruits = ["apple", "banana", "mango"];

const lines1 = [];

for (let i = 0; i < fruits.length; i++) {

    console.log(fruits[i]);

    lines1.push(`Fruit ${i + 1} → ${fruits[i]}`);
}

document.querySelector("#task1Output").textContent = lines1.join("\n");


// —— Task 2 — reference solution ——
const name = "priya";

const lines2 = [];

for (let i = 0; i < name.length; i++) {

    console.log(name[i]);

    lines2.push(`Character ${i} → ${name[i]}`);
}

document.querySelector("#task2Output").textContent = lines2.join("\n");


// —— Task 3 — reference solution ——
const s = {
    name: "Aarav",
    age: 22
};

const lines3 = [];

const keys = Object.keys(s);

for (let i = 0; i < keys.length; i++) {

    console.log(keys[i], ":", s[keys[i]]);

    lines3.push(`${keys[i]} : ${s[keys[i]]}`);
}

document.querySelector("#task3Output").textContent = lines3.join("\n");