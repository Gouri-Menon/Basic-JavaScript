/*1. Use 
Object.create to build a 3-level chain: 
tool → vehicle → car . Each level adds one method.
Confirm a 
car instance can call all three methods.*/
const tool = {
    use() {
        console.log("Using the tool");
    }

};

const vehicle = Object.create(tool);    
vehicle.move = function() {
    console.log("Moving the vehicle");
};

const car = Object.create(vehicle);
car.drive = function() {
    console.log("Driving the car");
};
car.use();
car.move();
car.drive();    



/*2. Build a 
Shape(name) constructor with a 
describe() method on the prototype. Then build
Circle(name, radius) that inherits from 
Shape and adds an 
name "C1" and radius 5.
3. Take any built-in prototype (e.g. 
prototype just before 
area() method. Test with a Circle of
String.prototype ) and inspect it in the console. Find five methods you
didn't know about. Document one with a code example.
4. Write a function 
chainOf(obj) that returns an array of every prototype in 
obj 's chain, ending at the
null .
5. Read: 
javascript.info/prototype-inheritance and 
javascript.info/function-prototype .
6. (Bonus) Watch Akshay Saini's "Namaste JS — Prototype" episode. ~12 minutes*/