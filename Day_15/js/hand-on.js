const user = {
    name : "Priya",
    greet() {
        console.log(this.name);
    }
}
user.greet();   // Priya
const g = user.greet;
g(); // undefined because this is not bound to user

const h = user.greet.bind(user);
h(); // Priya because this is bound to user