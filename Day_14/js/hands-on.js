/*Write a function 
makeCounter() that returns a function.
The returned function, each time it is called, returns the next integer starting from 1.
Create TWO independent counters with 
makeCounter() and verify they don't interfere.
In a comment, explain WHERE the count variable lives between calls.*/

function makeCounter(){
    let count = 0;
    return function(){
        count++;
        return count;

    }
}
const counter1 = makeCounter();
const counter2 = makeCounter();

console.log(counter1());
console.log(counter1());

console.log(counter2());
console.log(counter2());

/*Task 2
 Fix the var-in-Loop Bug
Type this snippet exactly: 
for (var i = 1; i <= 3; i++) { setTimeout(() =>
console.log(i), 100); }
Predict the output. Run it. Note the actual output.
Fix it by changing ONE keyword. Run again, verify it logs 1, 2, 3.*/

for (var i = 1; i <= 3; i++) 
    { setTimeout(() =>
        console.log(i), 100); 
    }

for (let i = 1; i <= 3; i++) 
    { setTimeout(() =>
        console.log(i), 100); 
    }

/*Task 3 Private Bank Balance
Write a function createAccount(initial) that returns an object with three methods:
deposit(amount) , withdraw(amount) , getBalance() , balance must be PRIVATE — not accessible as 
account.balance .
Test with: open an account with 1000, deposit 500, withdraw 200, log the balance.
Verify account.balance is undefined .*/

function createAccount(initial){
    let balance = initial;
    return{
        deposit :  (amount) => balance += amount,
        withdraw : (amount) => balance -= amount,
        getBalance : () => balance,
    };
}

const account = createAccount(1000);
account.deposit(500);
console.log(account.getBalance());
account.withdraw(200);
console.log(account.getBalance());

console.log(account.balance);