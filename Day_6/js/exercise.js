
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










