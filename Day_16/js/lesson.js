/*Task 1
 Inspect a Prototype
Create 
const arr = [1, 2, 3];
Use 
Object.getPrototypeOf(arr) and log it. What is it?
Now log 
And once more — log the next step. What value ends the chain?
In a comment, draw the chain.*/

const arr = [1, 2, 3];
const prototype = Object.getPrototypeOf(arr);
console.log(prototype);

const nextStep = Object.getPrototypeOf(prototype);
console.log(nextStep);


/*Task 2 Build with Object.create
Create an object vehicle with method start() { console.log(${this.name} starting); }
Use Object.create(vehicle) to make car and set car.name = "Tata Nexon".
Make bike the same way with name = "Royal Enfield".
Call start() on both.
Use hasOwnProperty and in to confirm name is own and start is inherited.*/

const vehicle = {
    start() {
        console.log(`${this.name} starting`);
    }      
};

const car = Object.create(vehicle);
car.name = "Tata Nexon";    

const bike = Object.create(vehicle);
bike.name = "Royal Enfield";    
car.start();
bike.start();
console.log(car.hasOwnProperty("name"));
console.log(car.hasOwnProperty("start"));
console.log("name" in car);
console.log("start" in car);
