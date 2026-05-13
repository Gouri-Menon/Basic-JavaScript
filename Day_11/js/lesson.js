// —— Task 1 — reference solution ——
const btn = document.querySelector("#my-btn");

const lines1 = [];

btn.addEventListener("click", () => {

    console.log("Button clicked!");

    lines1.push("Button clicked!");

    document.querySelector("#task1Output").textContent =
        lines1.join("\n");
});

btn.addEventListener("click", () => {

    console.log("Second handler also fires");

    lines1.push("Second handler also fires");

    document.querySelector("#task1Output").textContent =
        lines1.join("\n");
});

btn.addEventListener("click", (e) => {

    console.log(e.type);
    console.log(e.target);
    console.log(e.target.textContent);
    console.log(e.clientX, e.clientY);

    lines1.push(`Event type → ${e.type}`);
    lines1.push(`Button text → ${e.target.textContent}`);
    lines1.push(`Mouse position → ${e.clientX}, ${e.clientY}`);
    lines1.push("");

    document.querySelector("#task1Output").textContent =
        lines1.join("\n");
});


// —— Task 2 — reference solution ——
const input = document.querySelector("#name-input");

const lines2 = [];

input.addEventListener("input", (e) => {

    console.log("User typed:", e.target.value);

    lines2.push(`User typed → ${e.target.value}`);

    document.querySelector("#task2Output").textContent =
        lines2.join("\n");
});


// —— Task 3 — reference solution ——
const lines3 = [];

document.addEventListener("keydown", (e) => {

    console.log("Pressed:", e.key);

    lines3.push(`Pressed key → ${e.key}`);

    document.querySelector("#task3Output").textContent =
        lines3.join("\n");
});


// —— Task 4 — reference solution ——
const lines4 = [];

document.querySelectorAll("#todo-list li").forEach(li => {

    li.addEventListener("click", () => {

        li.classList.toggle("done");

        console.log(`${li.textContent} toggled`);

        lines4.push(`${li.textContent} → done class toggled`);

        document.querySelector("#task4Output").textContent =
            lines4.join("\n");
    });
});