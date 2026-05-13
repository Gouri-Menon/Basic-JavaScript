// —— Task 1 — reference solution ——
const colorBtn = document.querySelector("#color-btn");

const lines1 = [];

colorBtn.addEventListener("click", () => {

    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    const randomColor = `rgb(${r}, ${g}, ${b})`;

    document.body.style.backgroundColor = randomColor;

    console.log(randomColor);

    lines1.push(`Background changed → ${randomColor}`);

    document.querySelector("#task1Output").textContent =
        lines1.join("\n");
});


// —— Task 2 — reference solution ——
const username = document.querySelector("#username");

const lines2 = [];

username.addEventListener("input", (e) => {

    const value = e.target.value;

    if (value.length < 3) {

        username.style.borderColor = "red";

        lines2.push(`"${value}" → Too short`);

    } else {

        username.style.borderColor = "green";

        lines2.push(`"${value}" → Valid input`);
    }

    document.querySelector("#task2Output").textContent =
        lines2.join("\n");
});


// —— Task 3 — reference solution ——
const form = document.querySelector("#sum-form");
const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const result = document.querySelector("#sum-result");

const lines3 = [];

form.addEventListener("submit", (e) => {

    e.preventDefault();

    const sum =
        Number(num1.value) + Number(num2.value);

    result.textContent = `Sum = ${sum}`;

    console.log(sum);

    lines3.push(`${num1.value} + ${num2.value} = ${sum}`);

    document.querySelector("#task3Output").textContent =
        lines3.join("\n");
});


// —— Task 4 — reference solution ——
const todoList = document.querySelector("#todo-list");

const lines4 = [];

// Dynamic 6th item
const newItem = document.createElement("li");

newItem.textContent = "Master Events";

todoList.appendChild(newItem);

lines4.push("Added dynamic item → Master Events");

todoList.addEventListener("click", (e) => {

    if (e.target.tagName === "LI") {

        console.log(e.target.textContent);

        lines4.push(`Clicked → ${e.target.textContent}`);

        document.querySelector("#task4Output").textContent =
            lines4.join("\n");
    }
});