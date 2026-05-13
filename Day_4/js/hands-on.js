// —— Task 1 — reference solution ——
const marks = 105;

const lines1 = [];

if (marks > 100 || marks < 0) {
    console.log("Invalid marks");
    lines1.push("Marks: " + marks);
    lines1.push("Result: Invalid marks");
} else if (marks >= 90) {
    console.log("Grade A");
    lines1.push("Marks: " + marks);
    lines1.push("Grade: A");
} else if (marks >= 75) {
    console.log("Grade B");
    lines1.push("Marks: " + marks);
    lines1.push("Grade: B");
} else if (marks >= 60) {
    console.log("Grade C");
    lines1.push("Marks: " + marks);
    lines1.push("Grade: C");
} else {
    console.log("Grade F");
    lines1.push("Marks: " + marks);
    lines1.push("Grade: F");
}

document.querySelector("#task1Output").textContent = lines1.join("\n");


// —— Task 2 — reference solution ——
const day = "holiday";

const lines2 = [];

switch (day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        console.log("Weekday");
        lines2.push("Day: " + day);
        lines2.push("Type: Weekday");
        break;

    case "Saturday":
    case "Sunday":
        console.log("Weekend");
        lines2.push("Day: " + day);
        lines2.push("Type: Weekend");
        break;

    default:
        console.log("Invalid day");
        lines2.push("Day: " + day);
        lines2.push("Type: Invalid day");
}

document.querySelector("#task2Output").textContent = lines2.join("\n");


// —— Task 3 — reference solution ——
const lines3 = [];

if (0) {
    console.log("0 is truthy");
    lines3.push("0 → truthy");
} else {
    console.log("0 is falsy");
    lines3.push("0 → falsy");
}

if ("0") {
    console.log('"0" is truthy');
    lines3.push('"0" → truthy');
} else {
    console.log('"0" is falsy');
    lines3.push('"0" → falsy');
}

if ("") {
    console.log('"" is truthy');
    lines3.push('"" → truthy');
} else {
    console.log('"" is falsy');
    lines3.push('"" → falsy');
}

if (" ") {
    console.log('" " is truthy');
    lines3.push('" " → truthy');
} else {
    console.log('" " is falsy');
    lines3.push('" " → falsy');
}

if (null) {
    console.log("null is truthy");
    lines3.push("null → truthy");
} else {
    console.log("null is falsy");
    lines3.push("null → falsy");
}

if (undefined) {
    console.log("undefined is truthy");
    lines3.push("undefined → truthy");
} else {
    console.log("undefined is falsy");
    lines3.push("undefined → falsy");
}

if (NaN) {
    console.log("NaN is truthy");
    lines3.push("NaN → truthy");
} else {
    console.log("NaN is falsy");
    lines3.push("NaN → falsy");
}

if ([]) {
    console.log("[] is truthy");
    lines3.push("[] → truthy");
} else {
    console.log("[] is falsy");
    lines3.push("[] → falsy");
}

if ({}) {
    console.log("{} is truthy");
    lines3.push("{} → truthy");
} else {
    console.log("{} is falsy");
    lines3.push("{} → falsy");
}

if ("false") {
    console.log('"false" is truthy');
    lines3.push('"false" → truthy');
} else {
    console.log('"false" is falsy');
    lines3.push('"false" → falsy');
}

if (false) {
    console.log("false is truthy");
    lines3.push("false → truthy");
} else {
    console.log("false is falsy");
    lines3.push("false → falsy");
}

lines3.push("");
lines3.push("Falsy values:");
lines3.push("false, 0, '', NaN, undefined, null");

document.querySelector("#task3Output").textContent = lines3.join("\n");


// —— Task 4 — reference solution ——
const lines4 = [];

// Refactored with guard clauses
function canComment(user) {

    if (!user) {
        console.log("No user");
        lines4.push("User: null → No user");
        return;
    }

    if (user.isBanned) {
        console.log("Banned");
        lines4.push("User banned → Banned");
        return;
    }

    if (user.age < 13) {
        console.log("Underage");
        lines4.push("User age " + user.age + " → Underage");
        return;
    }

    console.log("Comment allowed");
    lines4.push("User age " + user.age + " → Comment allowed");
}

canComment({ isBanned: true, age: 20 });
canComment({ isBanned: false, age: 20 });
canComment(null);

document.querySelector("#task4Output").textContent = lines4.join("\n");