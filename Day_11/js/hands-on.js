// —— Task 1 — reference solution ——
const counterBtn = document.querySelector("#counter-btn");
const span = document.querySelector("#count");

let counter = 0;

const lines1 = [];

counterBtn.addEventListener("click", () => {

    counter++;

    span.textContent = counter;

    console.log(`Button clicked ${counter} times`);

    lines1.push(`Click ${counter} → count = ${counter}`);

    if (counter === 10) {

        counterBtn.textContent = "Stop clicking!";

        counterBtn.disabled = true;

        lines1.push("");
        lines1.push('Button text changed to "Stop clicking!"');
        lines1.push("Button disabled");
    }

    document.querySelector("#task1Output").textContent =
        lines1.join("\n");
});


// —— Task 2 — reference solution ——
const liveInput = document.querySelector("#live-input");
const preview = document.querySelector("#preview");

const lines2 = [];

liveInput.addEventListener("input", (e) => {

    if (e.target.value === "") {

        preview.textContent = "Start typing...";

        console.log("Preview reset");

        lines2.push('Input empty → "Start typing..."');
    }

    else {

        preview.textContent = e.target.value;

        console.log(`Preview: ${e.target.value}`);

        lines2.push(`Preview updated → ${e.target.value}`);
    }

    document.querySelector("#task2Output").textContent =
        lines2.join("\n");
});