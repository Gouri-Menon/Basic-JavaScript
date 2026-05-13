function makeCounter() {
    let count = 0;  

    return function () {
        count++;                          
        return count;
    };
}

const c = makeCounter();
// private — cannot be reached from outside
// each call mutates the SAME closed-over count

console.log(c());     
console.log(c());     
console.log(c());     
// 1
// 2
// 3
// console.log(count) // ReferenceError — count is private to the closur



// 2. Private variables — bank account
function createAccount(initial) {
let balance = initial;              
return {
deposit: (amt) => balance += amt,  // PRIVATE — no one outside can touch it
withdraw: (amt) => balance -= amt,
getBalance: () => balance,
};
}
const acc = createAccount(1000);
acc.deposit(500);
console.log(acc.getBalance());   
// acc.balance                   
// 1500
// undefined — truly private


// 3. Memoization — cache expensive results
// function memoize(fn) {
// const cache = {};                   
// return function (n) {
// if (n in cache) return cache[n];  // hit  → return cached
// cache[n] = fn(n);                 
// return cache[n];
// };
// }
// fastSquare(5);   
// Topic 5
// // "computing..."  → 25
//  The var-in-Loop Bug
// // THE BUG — using var
// // closed-over cache, lives across calls
// // miss → compute and store
// const slowSquare = (n) => { console.log("computing..."); return n * n; };
// const fastSquare = memoize(slowSquare);
// fastSquare(5);   // 25 (no log — served from cache)


// Basic IIFE — runs once, creates a private scope
// not visible outside

(function () {
const secret = "hidden";            
console.log("IIFE ran");
})();

(function (city) {
console.log(`Greetings from ${city}`);
})("Jaipur");
// Arrow IIFE (modern)
(() => {
const x = 42;
console.log(x);
})();