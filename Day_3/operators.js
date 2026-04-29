//Arithmetic
console.log(10+3);
console.log(10*3);
console.log(10%3);
console.log(10-3);
console.log(10/3);
console.log(2**8);

//Assignment
let x=10;
x+=5
console.log(x);
x-=2
console.log(x);
x*=4
console.log(x);
x/=5
console.log(x);

//Comparison
const a= 5=="5";
console.log(a);

const b= 5==="5";
console.log(b);

const c = 0==false;
console.log(c);

const d = 0===false;
console.log(d);

const e = null==undefined;
console.log(e);

const f = null===undefined;
console.log(f);

//Logical
const a = 1;
const b = 2;
console.log(a>b && a<b);

console.log(a>b || a<b);

const boolVal = true;
console.log(!boolVal);

//Ternary

const age = 7;
console.log(age<=18? "minor": "adult");

const mark = 25;
console.log(mark>=40? "passed":"failed");

//Optional chaining(?.) and Nullish coalescing(??)
const order = {
  id: 123,
  customer: {
    name: "Alice",
    address: {
      city: "New York"
    }
  }
};

console.log(order?.customer?.address?.city);
console.log(order?.customer?.address?.street);
console.log(order?.customer?.phone?.number);


const userAge =0;
const ageToShow = userAge?? "not provided";
const ageToShowOr = userAge|| "not provided";

console.log(ageToShow);
console.log(ageToShowOr);


