// —— Task 1 — reference solution ——
const score = 30;

const lines1 = [];

if (score > 50) {
    console.log("pass");
    lines1.push("Score: " + score);
    lines1.push("Result: pass");
} else {
    console.log("fail");
    lines1.push("Score: " + score);
    lines1.push("Result: fail");
}

document.querySelector("#task1Output").textContent = lines1.join("\n");


// —— Task 2 — reference solution ——
const mark = 85;

const lines2 = [];

if (mark >= 90) {
    console.log("Your grade is: A");
    lines2.push("Mark: " + mark);
    lines2.push("Your grade is: A");
} else if (mark >= 75) {
    console.log("Your grade is: B");
    lines2.push("Mark: " + mark);
    lines2.push("Your grade is: B");
} else if (mark >= 60) {
    console.log("Your grade is: C");
    lines2.push("Mark: " + mark);
    lines2.push("Your grade is: C");
} else {
    console.log("Your grade is: F");
    lines2.push("Mark: " + mark);
    lines2.push("Your grade is: F");
}

document.querySelector("#task2Output").textContent = lines2.join("\n");