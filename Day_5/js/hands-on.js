// —— Task 1 — reference solution ——
const lines1 = [];

for (let i = 1; i <= 10; i++) {
    const result = `7 x ${i} = ${7 * i}`;

    console.log(result);
    lines1.push(result);
}

lines1.push("");
lines1.push("Even multiples of 7:");

for (let i = 2; i <= 10; i += 2) {
    const evenResult = `7 x ${i} = ${7 * i}`;

    console.log(evenResult);
    lines1.push(evenResult);
}

document.querySelector("#task1Output").textContent = lines1.join("\n");


// —— Task 2 — reference solution ——
const lines2 = [];

let sum = 0;
let i = 1;

while (i <= 100) {

    if (i % 2 !== 0) {
        sum = sum + i;
    }

    i++;
}

console.log(`Sum of odd numbers from 1 to 100 is ${sum}`);

lines2.push(`Sum of odd numbers from 1 to 100 = ${sum}`);

document.querySelector("#task2Output").textContent = lines2.join("\n");


// —— Task 3 — reference solution ——
const lines3 = [];

const names = ["Priya", "Aarav", "Riya", "Kabir", "Anaya"];

lines3.push("Names:");

for (const n of names) {
    console.log(n);
    lines3.push(n);
}

lines3.push("");
lines3.push("Names longer than 4 characters:");

let longNameCount = 0;

for (const p of names) {

    if (p.length > 4) {
        console.log(`${p} : ${p.length}`);

        lines3.push(`${p} : ${p.length}`);
        longNameCount++;
    }
}

lines3.push("");
lines3.push(`Count = ${longNameCount}`);

lines3.push("");
lines3.push('Characters in "jaipur":');

const bonus = "jaipur";

for (const ch of bonus) {
    console.log(ch);
    lines3.push(ch);
}

document.querySelector("#task3Output").textContent = lines3.join("\n");


// —— Task 4 — reference solution ——
const lines4 = [];

let count = 0;

const student = {
    name: "Anaya",
    age: 21,
    city: "Jaipur",
    course: "B.Tech"
};

for (const key in student) {

    console.log(`${key} : ${student[key]}`);

    lines4.push(`${key} : ${student[key]}`);

    count++;
}

console.log(count);

lines4.push("");
lines4.push(`Total properties = ${count}`);

document.querySelector("#task4Output").textContent = lines4.join("\n");