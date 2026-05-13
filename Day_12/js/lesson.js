// —— Task 1 — reference solution ——
const lines1 = [];

try {

    const data = JSON.parse('{"name":"Priya"');

    console.log(data);

} catch (err) {

    console.log("Couldn't parse:", err.message);

    lines1.push("JSON parse failed");
    lines1.push("Error message → " + err.message);
}

console.log("App keeps running");

lines1.push("");
lines1.push("App keeps running");

document.querySelector("#task1Output").textContent =
    lines1.join("\n");


// —— Task 2 — reference solution ——
const lines2 = [];

const rawConfig = '{"theme":"dark"}';

function readConfig() {

    try {

        return JSON.parse(rawConfig);

    } catch (err) {

        console.log("Falling back to defaults");

        return { theme: "light" };

    } finally {

        console.log("Config attempt finished");

        lines2.push("Config attempt finished");
    }
}

const config = readConfig();

lines2.push("Theme → " + config.theme);

try {

    null.foo;

} catch (err) {

    console.log(err.message);
    console.log(err.name);

    lines2.push("");
    lines2.push("Error message → " + err.message);
    lines2.push("Error type → " + err.name);
}

try {

    riskyOperation();

} catch (err) {

    if (err.name === "TypeError") {

        lines2.push("");
        lines2.push("Fix the data shape");

    } else if (err.name === "SyntaxError") {

        lines2.push("");
        lines2.push("Fix the input format");

    } else {

        lines2.push("");
        lines2.push("Something else → " + err.message);
    }
}

document.querySelector("#task2Output").textContent =
    lines2.join("\n");


// —— Task 3 — reference solution ——
const lines3 = [];

function divide(a, b) {

    if (typeof a !== "number" || typeof b !== "number") {

        throw new Error("Both arguments must be numbers");
    }

    if (b === 0) {

        throw new Error("Cannot divide by zero");
    }

    return a / b;
}

try {

    const result1 = divide(10, 2);

    console.log(result1);

    lines3.push("divide(10, 2) → " + result1);

    divide(10, 0);

} catch (err) {

    console.log("Caught:", err.message);

    lines3.push("divide(10, 0) → " + err.message);
}


class ValidationError extends Error {

    constructor(message) {

        super(message);

        this.name = "ValidationError";
    }
}

function setEmail(email) {

    if (!email.includes("@")) {

        throw new ValidationError("Invalid email format");
    }

    return email;
}

try {

    setEmail("priya-no-at-sign");

} catch (err) {

    if (err instanceof ValidationError) {

        console.log("Validation failed:", err.message);

        lines3.push("");
        lines3.push("Validation failed → " + err.message);

    } else {

        throw err;
    }
}

document.querySelector("#task3Output").textContent =
    lines3.join("\n");