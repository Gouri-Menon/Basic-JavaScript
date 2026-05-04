/*Task 1 Build a Student Object
Create an object student with these properties: name = "Anaya", age = 21, city = "Jaipur", course = "B.Tech", marks (an array of 3 numbers).
Log the student. Then log just the name, age, and the FIRST mark using dot notation.
Add a new property email = "anaya@example.com". Update age to 22. Delete city.
Log the student again to confirm changes.*/

const student = {
    name : "Anaya",
    age : 21,
    city : "Jaipur",
    course : "B.Tech",
    marks : [45, 67,52],
}
console.log(student);
console.log(student.name);
console.log(student.age);
console.log(student.marks[0]);

student.email = "anaya@example.com";
student.age = 22;
delete student.city;

console.log(student);


/*Task 2 Method with this
Create an object bankAccount with: holder = "Aarav", balance = 5000.
Add a method deposit(amount) that adds to the balance and returns the new balance.
Add a method withdraw(amount) that subtracts (only if balance is enough) and returns the new balance, or returns the string "Insufficient funds".
Test: deposit 1000, withdraw 2000, withdraw 10000.*/

const bankAccount = {
    holder : "Aarav", 
    balance : 5000,

    deposit(amount){
        this.balance += amount;
        return `New balance: ${this.balance}`;
    },

    withdraw(amount){
        if(this.balance > amount){
            this.balance -= amount;
            return `Your balance after withdrawing ${this.amount} is ${this.balance}` ;
        }else{
            return "Insufficient funds";
        }
    }
}
console.log(bankAccount.deposit(1000));
console.log(bankAccount.withdraw(2000));
console.log(bankAccount.withdraw(10000));

/*Task 3 Destructuring
Use this object: const product = { id: 101, name: "Laptop", price: 60000, brand: "Dell", stock: 5 };
Destructure name and price into variables and log them.
Destructure brand but rename it to make. Log it.
Destructure warranty with a default value of "1 year" (since the property doesn't exist). Log it.*/

const product = { id: 101, name1: "Laptop", price: 60000, brand: "Dell", stock: 5 };

const {name1,price} = product;
console.log(name1, price);

const { brand:make}= product;
console.log(make);

const {warranty = "1 year"} = product;
console.log(warranty);

/*Bonus Object as Iterable
Use the student object from Task 1 (after modifications).
Use Object.keys to log all keys.
Use Object.values to log all values.
Use Object.entries with forEach to log each property as "key: value".
Bonus: count how many properties the object has.*/

const student2 = {
    name2 : "Anaya",
    age2 : 22,
    city2 : "Jaipur",
    course2 : "B.Tech",
    email2 : "anaya@example.com",
    marks2 : [45, 67,52],
}
const keys = Object.keys(student2);
const values = Object.values(student2);
Object.entries(student2).forEach(([key,value]) => {
    console.log(`${key}:${value}`);
});

console.log(keys);
console.log(values);
//console.log(entries);

console.log(keys.length);
