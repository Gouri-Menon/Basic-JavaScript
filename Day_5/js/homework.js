// —— Task 1 — reference solution ——
const lines1 = [];

for (let i = 1; i <= 50; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
        lines1.push("FizzBuzz");
    }

    else if (i % 3 === 0) {
        console.log("Fizz");
        lines1.push("Fizz");
    }

    else if (i % 5 === 0) {
        console.log("Buzz");
        lines1.push("Buzz");
    }

    else {
        console.log(i);
        lines1.push(i);
    }
}

document.querySelector("#task1Output").textContent = lines1.join("\n");


// —— Task 2 — reference solution ——
const lines2 = [];

let n = 1;

while (n * n <= 1000) {
    n++;
}

console.log(`The value of n: ${n}`);

lines2.push(`Smallest n where n * n > 1000 = ${n}`);
lines2.push(`${n} * ${n} = ${n * n}`);

document.querySelector("#task2Output").textContent = lines2.join("\n");


// —— Task 3 — reference solution ——
const lines3 = [];

let star = "*";

for (star = "*"; star.length <= 5; star = star + "*") {

    console.log(star);

    lines3.push(star);
}

document.querySelector("#task3Output").textContent = lines3.join("\n");


// —— Task 4 — reference solution ——
const lines4 = [];

const scores = [88, 72, 95, 60, 41];

let max = 0;

for (const i of scores) {

    if (i > max) {
        max = i;
    }
}

console.log(max);

lines4.push("Scores: " + scores.join(", "));
lines4.push("Highest score = " + max);

document.querySelector("#task4Output").textContent = lines4.join("\n");