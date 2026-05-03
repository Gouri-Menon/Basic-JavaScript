/*Task 1 Cart Manipulation
Start with: const cart = ["bread", "milk", "eggs"];
Use push to add "butter". Then use unshift to add "rice" at the start. Log the cart.
Use pop to remove the last item. Log what was removed and the new cart.
Use splice(1, 1) to remove one item starting at index 1. Log the result.*/

const cart = ["bread", "milk", "eggs"];
cart.push("butter");
console.log(cart);

cart.unshift("rice");
console.log(cart);

console.log(cart.pop());
console.log(cart);

cart.splice(1,1);
console.log(cart);

/*Task 2 Filter Passing Scores
Declare: const scores = [88, 42, 75, 60, 91, 39, 55, 70];
Use filter to create a new array of scores that are >= 60 (passing). Log it.
Use find to get the FIRST failing score. Log it.
Use every to check if ALL scores are passing. Log the result.
Bonus: use some to check if ANY score is above 90.*/

const scores = [88, 42, 75, 60, 91, 39, 55, 70];
const passing = scores.filter(scores => scores >= 60);
console.log(passing);

const firstFail = scores.find(s => s<60);
console.log(firstFail);

const ifAllPass = scores.every(s => s>=60);
console.log(ifAllPass);

const ifSome = scores.some(s => s>=90);
console.log(ifSome);


/*Task 3 Map Prices with GST
Declare: const prices = [100, 250, 500, 1200, 80];
Use map to create a new array with 18% GST added to each price.
Log both the original and new array — the original should be unchanged.
Bonus: round each value to 2 decimal places using .toFixed(2).*/

const prices = [100, 250, 500, 1200, 80];
const addedGst = prices.map( p => Number((p * 1.18).toFixed(2)));
console.log(prices);
console.log(addedGst);

/*Bonus Reduce to Total
Declare: const expenses = [250, 800, 120, 50, 1500, 75];
Use reduce to calculate the total of all expenses. Log it.
Then use reduce to find the highest single expense. Log it.
Bonus: combine filter + reduce to total only expenses above 100.*/

const expenses = [250, 800, 120, 50, 1500, 75];
const totalExp = expenses.reduce((a,n) => a+n, 0);
console.log(totalExp);

const highExp = expenses.reduce((a,n) => a > n ? a : n, -Infinity);
console.log(highExp);

const bonusExp = expenses.filter(e => e>100);
console.log(bonusExp);
const result = bonusExp.reduce((a,n) => a+n, 0 );
console.log(result);