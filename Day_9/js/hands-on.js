// —— Task 1 — reference solution ——
const item = "Laptop";
const price = 60000;
const tax = 0.18;

const sentence = `The ${item} costs ₹${price} + ₹${(price * tax).toFixed(2)} GST = ₹${(price * (1 + tax)).toFixed(2)}.`;

const multiline2 = `
Item: ${item}
Price: ₹${price}
GST: ₹${(price * tax).toFixed(2)}
Total: ₹${(price * (1 + tax)).toFixed(2)}
`;

const lines1 = [];

console.log(sentence);
console.log(multiline2);

lines1.push(sentence);

lines1.push("");
lines1.push("Multiline version:");
lines1.push(multiline2);

document.querySelector("#task1Output").textContent = lines1.join("\n");


// —— Task 2 — reference solution ——
const scores = [88, 75, 92, 60, 45];

const [top1, second1, ...rest] = scores;

const user = {
    name1: "Anaya",
    age: 21,
    address: {
        city: "Jaipur",
        pincode: "302001"
    }
};

const {
    name1,
    age: userAge,
    address: { city }
} = user;

const lines2 = [];

console.log(top1, second1, rest);
console.log(name1, userAge, city);

lines2.push("Top score → " + top1);
lines2.push("Second score → " + second1);
lines2.push("Remaining scores → " + rest.join(", "));

lines2.push("");
lines2.push("Name → " + name1);
lines2.push("Age → " + userAge);
lines2.push("City → " + city);

document.querySelector("#task2Output").textContent = lines2.join("\n");


// —— Task 3 — reference solution ——
function sumAll(...numbers) {
    return numbers.reduce((a, n) => a + n, 0);
}

function joinNames(separator, ...names) {
    return names.join(separator);
}

const lines3 = [];

console.log(sumAll(1, 2, 3));
console.log(sumAll(10, 20, 30, 40));
console.log(sumAll());

console.log(joinNames(", ", "Priya", "Aarav", "Riya"));

lines3.push("sumAll(1, 2, 3) → " + sumAll(1, 2, 3));
lines3.push("sumAll(10, 20, 30, 40) → " + sumAll(10, 20, 30, 40));
lines3.push("sumAll() → " + sumAll());

lines3.push("");
lines3.push('joinNames(", ", "Priya", "Aarav", "Riya")');
lines3.push("→ " + joinNames(", ", "Priya", "Aarav", "Riya"));

document.querySelector("#task3Output").textContent = lines3.join("\n");


// —— Task 4 — reference solution ——
const defaults = {
    theme: "light",
    lang: "en",
    notifications: true
};

const userPrefs = {
    theme: "dark",
    fontSize: 16
};

const override = { ...defaults, ...userPrefs };

function applyPrefs(defaults, userPrefs) {
    return { ...defaults, ...userPrefs };
}

const lines4 = [];

console.log(override);
console.log(applyPrefs(defaults, userPrefs));

lines4.push("Merged settings:");
lines4.push(JSON.stringify(override, null, 2));

lines4.push("");
lines4.push("applyPrefs result:");
lines4.push(JSON.stringify(applyPrefs(defaults, userPrefs), null, 2));

document.querySelector("#task4Output").textContent = lines4.join("\n");