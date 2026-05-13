// —— Task 1 — reference solution ——
const para = document.querySelector("#message");

const lines1 = [];

para.textContent = "This is the first change to the paragraph.";

lines1.push("Step 1:");
lines1.push(para.textContent);

para.innerHTML = "This para has a <strong>strong</strong> tag now.";

lines1.push("");
lines1.push("Step 2:");
lines1.push('This para has a <strong>strong</strong> tag now.');

para.textContent = "This is the final change to the paragraph.";

lines1.push("");
lines1.push("Step 3:");
lines1.push(para.textContent);

console.log(para.textContent);

document.querySelector("#task1Output").textContent = lines1.join("\n");


// —— Task 2 — reference solution ——
const fruits = document.querySelectorAll("#fruit-list li");

const lines2 = [];

fruits.forEach((fruit, index) => {

    if (index % 2 === 0) {

        fruit.classList.add("even");

        console.log(`${fruit.textContent} → even class added`);

        lines2.push(`${fruit.textContent} → even class added`);
    }

    else {

        lines2.push(`${fruit.textContent} → no class added`);
    }
});

document.querySelector("#task2Output").textContent = lines2.join("\n");