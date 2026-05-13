// —— Task 1 — reference solution ——
function safeParse(str) {

    try {

        return JSON.parse(str);

    } catch (err) {

        console.log("Invalid JSON:", err.message);

        return null;
    }
}

const lines1 = [];

const validJson = safeParse('{"name":"Priya"}');
const invalidJson = safeParse('{"name":"Priya"');

console.log(validJson);
console.log(invalidJson);

lines1.push('safeParse(\'{"name":"Priya"}\')');
lines1.push("→ " + JSON.stringify(validJson));

lines1.push("");

lines1.push('safeParse(\'{"name":"Priya"\')');
lines1.push("→ null");

document.querySelector("#task1Output").textContent =
    lines1.join("\n");


// —— Task 2 — reference solution ——
function setAge(age) {

    if (typeof age !== "number") {

        throw new Error("Age must be a number");
    }

    if (age < 0 || age > 120) {

        throw new Error("Age must be 0–120");
    }

    return age;
}

const lines2 = [];

try {

    const age1 = setAge(25);

    console.log(age1);

    lines2.push("setAge(25) → " + age1);

} catch (err) {

    lines2.push(err.message);
}

try {

    setAge("twenty");

} catch (err) {

    console.log(err.message);

    lines2.push('setAge("twenty") → ' + err.message);
}

try {

    setAge(200);

} catch (err) {

    console.log(err.message);

    lines2.push("setAge(200) → " + err.message);
}

document.querySelector("#task2Output").textContent =
    lines2.join("\n");


// —— Task 3 — reference solution ——
class ValidationError extends Error {

    constructor(message) {

        super(message);

        this.name = "ValidationError";
    }
}

function validateEmail(email) {

    if (!email.includes("@")) {

        throw new ValidationError("Email must include @");
    }

    return "Valid email";
}

const lines3 = [];

try {

    const result1 = validateEmail("priya@example.com");

    console.log(result1);

    lines3.push('validateEmail("priya@example.com")');
    lines3.push("→ " + result1);

} catch (err) {

    lines3.push(err.message);
}

lines3.push("");

try {

    validateEmail("priya-no-at");

} catch (err) {

    if (err instanceof ValidationError) {

        console.log("Validation error:", err.message);

        lines3.push('validateEmail("priya-no-at")');
        lines3.push("→ ValidationError: " + err.message);
    }
}

document.querySelector("#task3Output").textContent =
    lines3.join("\n");


// —— Bonus Task — reference solution ——
const lines4 = [];

lines4.push("mathUtils.js");
lines4.push("----------------");
lines4.push('export const PI = 3.14159;');
lines4.push('export const add = (a, b) => a + b;');
lines4.push('export const multiply = (a, b) => a * b;');

lines4.push("");
lines4.push('export default function formatPrice(n) {');
lines4.push('    return `₹${n}`;');
lines4.push('}');

lines4.push("");
lines4.push("app.js");
lines4.push("----------------");
lines4.push('import formatPrice, { PI, add, multiply } from "./mathUtils.js";');

lines4.push("");
lines4.push('console.log(PI);');
lines4.push('console.log(add(2, 3));');
lines4.push('console.log(multiply(4, 5));');
lines4.push('console.log(formatPrice(500));');

lines4.push("");
lines4.push('HTML Script Tag');
lines4.push('----------------');
lines4.push('<script type="module" src="app.js"></script>');

document.querySelector("#task4Output").textContent =
    lines4.join("\n");