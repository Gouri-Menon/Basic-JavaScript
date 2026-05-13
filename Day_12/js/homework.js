// —— Task 1 — reference solution ——
function safeDivide(a, b) {

    if (b === 0) {

        throw new Error("Cannot divide by zero");
    }

    return a / b;
}

const lines1 = [];

try {

    const result1 = safeDivide(10, 2);

    console.log(result1);

    lines1.push("safeDivide(10, 2) → " + result1);

} catch (err) {

    lines1.push(err.message);
}

try {

    const result2 = safeDivide(20, 4);

    console.log(result2);

    lines1.push("safeDivide(20, 4) → " + result2);

} catch (err) {

    lines1.push(err.message);
}

try {

    safeDivide(5, 0);

} catch (err) {

    console.log("Caught:", err.message);

    lines1.push("safeDivide(5, 0) → " + err.message);
}

document.querySelector("#task1Output").textContent =
    lines1.join("\n");


// —— Task 2 — reference solution ——
class NotFoundError extends Error {

    constructor(message) {

        super(message);

        this.name = "NotFoundError";
    }
}

function getUserById(id) {

    const validIds = [1, 2, 3];

    if (!validIds.includes(id)) {

        throw new NotFoundError("User not found");
    }

    return `User ${id} found`;
}

const lines2 = [];

try {

    const user1 = getUserById(2);

    console.log(user1);

    lines2.push("getUserById(2) → " + user1);

} catch (err) {

    lines2.push(err.message);
}

try {

    getUserById(10);

} catch (err) {

    if (err instanceof NotFoundError) {

        console.log("Custom error:", err.message);

        lines2.push("getUserById(10) → " + err.message);

    } else {

        lines2.push("Unknown error");
    }
}

document.querySelector("#task2Output").textContent =
    lines2.join("\n");


// —— Task 3 — reference solution ——
const lines3 = [];

lines3.push("calc.js");
lines3.push("----------------");

lines3.push('export const add = (a, b) => a + b;');
lines3.push('export const subtract = (a, b) => a - b;');
lines3.push('export const multiply = (a, b) => a * b;');
lines3.push('export const divide = (a, b) => a / b;');

lines3.push("");

lines3.push("export default function calculate(op, a, b) {");
lines3.push('    switch(op) {');
lines3.push('        case "+": return add(a, b);');
lines3.push('        case "-": return subtract(a, b);');
lines3.push('        case "*": return multiply(a, b);');
lines3.push('        case "/": return divide(a, b);');
lines3.push('        default: return "Invalid operator";');
lines3.push("    }");
lines3.push("}");

lines3.push("");
lines3.push("app.js");
lines3.push("----------------");

lines3.push('import calculate, {');
lines3.push('    add,');
lines3.push('    subtract,');
lines3.push('    multiply,');
lines3.push('    divide');
lines3.push('} from "./calc.js";');

lines3.push("");

lines3.push('console.log(add(10, 5));');
lines3.push('console.log(subtract(10, 5));');
lines3.push('console.log(multiply(10, 5));');
lines3.push('console.log(divide(10, 5));');
lines3.push('console.log(calculate("+", 7, 3));');

lines3.push("");
lines3.push("HTML");
lines3.push("----------------");

lines3.push('<script type="module" src="app.js"></script>');

lines3.push("");
lines3.push("Reading");
lines3.push("----------------");
lines3.push("javascript.info/try-catch");
lines3.push("javascript.info/modules-intro");
lines3.push("Bonus: javascript.info/var");

document.querySelector("#task3Output").textContent =
    lines3.join("\n");