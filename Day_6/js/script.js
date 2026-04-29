

/*function silent() {
  console.log("doing stuff");
}
const x = silent();
console.log(x);*/

function add(a, b) { return a + b; }
console.log(add(5, 3));

function silent() { console.log("hi"); }
const x = silent();
console.log(x);

const greets = function(name) {
  return "Hello, " + name;
};
console.log(greets("gouri"));

function add(a,b){
  return a+b;
}
console.log(add(2,3));

function square(x){
  return x*x;
}
console.log(square(3));

function greeting(){
  console.log("hello");
}

// Parameters & Defaults

const sum = function(a,b,c=10,d=3){
  return a+b+c+d;
}
console.log(`sum of all the values: ${sum(2,5)}`);
console.log(`sum of all the values: ${sum(2,5,2,1)}`);


/*Task 1 Rectangle Area
Write a function area(length, width) that returns the area of a rectangle.
Call it three times with different values and log each result.
Bonus: rewrite the same function as an arrow function with implicit return.*/

function area(length,width){
  return length*width;
}
console.log(area(3,4));
console.log(area(4,4));
console.log(area(2,2));

const area_2 = (a,b)=> a*b;
console.log(area_2(5,5));

/*Task 2 Greeting with Default
Write a function greet(name) that returns "Hello, <name>!".
Use a default parameter: if no name is passed, it should default to "Guest".
Call it three times: with "Priya", with "Aarav", and with no argument.
Bonus: try greet(null) — does it use the default? Why or why not?*/

const greet = function greet(name = "Guest"){
  return "Hello " + name + "!";
}
console.log(greet());
console.log(greet("Priya"));
console.log(greet("Aarav"));
console.log(greet(null)); //not print Guest because it will only work for undefined


/*Task 3 Temperature Converter
Write an arrow function cToF(celsius) that converts Celsius to Fahrenheit.
Formula: F = C * 9/5 + 32.
Use implicit return.
Test with: 0, 100, 37 (body temperature), and 45 (Jaipur summer).*/

const cToF = (C) => {
  return C * 9/5 + 32;
}
console.log(cToF(0));
console.log(cToF(100));
console.log(cToF(37));
console.log(cToF(45));

/*Bonus Pure vs Impure
Write a PURE function double(n) that returns n * 2.
Then write an IMPURE function addToTotal(n) that updates an outer variable let total = 0 and returns the new total.
Call each function three times. Note how the impure one's output depends on previous calls.
Write a comment: which one is easier to reason about, and why?*/

let total = 0;
function double(n){
  return n*2;
}
console.log(double(2));
console.log(double(4));

function addTotal(n){
  return total += n;
}
console.log(addTotal(2)); //0+2 =2
console.log(addTotal(3)); //0+2+3 =5

//Write a function kmToMiles(km) — formula km * 0.621.
const kmToMiles = function(km){
  return km*0.621;
}
const result = kmToMiles(52);
console.log(result);

//Write a function gstAmount(price, rate = 18) returning the tax amount.

function gstAmount(price, rate = 18){
  return price* (rate/100);
}
console.log(`Tax amount: ${gstAmount(100)}`);

//Write a function fullName(first, last) returning the full name as one string.
const fullName = (first,last)=> first+" "+last;
console.log(fullName("gouri","menon"));

//Write a function isAdult(age) returning true/false.
function isAdult(age){
  if(age>=18){
    return true;
  }else{
    return false;
  }
}
console.log(isAdult(40));
console.log(isAdult(10));






