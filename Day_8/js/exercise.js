//dot bracket
const user = { name: "Priya", age: 24, "favourite color": "blue" };

// Dot — clean
console.log(user.name);             
console.log(user.age);               

// Bracket — when key is dynamic
const field = "name";
console.log(user[field]);  

console.log(user["favourite color"]);

const u = { name: "Priya" };
console.log(u.name);

const f="name";
console.log(u[f]);

console.log(u.email);


//add update delete

const users = { name: "Priya", age: 24 };
console.log(users);
users.city =" Kochi";
users.name =" Gouri";
console.log(users);
delete users.city;
console.log(users);

 //method, this

 const member={
    name :"gouri",
    age : 24,

    greet(){
        return `Hello ${this.name}!`;
    }
 }
 console.log(member.greet());

 const client = { name: "Riya", age: 23, city: "Jaipur", email: "r@x.in" };

 const userName = client.name;

 const{name,age}=client;
 console.log(client);
 /*const user = { name: "Riya", age: 23, city: "Jaipur", email: "r@x.in" };

// Without destructuring — verbose
const name1 = user.name;
const age1 = user.age;

// WITH destructuring — clean
const { name, age } = user;
console.log(name, age);   // Riya 23

// Rename — pull `name` but call it `userName`
const { name: userName, city } = user;
console.log(userName, city);   // Riya Jaipur

// Default values — when property is missing
const { phone = "N/A" } = user;
console.log(phone);            // "N/A"

// Use it in function parameters
const greet = ({ name, age }) => `Hi ${name}, age ${age}`;
console.log(greet(user));      // Hi Riya, age 23*/