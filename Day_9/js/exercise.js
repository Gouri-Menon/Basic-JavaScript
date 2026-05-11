const name = "priya";
const age = 24;

const msg1 = "Hi " + name + "! I'm " + age + " years old.";
console.log(msg1);

const msg2 = `Hi ${name}! I'm ${age} years old.`;
console.log(msg2);

const multiline = `Hi my name is
Gouri and 
I'm 24 years old`;
console.log(multiline);

const total = 1500;
const print = `Total ${total >=1000 ? "qualifies" : "doesn't qualify"} for free shipping`;
console.log(print);

const taxed = `Final price =  ${(1000*1.18).toFixed(2)}`;
console.log(taxed);

const colors = ["red", "green", "blue"];
const [first, second, third] = colors;
console.log(first, second, third);

const [,, last] = colors;
console.log(last);

const [a,b,c,d="yellow"] = colors;
console.log(d);

let x=1, y=2;
[x,y] = [y,x];
console.log(`x is ${x}`);
console.log(`y is ${y}`);

const nums = [1,2,3,4,5];
const[head,...tail]= nums;
console.log(head);
console.log(tail);

const showInfo = ({name= "Guest", role ="User"}={}) => `${role}: ${name}`;
console.log(showInfo());
console.log(showInfo({role : "admin"}));
console.log(showInfo({name : "riya"}));

function greet(greeting,...names){
    return names.map(n =>`${greeting}, ${n}`).join(' | ');
}
console.log(greet("Hi", "Priya","Arnav"));

const max = (...n) => Math.max(...n);
console.log(max(3, 1, 4, 1, 5, 9, 2, 6));

const fieldName = "email";
const value = "priya@x.in";
const userProp = {
    name:"Priya",
    [fieldName] : value,
    [`is_${fieldName}_verified`] : true
};
console.log(userProp);